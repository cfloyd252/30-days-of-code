function processData(input) {
  let inputArray = input.split('\n')
  let numOfTestCases = parseInt(inputArray[0], 10)

  for(let i = 1; i <= numOfTestCases; i++) {
    let string = inputArray[i];
    let evenIndex = '';
    let oddIndex = '';

    for(let j = 0; j < string.length; j++) {
      //even index
      if ( j % 2 === 0) {
        evenIndex = evenIndex.concat(string[j])
      } 

      //odd index
      else {
        oddIndex = oddIndex.concat(string[j])
      }
    }

    console.log(`${evenIndex} ${oddIndex}`)
  }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});

