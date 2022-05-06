fetch('https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?room=A')
  .then((response) => response.json())
  .then((json) => console.log(json));
