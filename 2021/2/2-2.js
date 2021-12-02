const fs = require('fs');

const movements = fs.readFileSync('2.txt', 'utf-8').split('\n').filter(x => x).map(x => x.split(' '));

let position = 0;
let depth = 0;
let aim = 0;

for (let i = 0; i < movements.length; i++) {
    const action = movements[i][0];
    const value = parseInt(movements[i][1]);

    switch(action) {
        case 'forward':
            position += value;
            depth += aim * value;
            break;
        case 'down':
            aim += value;
            break;
        case 'up':
            aim -= value;
            break;
        default:
            console.log('no movement registered');
    }
}

console.log(position * depth);