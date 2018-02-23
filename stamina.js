// ==UserScript==
// @name     Stamina
// @version  1
// @grant    none
// ==/UserScript==

/*if(document.title.substring(0,  6) == "Rua de") {  
  var stamina = document.getElementsByClassName("smarttip")[10];
  if(stamina.text < 60){
    console.log("-");
    window.open(stamina.href);
  } else { 
    console.log("+");
  }
}*/


if(document.title.substring(0, 5) == "Hotel") {
  console.log("1");
  var stamina = document.getElementsByClassName("smarttip");
  for(var x = 0; x < stamina.length; x++) {
  if(stamina[x].href != null) {
    if(stamina[x].href.indexOf("bar") != -1) {
      stamina = stamina[x];
      console.log(stamina);
    }
  }
  }
  console.log(stamina.title.substring(33, 36) + " < " + stamina.title.substring(39, 42));
  if(parseInt(stamina.title.substring(33, 36)) < parseInt(stamina.title.substring(39, 42))) {
    console.log("2");
    var itens = document.getElementsByClassName("item");
    for(var x = 0; x < itens.length; x++) {
      if(itens[x].innerHTML.indexOf("Whisky") != -1) {
        console.log("3");
        window.location.href = itens[x].firstChild.href;
      }
    }    
  } else {
  	window.setTimeout(function() {
    	window.location.href = stamina.href;
  	}, 5000);
	}
}