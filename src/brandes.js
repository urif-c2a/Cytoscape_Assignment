// const getOrCreateSet = (map, key) => {
//     if (map.has(key)) {
//         return map.get(key);
//     }
//     else {
//         s = new Set();
//         map.set(s)
//         return s;
//     }
// }

const VertexNode = (id) => {
    this.id = id;
    this.neighbors = Set();
    this.cb = 0;
}

const getOrCreate = (map, id) => {
    if (map.has(id)) {
        return map.get(id);
    }
    else {
        val = new VertexNode(id);
        map.set(val)
        return val;
    }
}


const neighboursPerNode = (edges) => {
    neighboursDict = new Map();
    for (e in edges) {
        getOrCreate(vertDict, e.source).neighbors.add(e.target);
        getOrCreate(vertDict, e.target).neighbors.add(e.source);
    }
    return neighboursDict;
}


const calculateBetweennessCentrality = (neighboursDict) => {
    for (v in neighboursDict.values()) {
        let s = [];
        let p = new Map();
    }
}
for s ∈ V do
S ← empty stack;
P [w] ← empty list, w ∈ V ;
σ[t] ← 0, t ∈ V ; σ[s] ← 1;
d[t] ← −1, t ∈ V ; d[s] ← 0;
Q ← empty queue;
enqueue s → Q;
while Q not empty do
dequeue v ← Q;
push v → S;
foreach neighbor w of v do
// w found for the first time?
if d[w] < 0 then
enqueue w → Q;
d[w] ← d[v] + 1;
end
// shortest path to w via v?
if d[w] = d[v] + 1 then
σ[w] ← σ[w] + σ[v];
append v → P [w];
end
end
end
δ[v] ← 0, v ∈ V ;
// S returns vertices in order of non-increasing distance from s
while S not empty do
pop w ← S;
for v ∈ P [w] do δ[v] ← δ[v] + σ[v]
σ[w] · (1 + δ[w]);
if w 6 = s then CB [w] ← CB [w] + δ[w];
end
end