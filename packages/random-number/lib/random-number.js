"use strict";
//function return a random num
// 1
function randomNumberMultiply(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num * 100;
}

// 2
module.exports = randomNumberMultiply;
