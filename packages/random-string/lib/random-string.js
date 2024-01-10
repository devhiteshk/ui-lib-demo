"use strict";

const charactersSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// function returns random str
// 1
function randomStringHundred(len = 5) {
  const str = [...Array(len)]
    .map((i) =>
      charactersSet.charAt(Math.floor(Math.random() * charactersSet.length))
    )
    .join("");
  return str + "100";
}

// 2
module.exports = randomStringHundred;
