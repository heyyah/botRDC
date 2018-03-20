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
    document.getElementsByClassName("agent")[0].click();
    document.getElementsByClassName("st")[0].click();
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

if(document.title.indexOf("Gangue") != -1) {
  if(window.location.href.indexOf("list") != -1) {
    var gangue = document.getElementsByClassName("gang")[2];
    localStorage.setItem("gangue", gangue.textContent);
  }
  
}
