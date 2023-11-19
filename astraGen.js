function starGen() {
  let a = GRI(98) + 1;
  let b = GRI(98) + 1;
  let c = GRI(4) + 8;
  c = c/10;
  let d = GRI(46) + 210;
  let e = GRI(46) + 210;
  let f = GRI(46) + 210;
  let g = GRI(25);
  let h = GRI(2) + 5;

  document.writeln(`<span inert style="font-size:${c}vh;top:${a}%;left:${b}vw;color:rgb(${d},${e},${f});animation:${h}s linear ${g}s infinite alternate both blik;">•</span>`);
}

function cometGen() {
let sw = document.documentElement.clientWidth;
console.log(sw);
let sh = document.documentElement.clientHeight;
console.log(sh);
let minSW = 0 - (sw*0.1);
console.log(minSW);
let minSH = 0 - (sh*0.1);
console.log(minSH);
let maxSW = 0 + (sw*1.1);
console.log(maxSW);
let maxSH = 0 + (sh*1.1);
console.log(maxSH);
document.writeln(`<img inert src="2.svg" style="height:7vh;offset-path: path('M ${minSW} ${minSH} l ${maxSW} ${maxSH}');animation: cometFly 1s linear infinite;position: absolute;top:0;left:0; offset-rotate: auto;">`);
}


function starPrint() {
  starCount = GRI(40) + 80;
  for (step = 0; step < starCount; step++) {
    starGen();
  }
  //cometGen();
}
