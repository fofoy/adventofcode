const fs = require('fs');

const depth = fs.readFileSync('1.txt', 'utf-8').split('\n').filter(x => x).map(x => parseInt(x));

let sum = 0;

for (let i = 0; i < depth.length; i++) {
    if(i >= 1) {
        if(depth[i] > depth[i - 1]) sum++;
    }
}

console.log(sum);