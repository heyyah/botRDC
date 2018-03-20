// ==UserScript==
// @name     Habilidades
// @version  1
// @grant    none
// ==/UserScript==

if(window.location.href.indexOf("training") != -1) {
  var tipo;
  var treino = document.getElementsByClassName("training_points");
  if(window.location.href.indexOf("school") != -1) {
    for(var x = 0; x < treino.length; x++) {
      if(treino[x].parentElement.title.indexOf("intelect") != -1) {
        tipo = x;
      }
    }
  } else {
    for(var x = 0; x < treino.length; x++) {
      if(treino[x].parentElement.title.indexOf("strength") != -1) {
        tipo = x;
      }
    }
  }
    if(document.getElementsByClassName("training_points")[tipo]["textContent"] != 0) {
      document.getElementsByClassName("training_train")[1].click();
    }
  } else if(window.location.href.indexOf("bar") != -1) {
    var sexapeal = document.getElementsByClassName("smarttip");
    for(var x = 0; x < sexapeal.length; x++) {
      if(sexapeal[x].href != null) {
        if(sexapeal[x].href.indexOf("fun") != -1) {
          sexapeal = sexapeal[x];
          console.log(sexapeal);
        }
      }
    }
    if(parseInt(sexapeal.firstElementChild.textContent) > 0) {
      
      
      var stamina = document.getElementsByClassName("smarttip");
      for(var x = 0; x < stamina.length; x++) {
        if(stamina[x].href != null) {
          if(stamina[x].href.indexOf("bar") != -1) {
            stamina = stamina[x];
            console.log(stamina);
          }
        }
      }
      var itens = document.getElementsByClassName("item");
      if(parseInt(stamina.title.substring(33, 36)) < 41) {
        console.log("2");
        for(var x = 0; x < itens.length; x++) {
          if(itens[x].innerHTML.indexOf("Whisky") != -1) {
            console.log("3");
            window.location.href = itens[x].firstChild.href;
          }
        }    
      } else {
              for(var x = 0; x < itens.length; x++) {
          if(itens[x].innerHTML.indexOf("Pamela") != -1) {
            console.log("3");
            if(parseInt(itens[x].textContent.substring(0,2)) > 0) {
              window.location.href = itens[x].firstChild.href;
            }/* else {
              window.setTimeout(function() {
                  window.location.href = sexapeal.href;
              }, 15000);
            }*/
          }
        }   
      }
    }
}
