import cytoscape from 'cytoscape'
import { stylesheet } from './stylesheet';

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
    let sortedNodes = nodes.sort((a,b) => { return bc.betweenness(b)-bc.betweenness(a); });
    sortedNodes.forEach((ele, i, eles) => {
        console.log('bc for ', ele.id(), ' is ', bc.betweenness(ele));
    });

    // let dimensions = getMatrixDimensions();
    // matrix = new Map([[dimensions.center, ]]);

    let layoutParams = {
        fit: true,
        padding: 100,
        animate: true,
        animationDuration: 500,
        name: 'elk',
        quality: 'proof', // : 'default',
        // quality: 'default',
        randomize: true,
        nodeDimensionsIncludeLabels: true,
        elk: {
          algorithm: 'stress',
          'stress.epsilon': 0.1, // Adjust the minimum allowed distance between nodes
          'stress.desiredEdgeLength': 40.0,
        }
    };
    let layout = cy.layout(layoutParams);
    layout.run();
    
}