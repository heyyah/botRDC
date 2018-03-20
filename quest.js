// ==UserScript==
// @name     Quest
// @version  1
// @grant    none
// ==/UserScript==
/*var t = Math.random() * (6000 - 1000) + 1000;
console.log(t);

window.setTimeout(function() { 
    var x = document.getElementById("blinker");
  var y = document.getElementsByClassName("smarttip");
for(var n = 0; n < y.length; n++) {
	if(y[n].href != null) {
  	if(y[n].href.indexOf("quest") != -1) {
    	y = y[n];
    }
  }
}
if(y.innerText != "-") {
  
  	if(x == null) {
      document.getElementsByClassName("spot")[document.getElementsByClassName("spot").length - 1].click();
      document.getElementsByClassName("st")[0].click();
} else {
    x.click();
}
  
}

}, t);*/

/*
var x = document.getElementById("blinker");
  var y = document.getElementsByClassName("smarttip");
for(var z = 0; z < y.length; z++){
  if(y[z].href != null){
 if(y[z].href.indexOf("quest") != -1) {
  y = y[z]; 
 }}
}
if(y.innerText != "-") {
  
  	if(x == null) {
    var y = document.getElementsByClassName("mm-street");
    var temp = y[0].attributes.href.value;
    temp = temp.substring(4);

    var ataque = document.getElementsByClassName("spot");
		ataque = ataque[ataque.length - 1];
		ataque = "/" + ataque.classList[1] + ".attack";
    
    
	if(window.location.href.lastIndexOf("/") == 21) {
    final = window.location.href.substring(0,window.location.href.indexOf('?')) + "/" + ataque + temp;
  } else if(window.location.href.search(ataque) == -1) {
    final = window.location.href.substring(0,window.location.href.indexOf('?')) + ataque + temp;
  } else {
   	final = window.location.href.substring(0,window.location.href.indexOf('?')) + temp;
  }
    
    window.location.href = final;
} else {
    window.location.href = x.href;
}
  
}  */


var x = document.getElementById("blinker");
var y = document.getElementsByClassName("smarttip");
for(var z = 0; z < y.length; z++){
  if(y[z].href != null){
 if(y[z].href.indexOf("quest") != -1) {
   if(y[z].href.indexOf("jobs") != -1) {
     
   } else {
     y = y[z]; 
   }
  
 }}
}
if(y.innerText != "-") {
  
  	if(x == null) {

      document.getElementsByClassName("spot")[document.getElementsByClassName("spot").length - 1].click();
      document.getElementsByClassName("st")[0].click();
} else {
    x.click();
}
  
}
if(document.title.indexOf("Gangue") != -1) {
  if(window.location.href.indexOf("list") != -1) {
    var gangue = document.getElementsByClassName("gang")[2];
    localStorage.setItem("gangue", gangue.textContent);
  }
