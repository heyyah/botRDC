// ==UserScript==
// @name     Comprar
// @version  1
// @grant    none
// ==/UserScript==

var item = document.getElementsByClassName("item_small");
item[18].click();
window.setTimeout(function() {
var botao = document.getElementsByClassName("ok");
botao[0].click();
}, 1000);