const NODE_TYPES = {
    NETWORK: 'NETWORK',
    MCU: 'MCU'
  }
  
const nodeElements = [
    {  data: { id: 'network1', label: 'Network 1', type: NODE_TYPES.NETWORK }, position: { x: 100, y: 100 }},
    {  data: { id: 'network2', label: 'Network 2', type: NODE_TYPES.NETWORK }, position: { x: 600, y: 700 }},
    {  data: { id: 'network3', label: 'Network 3', type: NODE_TYPES.NETWORK }, position: { x: 200, y: 250 }},
  
    {  data: { id: 'mcu1', label: 'Mcu 1', type: NODE_TYPES.MCU }, position: { x: 700, y: 100 }},
    {  data: { id: 'mcu2', label: 'Mcu 2', type: NODE_TYPES.MCU }, position: { x: 50, y: 650 }},
    {  data: { id: 'mcu3', label: 'Mcu 3', type: NODE_TYPES.MCU }, position: { x: 300, y: 200 }},
    {  data: { id: 'mcu5', label: 'Mcu 5', type: NODE_TYPES.MCU }, position: { x: 200, y: 450 }},
    {  data: { id: 'mcu6', label: 'Mcu 6', type: NODE_TYPES.MCU }, position: { x: 450, y: 500 }},
  
    {  data: { id: 'edge1', source: 'mcu1', target: 'network1' }},
    {  data: { id: 'edge2', source: 'mcu2', target: 'network1' }},
    {  data: { id: 'edge3', source: 'mcu3', target: 'network1' }},
    {  data: { id: 'edge5', source: 'mcu5', target: 'network2' }},
    {  data: { id: 'edge6', source: 'mcu6', target: 'network3' }},
    {  data: { id: 'edge7', source: 'mcu3', target: 'network3' }},
    {  data: { id: 'edge8', source: 'mcu2', target: 'network2' }},
]

const isEdge = (element) => {
    return ('source' in element.data) && ('target' in element.data);
}

const getEdges = (nodeElements) => {
    return nodeElements.filter(isEdge);
}


const optimizeGraph = (nodeElements) => {
    let edges = getEdges(nodeElements);
    // nodeElements[0].position.x = 500;
    // const regex = new RegExp(char, "g")
    // const replaced = str.replace(regex, replacer)
    // return replaced
    // return nodeElements;
    return edges;
}

var xx = 0;
const st = () => {
    ++xx;
    console.log('xx: ', xx)
}
// edges = optimizeGraph(nodeElements)
// console.log(edges)
let x = [{a:2,b:1},{a:5,b:4},{a:2,b:3},{a:8,b:0}]
let y = x.concat().sort((a,b)=>{return a.a-b.a})
y[3].b = 10;
// console.log(x)
// console.log(y)
st();
st();
console.log(parseInt(0));
let m = [1,2,6,4,3]
console.log(Math.max(...m));
