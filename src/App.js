
import CytoscapeComponent from 'react-cytoscapejs'
import { nodeElements } from './nodeElements'
import { stylesheet } from './stylesheet'

const App = () => {
  return (
    <CytoscapeComponent
      stylesheet={stylesheet.elements}
      style={stylesheet.base}
      elements={nodeElements}
    />
  )
}

export default App
