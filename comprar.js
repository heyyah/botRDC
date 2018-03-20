// ==UserScript==
// @name     Comprar
// @version  1
// @grant    none
// ==/UserScript==
if(window.location.href.indexOf("contrabandist") != -1) {
  var p = document.getElementsByClassName("inmb");
  for(var x = 0; x < p.length; x++) {
    if(p[x].parentElement.attributes[2] != null) {
      if(p[x].parentElement.attributes[2].nodeValue.indexOf("buy_connections") != -1){
        if(p[x].parentElement.attributes[2].nodeValue.indexOf("Pontos de escola") != -1) {
          var item = document.getElementsByClassName("item_small");
          item[18].click();
          window.setTimeout(function() {
          var botao = document.getElementsByClassName("ok");
          botao[0].click();
          }, 1000);
        }
        if(p[x].parentElement.attributes[2].nodeValue.indexOf("Pontos de Fitness") != -1) {
          var item = document.getElementsByClassName("item_small");
          item[19].click();
          window.setTimeout(function() {
          var botao = document.getElementsByClassName("ok");
          botao[0].click();
          }, 1000);
        }
      }
    }
  }
}
