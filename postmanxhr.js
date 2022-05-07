var myHeaders = new Headers();
myHeaders.append("room", "A");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
