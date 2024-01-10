"use strict";
//function return a random num
// 1
function randomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

// 2
module.exports = randomNumber;
