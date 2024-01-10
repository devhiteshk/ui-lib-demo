"use strict";

const charactersSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// function returns random str
// hello world
// 1
function randomString(len = 5) {
  const str = [...Array(len)]
    .map((i) =>
      charactersSet.charAt(Math.floor(Math.random() * charactersSet.length))
    )
    .join("");
  return str;
}

// 2
module.exports = randomString;
