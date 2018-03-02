// ==UserScript==
// @name     Ataques
// @version  1
// @grant    none
// ==/UserScript==

if(document.title.substring(0,  6) == "Rua de") {
	var x = document.getElementsByClassName("window-modal-content");
	if(x.length == 1) {
  	x = document.getElementsByClassName("merr");
	  if(x.length == 0) {
  		console.log("pode atacar");
    	var beat = document.getElementsByClassName("beat");
  	  window.location.href = beat[1]["href"];
	  } else {
    	x = document.getElementsByClassName("merr");
			x = x[0].textContent;
  
	  	if(x.substring(0,28) == "Já atacou este gangster hoje") {
				console.log("Já atacou este gangster");
    	  //window.location.href = "http://www.google.com.br";
        
        var temp = (x.substring(70, 72) * 1000) + (x.substring(67, 69) * 60000) + (x.substring(64, 66) * 3600000);
        temp -= 1500;
    	  console.log(temp);
  	    window.setTimeout(function() {
	        console.log("atacando...");
        	var beat = document.getElementsByClassName("beat");
    			window.location.href = beat[1]["href"];
    	  }, temp);
        
			}
			else if(x.indexOf("Você não pode atacar. O gangster está bastante espancado") != -1) {
				console.log("alguem atacou");
      	var temp = (x.substring(98, 100) * 1000) + (x.substring(95, 97) * 60000) + (x.substring(92, 94) * 3600000);
      	temp -= 1500;
    	  console.log(temp);
  	    window.setTimeout(function() {
	        console.log("atacando...");
        	var beat = document.getElementsByClassName("beat");
    			window.location.href = beat[1]["href"];
    	  }, temp);
			}
      else {
        console.log("preso ou hospital")
      	window.setTimeout(function() {
	        console.log("atacando...");
        	var beat = document.getElementsByClassName("beat");
    			window.location.href = beat[1]["href"];
    	  }, 300000);
      }
	  }
	} else {
  	console.log("Já atacou este gangster");
  	window.location.href = "http://www.google.com.br";
	}
}

if(document.title.indexOf("Gangue") != -1) {
  if(window.location.href.indexOf("list") != -1) {
    var gangue = document.getElementsByClassName("gang")[2];
    localStorage.setItem("gangue", gangue.textContent);
  }
  
}
