const fs = require('fs');

const movements = fs.readFileSync('2.txt', 'utf-8').split('\n').filter(x => x).map(x => x.split(' '));

let position = 0;
let depth = 0;

for (let i = 0; i < movements.length; i++) {
    switch(movements[i][0]) {
        case 'forward':
            position += parseInt(movements[i][1]);
            break;
        case 'down':
            depth += parseInt(movements[i][1]);
            break;
        case 'up':
            depth -= parseInt(movements[i][1]);
            break;
        default:
            console.log('no movement registered');
    }
}

console.log(position * depth);