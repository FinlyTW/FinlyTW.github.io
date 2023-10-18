function prnt() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let a = getRandomInt(100);
  let b = getRandomInt(100);
  let c = getRandomInt(3) + 2;
  document.writeln('<img src="star.svg" style="width:0.' + c + 'vh;top:' + a + 'vh;left:' + b + 'vw;">');
}

function starset() {
  starCount = Math.floor(Math.random() * 40) + 80;
  for (step = 0; step < starCount; step++) {
    prnt()
  }
}
