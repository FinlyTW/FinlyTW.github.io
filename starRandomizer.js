function prnt() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let a = getRandomInt(98) + 1;
  let b = getRandomInt(98) + 1;
  let c = getRandomInt(4) + 8;  // 7
  c = c/10;
  let d = getRandomInt(46) + 210;
  let e = getRandomInt(46) + 210;
  let f = getRandomInt(46) + 210;
  let g = getRandomInt(25);
  let h = getRandomInt(2) + 5;

  document.writeln(`<span style="font-size:${c}vh;top:${a}vh;left:${b}vw;color:rgb(${d},${e},${f});animation: ${h}s linear ${g}s infinite alternate both blik;">•</span>`);
}

function starset() {
  starCount = Math.floor(Math.random() * 40) + 80;
  for (step = 0; step < starCount; step++) {
    prnt()
  }
}
