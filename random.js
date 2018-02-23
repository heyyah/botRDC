// ==UserScript==
// @name     Random
// @version  1
// @grant    none
// ==/UserScript==

var locais = ["Territórios", "Jornal » Notícias", "Treino", "Constante", "Contrabandista", "Mercado Negro", "Prisão » Chat", "Hospital", "Banco", "Cassino » CITY CASINO", "Delegacia » Emboscada"];
var atual = document.title.substring(0, document.title.indexOf("-") - 1); 

for(var x = 0; x < locais.length; x++) {
  if(locais[x] == atual) {
    console.log(locais[x]);
    
    var prox = Math.round(Math.random() * (10 - 0) + 0);
    var url = "";
    if(prox == 0){
    	url = document.getElementsByClassName("mm-territory")[0]["href"];
    }else if(prox == 1){
    	url = document.getElementsByClassName("mm-newspaper")[0]["href"];
    }else if(prox == 2){
    	url = document.getElementsByClassName("mm-training")[0]["href"];
    }else if(prox == 3){
    	url = document.getElementsByClassName("mm-standing")[0]["href"];
    }else if(prox == 4){
    	url = document.getElementsByClassName("mm-contrabandist")[0]["href"];
    }else if(prox == 5){
    	url = document.getElementsByClassName("mm-market")[0]["href"];
    }else if(prox == 6){
    	url = document.getElementsByClassName("mm-jail")[0]["href"];
    }else if(prox == 7){
    	url = document.getElementsByClassName("mm-hospital")[0]["href"];
    }else if(prox == 8){
    	url = document.getElementsByClassName("mm-bank")[0]["href"];
    }else if(prox == 9){
    	url = document.getElementsByClassName("mm-casino")[0]["href"];
    }else if(prox == 10){
    	url = document.getElementsByClassName("mm-police")[0]["href"];
    } 
    console.log(url);
    window.setTimeout(function() {
                        	window.location.href = url;
                        }, Math.random() * (3000 - 1000) + 1000, 
                       );
    
    
  }
}