
for (let i = 0; i < games.length; i++) {
	
	ga = games[i].score.Chill;
	gb = games[i].score.Flex;
	gc = 10 - games[i].score.Problems;
	gd = games[i].score.Interaction;
	ge = games[i].score.Immersion;
	gf = games[i].score.Emotions;
	
	
	games[i].rating = (ga + gb + gc + gd + ge + gf) / 6;
	
	if (games[i].Status == "c" || games[i].Status == "C") {
		games[i].rating = games[i].rating + 100;
	}
	
	if (games[i].Status == "d" || games[i].Status == "D") {
		games[i].rating = games[i].rating - 100;
	}
	
	if (games[i].Status == "h" || games[i].Status == "H") {
		games[i].rating = games[i].rating - 1000;
	}
}


games.sort((a, b) => b.rating - a.rating);


function listWrite () { 
	g = games;
	wa = `<img src="../img/`;
	wb = `.avif" title="`;
	wc = `" alt="`;
	wd = `">`;
	
	w     = `<tr><td style="background-color:gold;color:black;font-size:max(2.5vw,20px);">S</td><td>`;
	wt = "";
		for (i = 0; g.length > 0 && g[0].rating > 10; i++) {
		  wt = wt + wa + g[0].icoPath + wb + g[0].name + wc + g[0].name + wd;
		  g.shift();
	  }
	w = w + wt;
	wt = "";
	w = w + `</td></tr><tr><td style="background-color:blueviolet;color:black;font-size:max(2.5vw,20px);">A</td><td>`;
		for (i = 0; g.length > 0 && g[0].rating > 6.5; i++) {
		  wt = wt + wa + g[0].icoPath + wb + g[0].name + wc + g[0].name + wd;
		  g.shift();
	  }
	w = w + wt;
	wt = "";
	w = w + `</td></tr><tr><td style="background-color:dodgerblue;color:black;font-size:max(2.5vw,20px);">B</td><td>`;
		for (i = 0; g.length > 0 && g[0].rating > 3.5; i++) {
	  	wt = wt + wa + g[0].icoPath + wb + g[0].name + wc + g[0].name + wd;
	  	g.shift();
	  }
	w = w + wt;
	wt = "";
	w = w + `</td></tr><tr><td style="background-color:springgreen;color:black;font-size:max(2.5vw,20px);">C</td><td>`;
		for (i = 0; g.length > 0 && g[0].rating > 0; i++) {
	  	wt = wt + wa + g[0].icoPath + wb + g[0].name + wc + g[0].name + wd;
	  	g.shift();
	  }
	w = w + wt;
	wt = "";
	//w = w + `</td></tr><tr><td style="background-color:saddlebrown;color:black;font-size:max(2.5vw,20px);">D<br>R<br>O<br>P</td><td>`;
	w = w + `</td></tr><tr><td style="background-color:saddlebrown;color:black;font-size:max(2.5vw,20px);">D<br>R<br>O<br>P</td><td>`;
		for (i = 0; g.length > 0 && g[0].rating > -101; i++) {
	  	wt = wt + wa + g[0].icoPath + wb + g[0].name + wc + g[0].name + wd;
	  	g.shift();
	  }
	w = w + wt;
	wt = "";
	w = w + `</td></tr>`;
}


function tableWrite() {
	document.getElementById("tl-table").innerHTML = w;
	
}