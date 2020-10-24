// Objective
// In this challenge, we're going to use loops to help us do some simple math. 
// Check out the Tutorial tab to learn more.

// Task
// Given an integer, , print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: n x i = result.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}



function main() {
  const n = parseInt(readLine(), 10);

  for(let i = 1; i <= 10; i++) {
    let sum = n * i;

    console.log(`${n} x ${i} = ${sum}`);
  }
}
