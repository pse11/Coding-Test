let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split(" ");

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

console.log(A+B+C);