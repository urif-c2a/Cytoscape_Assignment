import cytoscape from 'cytoscape';
import elk from 'cytoscape-elk'
import fcose from 'cytoscape-fcose'

cytoscape.use(elk)
cytoscape.use(fcose)



export const stylesheet = {
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
        // curveStyle: 'straight',
        curveStyle: 'taxi',
        width: 2
      }
    }
  ],
  layout: {
    // fit: false,
    // padding: 100,
    // animate: false,
    // animationDuration: 500,
    // name: 'elk',
    // quality: 'proof', // : 'default',
    // randomize: true,
    // nodeDimensionsIncludeLabels: true,
    // elk: {
    //   algorithm: 'stress',
    //   'stress.epsilon': 0.1, // Adjust the minimum allowed distance between nodes
    //   'stress.desiredEdgeLength': 100.0,
    // },

    // fit: false,
    // padding: 100,
    // animate: true,
    // animationDuration: 500,
    // name: 'elk',
    // quality: 'proof',
    // randomize: true,
    // nodeDimensionsIncludeLabels: true,
    // elk: {
    //   algorithm: 'stress',
    //   'stress.epsilon': 0.1, // Adjust the minimum allowed distance between nodes
    //   'stress.desiredEdgeLength': 40.0,
    // },

    nodeRepulsion: node => 4500,
    gravity: 0.8,
    gravityRange: 3.8,
    name: "fcose"

    // condense: true,
    // name: "grid"

    // grid: true,

    // spacingFactor: 0.5,
    // name: "breadthfirst"
  }
}