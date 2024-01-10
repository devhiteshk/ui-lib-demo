"use strict";
//function return a random num
// 1
function randomNumberDivide(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num / 100;
}

// 2
module.exports = randomNumberDivide;
