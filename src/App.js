
import CytoscapeComponent from 'react-cytoscapejs'
import { nodeElements } from './nodeElements'
import { stylesheet } from './stylesheet'
import { optimizeGraph } from './optimizer'
import { useEffect, useState } from 'react';

const App = () => {
  // let changedNodeElements = optimizeGraph(nodeElements);
  
  const [cy, setCy] = useState(null);
  useEffect(() => {
    if (cy) {
      // let bc = cy.elements().betweennessCentrality();
      optimizeGraph(cy, nodeElements);
    }
  }, [cy]);
  return (
    <CytoscapeComponent
      stylesheet={stylesheet.elements}
      style={stylesheet.base}
      cy={cyRef => setCy(cyRef)}
      elements={nodeElements}
      layout={stylesheet.layout}
    />
  )
}

export default App
