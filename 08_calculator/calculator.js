const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.length > 0 ? arr.reduce ((acc, x) => acc += x ) : 0
};

const multiply = function(arr) {
  return arr.length > 0 ? arr.reduce ((acc, x) => acc *= x ) : 0
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(x) {
	let tot = 1
  for (let i = x; i > 0; i--){
    tot *= i
  }
  console.log(tot)
  return tot
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
