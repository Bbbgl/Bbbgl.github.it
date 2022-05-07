const API_KEY = 'room=A';
fetch('https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?' + API_KEY)
  .then((response) => response.json())
  .then((json) => console.log(json));
