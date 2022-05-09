fetch('https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?room=A', { mode: 'no-cors'})
  .then(response => response.text())
  .then(result => console.log('result'))
  .catch(error => console.log('error', error));
