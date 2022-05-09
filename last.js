fetch('https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php', { mode: 'no-cors'})
  .then(response => response.text())
  .then(result => console.log('resultasd', result))
  .catch(error => console.log('error', error));
