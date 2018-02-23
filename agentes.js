// ==UserScript==
// @name     Agentes
// @version  1
// @grant    none
// ==/UserScript==

if(document.title.indexOf("Perfil") != -1) {
    if(document.getElementsByClassName("street")[0]["href"] != null){
      window.location.href = document.getElementsByClassName("street")[0]["href"];
    }
  }
  
  console.log("oi")
  var x = document.getElementsByClassName("agent");
  now = new Date;
  console.log(now);
  if(x.length == 1) {
    if(window.location.href.indexOf("agent") != -1) {
      url = window.location.href.substring(0,window.location.href.indexOf('?')) + document.getElementsByClassName("mm-street")[0].search;
    } else {
      url = window.location.href + "/agent.attack" + document.getElementsByClassName("mm-street")[0].search;
      window.location.href = url;
    }
    window.setTimeout(function() {
         console.log("teste");
      var b = document.getElementsByClassName("utt");
      for(var x = 0; x < b.length; x++) {
          if(b[x]["pathname"] != null && b[x]["pathname"].indexOf("profile") != -1) {
          window.location.href = b[x]["href"];
        }
      }
      }, 3000);
  } else {
    console.log("tste");
    window.setTimeout(function() {
      console.log("teste");
      var b = document.getElementsByClassName("utt");
      for(var x = 0; x < b.length; x++) {
          if(b[x]["pathname"] != null && b[x]["pathname"].indexOf("profile") != -1) {
          window.location.href = b[x]["href"];
        }
      }
      
      }, 120000);
  }
  