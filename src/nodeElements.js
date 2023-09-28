const NODE_TYPES = {
  NETWORK: 'NETWORK',
  MCU: 'MCU'
}

export const nodeElements = [
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
  {  data: { id: 'edge4', source: 'mcu4', target: 'network2' }},
  {  data: { id: 'edge5', source: 'mcu5', target: 'network2' }},
  {  data: { id: 'edge6', source: 'mcu6', target: 'network3' }},
  {  data: { id: 'edge7', source: 'mcu3', target: 'network3' }},
  {  data: { id: 'edge8', source: 'mcu2', target: 'network2' }},
  ]