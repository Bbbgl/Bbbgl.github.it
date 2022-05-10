fetch("https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?room=A")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    room = data.room;
    console.log(room);
    devices = data.devices;
    console.log(devices);
    document.getElementById("myRoom").innerHTML = room;
  });
