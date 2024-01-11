import cytoscape from 'cytoscape'
import { stylesheet } from './stylesheet';

import elk from 'cytoscape-elk'
import fcose from 'cytoscape-fcose'
import cola from 'cytoscape-cola';
import dagre from 'cytoscape-dagre';

cytoscape.use(elk)
cytoscape.use(fcose)
cytoscape.use(dagre);
cytoscape.use(cola);


const isEdge = (element) => {
    return ('source' in element.data) && ('target' in element.data);
}

const getEdges = (nodeElements) => {
    return nodeElements.filter(isEdge);
}



const getMatrixDimensions = () => {
    let widthMax = 0;
    let heightMax = 0;
    stylesheet.elements.forEach((val) => {
        widthMax = Math.max(widthMax, parseInt(val.style.width ?? 0));
        widthMax = Math.max(heightMax, parseInt(val.style.height ?? 0));
    })
    let baseWidth = parseInt(stylesheet.base.width);
    let baseHeight = parseInt(stylesheet.base.height);
    const padFactor = 2;
    let cell = {
        width: widthMax * padFactor,
        height: heightMax * padFactor    
    };
    let matrix = {
        width: Math.floor(baseWidth / cell.width),
        height: Math.floor(baseHeight / cell.height)
    };
    let center = {
        width: Math.floor(matrix.width / 2),
        height: Math.floor(matrix.height / 2)
    };

    return { matrix: matrix, cell: cell, center: center };
}

var cnt = 0;
export const optimizeGraph = (cy, nodeElements) => {
    if (cnt++) {
        return;
    }
    // let edges = getEdges(nodeElements);

    // nodeElements[0].position.x = 500;

    let bc = cy.$().bc();
    let nodes = cy.nodes();
    // nodes.forEach((ele, i, eles) => {
    //     console.log('bc for ', ele.id(), ' is ', bc.betweenness(ele));
    // });


    // let sortedNodes = nodes.sort((a,b) => { return bc.betweenness(b)-bc.betweenness(a); });
    // sortedNodes.forEach((ele, i, eles) => {
    //     console.log('bc for ', ele.id(), ' is ', bc.betweenness(ele));
    // });
    // let mostCentralNode = sortedNodes[0];

    let centralMax = nodes.max((ele, i, eles) => { return bc.betweenness(ele); });
    let mostCentralNode = centralMax.ele;
    console.log('mostCentralNode ', mostCentralNode.id(), ' bc is ', bc.betweenness(mostCentralNode));
    // let dimensions = getMatrixDimensions();
    // matrix = new Map([[dimensions.center, ]]);
    let fixMostCentral = [{
        nodeId: mostCentralNode.id(), position: {
            x: parseInt(cy.width()/2),
            y: parseInt(cy.height()/2)}
            // x: parseInt(parseInt(stylesheet.base.width)/2),
            // y: parseInt(parseInt(stylesheet.base.height)/2)}
        }];
    console.log(' cy dimentions: x: ', cy.width(), ', y: ', cy.height());

    let layoutParams = {
        fit: true,
        padding: 100,
        animate: false,
        animationDuration: 500,
        quality: 'proof',
        randomize: true,
        nodeDimensionsIncludeLabels: true,
        name: 'fcose',
        // packComponents: true,
        // nodeSeparation: 100,
        // piTol: 0.0000001,
        nodeRepulsion: node => 8000,
        // idealEdgeLength: edge => 40,
        edgeElasticity: edge => 0.5,
        // nestingFactor: 0.5,
        numIter: 50000,
        // tile: true,
        // tilePaddingVertical: 20,
        // tilePaddingHorizontal: 20,
        gravity: 0.4,
        gravityRange: 0.8,

        // gravityCompound: 1.0,
        // gravityRangeCompound: 1.5,

        initialEnergyOnIncremental: 0.6,
        fixedNodeConstraint: fixMostCentral,

        // fit: true,
        // padding: 100,
        // animate: true,
        // animationDuration: 500,
        // name: 'elk',
        // quality: 'proof', // : 'default',
        // // quality: 'default',
        // randomize: true,
        // nodeDimensionsIncludeLabels: true,
        // elk: {

        //     // algorithm: 'graphviz.neato',
            

        //     algorithm: 'mrtree',


        //     // algorithm: 'sporeOverlap',
        //     // 'elk.overlapRemoval.maxIterations': 400, // Adjust the minimum allowed distance between nodes
        //     // 'elk.spacing.nodeNode': 20,


        //     // algorithm: 'sporeCompaction',
        //     // 'elk.spacing.nodeNode': 400, // Adjust the minimum allowed distance between nodes
        //     // 'sporeCompaction.desiredEdgeLength': 40.0,

        //     //   algorithm: 'stress',
        // //   'stress.epsilon': 0.1, // Adjust the minimum allowed distance between nodes
        // //   'stress.desiredEdgeLength': 40.0,
        // }
    };
    let layout = cy.layout(layoutParams);
    layout.run();
    
}