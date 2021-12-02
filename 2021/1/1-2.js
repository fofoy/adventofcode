const fs = require('fs');

const depth = fs.readFileSync('1.txt', 'utf-8').split('\n').filter(x => x).map(x => parseInt(x));

let sum = 0;
let depthWindows = [];

for (let i = 2; i < depth.length; i++) {
    depthWindows.push(depth[i - 2] + depth[i - 1] + depth[i]);
}

for (let i = 0; i < depthWindows.length; i++) {
    if(i >= 1) {
        if(depthWindows[i] > depthWindows[i - 1]) sum++;
    }
}

console.log(sum);