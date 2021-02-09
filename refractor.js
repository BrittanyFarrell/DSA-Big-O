
/* eslint-disable strict */

// 1. Counting Sheep
function sheepCounter(num) {
  let arr = [];
  
  for (let x = num; x >= 0; x--) {
    if (x === 0) {
      const noSheep = 'All sheep jumped over the fence';
      arr.push(noSheep);
    } else {
      let countingSheep =  `${x}: Another sheep jumps over the fence`;
      arr.push(countingSheep);
    }
  }
  return arr.join(`\n`);
}

// let logMeBaby = sheepCounter(12);
// console.log(logMeBaby);

/*                                         

This solution's complexity is O(n)
Though it's not mapping over an array, the run time is proportionate to to the size of the data. In this case, how large the number is.

*/


// 2. Power Calculator
function powerCalculator(base, exp) {
  let answer = 1;

  if (exp <= 0) {
    return 0;
  }

  for (let x = exp; x > 0; x--) {
    answer = answer * base;
  }
 
  return answer;
}

// let logMeBaby = powerCalculator(2, 5);
// console.log(logMeBaby);

/*                                         

This solution's complexity is O(n)
This is another function that has a run time proportionate to the size of the data. 

*/


// 3. Reverse String
function reverseStr(str) {
  if (str === '') {
    return str;
  }

  const [first, ...remaining] = str;
  console.log(first);
  return reverseStr(remaining.join('')) + first;
}


// 4. nth Triangular Number
/// bellow doesn't use recursion
function calculateTriangleNumber(n){
  const x = n + 1;
  const T = n * x / 2;

  return T;
}
/// above doen't use recursion


// 5. String Splitter
function splitStr(str, char) {
  if (str.length === 0) {
    return '';
  }
  const currentChar = str[0] === char ? '' : str[0];
  const newStr = currentChar + strSplit(str.slice(1), char);
  
  return newStr;
}


// 6. Fibonacci
function teddyFib(num) {
  if (num <= 0) return [];
  if (num === 1) return [1];
  if (num === 2) return [1, 1];

  const last = teddyFib(num-1);
  return [...last, last[last.length-1] + last[last.length - 2]];
}


// 7. Factorial
function factorial(num) {
  return num <= 0 ? 1 : num * factorial(num - 1);
}