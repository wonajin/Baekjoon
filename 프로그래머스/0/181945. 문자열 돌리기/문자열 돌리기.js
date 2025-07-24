const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = [line];  
}).on('close', function () {
  let arr = input[0];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
});
