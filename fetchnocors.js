fetch('https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?room=A', {mode: 'no-cors'})
.then((response)=> {
  console.log(response.json) 
}).catch(function(error) {  
  console.log('Request failed', error)  
});

