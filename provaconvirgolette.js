
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?room=A");

xhr.send();
