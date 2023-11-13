import cytoscape from 'cytoscape';
import elk from 'cytoscape-elk'
import fcose from 'cytoscape-fcose'
import cola from 'cytoscape-cola';
import dagre from 'cytoscape-dagre';

cytoscape.use(elk)
cytoscape.use(fcose)
cytoscape.use(dagre);
cytoscape.use(cola);


const getAlgoOptions = (algo) => {
  let algoOptions;
  switch (algo) {
    case 'cose-bilkent':
      // disabled
      algoOptions = {
        name: 'cose-bilkent',
        nodeRepulsion: 15000,
        edgeElasticity: 0.1,
        idealEdgeLength: 40,
        nestingFactor: 0.5,
        gravity: 0.1,
        numIter: 2500,
        tile: true,
        tilePaddingVertical: 20,
        tilePaddingHorizontal: 20,
      };
      break;
    case 'fcose':
      algoOptions = {
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
        // gravityRangeCompound: 1.5,
        // gravityCompound: 1.0,
        gravityRange: 0.8,
        initialEnergyOnIncremental: 0.6,
      };
      break;
    case 'dagre':
      // disabled
      algoOptions = {
        name: 'dagre',
      };
      break;
    case 'cola':
      // disabled
      algoOptions = {
        name: 'cola',
        animate: true, // whether to show the layout as it's running
        refresh: 1, // number of ticks per frame; higher is faster but more jerky
        maxSimulationTime: 9000, // max length in ms to run the layout
        ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
        fit: true, // on every layout reposition of nodes, fit the viewport
        padding: 30, // padding around the simulation
        boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
        nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node
      
        // layout event callbacks
        ready: function(){}, // on layoutready
        stop: function(){}, // on layoutstop
      
        // positioning options
        randomize: true, // use random node positions at beginning of layout
        avoidOverlap: true, // if true, prevents overlap of node bounding boxes
        handleDisconnected: true, // if true, avoids disconnected components from overlapping
        convergenceThreshold: 0.01, // when the alpha value (system energy) falls below this value, the layout stops
        nodeSpacing: function( node ){ return 10; }, // extra spacing around nodes
        flow: undefined, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
        alignment: undefined, // relative alignment constraints on nodes, e.g. {vertical: [[{node: node1, offset: 0}, {node: node2, offset: 5}]], horizontal: [[{node: node3}, {node: node4}], [{node: node5}, {node: node6}]]}
        gapInequalities: undefined, // list of inequality constraints for the gap between the nodes, e.g. [{"axis":"y", "left":node1, "right":node2, "gap":25}]
        centerGraph: true, // adjusts the node positions initially to center the graph (pass false if you want to start the layout from the current position)
      
        // different methods of specifying edge length
        // each can be a constant numerical value or a function like `function( edge ){ return 2; }`
        edgeLength: undefined, // sets edge length directly in simulation
        edgeSymDiffLength: undefined, // symmetric diff edge length in simulation
        edgeJaccardLength: undefined, // jaccard edge length in simulation
        jaccardLinkLengths: 10,
        // iterations of cola algorithm; uses default values on undefined
        unconstrIter: undefined, // unconstrained initial layout iterations
        userConstIter: undefined, // initial layout iterations with user-specified constraints
        allConstIter: undefined, // initial layout iterations with all constraints including non-overlap
        };
      break;
    case 'elk':
    default:
      algoOptions = {
        name: 'elk',
        elk: {
          algorithm: 'stress',
          'stress.epsilon': 0.1, // Adjust the minimum allowed distance between nodes
          'stress.desiredEdgeLength': 40.0,
        },
      };
      break;
  };
  return algoOptions;
}


const layoutOptions = {
  fit: true,
  padding: 100,
  animate: false,
  animationDuration: 500,
  quality: 'proof',
  randomize: true,
  nodeDimensionsIncludeLabels: true,
  ...getAlgoOptions('fcose'),
}; // layout options for the nodes


export const stylesheet = {
  style: [
    {
      selector: 'node',
      css: {
        'background-color': '#f92411'
      }
    },

    {
      selector: 'node:parent',
      css: {
        'background-opacity': 0.333
      }
    },

    {
      selector: 'edge',
      css: {
        'line-color': '#f92411'
      }
    }
  ],
base: {
    width: '800px',
    height: '800px',
    border: '1px dashed grey'
  },
  elements: [
    {
      selector: 'node',
      style: {
        label: 'data(label)'
      }
    },
    {
      selector: 'node[type="MCU"]',
      style: {
        backgroundColor: 'green',
        shape: 'rectangle',
        width: '15px',
        height: '15px',
      }
    },
    {
      selector: 'node[type="NETWORK"]',
      style: {
        backgroundColor: 'lightgreen',
        shape: 'diamond',
        width: '45px',
        height: '45px',
      }
    },
    {
      selector: 'edge',
      style: {
        curveStyle: 'straight',
        // curveStyle: 'taxi',
        width: 2
      }
    }
  ],
  layout: layoutOptions
}