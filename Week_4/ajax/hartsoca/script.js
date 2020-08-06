function getWeatherFromCity(city, statecode) {
    var req = new XMLHttpRequest();
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + statecode + "&appid=e9f5eeaa457c2534493eff2db78e840b" , false);
    req.send(null);
    console.log(JSON.parse(req.responseText));

    var body = document.getElementsByTagName("body")[0];
    var h3 = document.createElement("h3");
    var response = JSON.parse(req.responseText);
    var cellText = document.createTextNode("It's going to be " + response.main.temp + " Kelvin today");
    h3.appendChild(cellText);
    body.appendChild(h3);
}

function getWeatherFromZip(zip, statecode) {
    var req = new XMLHttpRequest();
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + statecode + "&appid=e9f5eeaa457c2534493eff2db78e840b", false);
    req.send(null);
    console.log(JSON.parse(req.responseText));

    var body = document.getElementsByTagName("body")[0];
    var h3 = document.createElement("h3");
    var response = JSON.parse(req.responseText);
    var cellText = document.createTextNode("It's going to be " + response.main.temp + " Kelvin today");
    h3.appendChild(cellText);
    body.appendChild(h3);
}

function postGarbage() {
    var req = new XMLHttpRequest();
    req.open("POST", "http://httpbin.org/post", false);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send('{"longUrl":"http://httpbin.org/post"}');
    console.log(JSON.parse(req.responseText));

    var body = document.getElementsByTagName("body")[0];
    var h3 = document.createElement("h3");
    var response = JSON.parse(req.responseText);
    var cellText = document.createTextNode(response.data);
    h3.appendChild(cellText);
    body.appendChild(h3);
}

//http://api.openweathermap.org/data/2.5/weather?q=Bend,us&appid=e9f5eeaa457c2534493eff2db78e840b
//https://api.openweathermap.org/data/2.5/weather?zip=97701,us&appid=e9f5eeaa457c2534493eff2db78e840b

//http://api.openweathermap.org/data/2.5/weather?q=Corvallis,or&appid=e9f5eeaa457c2534493eff2db78e840b