// Objective
// In this challenge, we're getting started with conditional statements. 
// Check out the Tutorial tab for learning materials and an instructional video!

// Task
// Given an integer, , perform the following conditional actions:

// If  is odd, print Weird
// If  is even and in the inclusive range of  to , print Not Weird
// If  is even and in the inclusive range of  to , print Weird
// If  is even and greater than , print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.

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

function isItWeird(number) {
  if (number % 2 !== 0) {
    console.log('Weird');
  } else if (number >= 2 && number <= 5) {
    console.log('Not Weird');
  } else if (number >= 6 && number <= 20) {
    console.log('Weird');
  } else {
    console.log('Not Weird');
  }
}



function main() {
  const N = parseInt(readLine(), 10);

  isItWeird(N);
}