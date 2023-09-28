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
        curveStyle: 'straight',
        width: 2
      }
    }
  ]
}