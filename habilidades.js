// ==UserScript==
// @name     Habilidades
// @version  1
// @grant    none
// ==/UserScript==

if(document.title.indexOf("Treino") != -1) {
    if(document.getElementsByClassName("training_points")[0]["textContent"] != 0) {
      document.getElementsByClassName("training_train")[1].click();
    } else {
      window.setTimeout(function() {
        window.location.href = document.getElementsByClassName("intelect")[0].click();
      }, 5000);
    }
  } else if(document.title.indexOf("Hotel") != -1) {
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
            } else {
              window.setTimeout(function() {
                  window.location.href = sexapeal.href;
              }, 15000);
            }
          }
        }   
      }
    }
  }