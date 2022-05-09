fetch('https://jsonplaceholder.typicode.com/posts', { mode: 'no-cors'})
  .then(response => response.text())
  .then(result => console.log('result'))
  .catch(error => console.log('error', error));
