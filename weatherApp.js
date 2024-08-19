function getWeather() {
    let city = document.getElementById("cityname").value;
    var API_key = "efeb18b0f66dcc4837185d3e98f590c4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;

    let settext = document.getElementById("weather");

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data) {
                var iconcode = data.weather[0].icon;
                var iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;
                const weather = data.weather[0];
                const temp = Math.round(data.main.temp - 273);
                settext.innerHTML = `Weather in ${city} is ${weather.main} with ${weather.description}. The temperature is ${temp}°C.`;
                settext.style.backgroundColor = "red";
                document.getElementById("wicon").src = iconurl;
                document.getElementById("wicon").style.height='100px';
                console.log(`Main: ${weather.main}`);
                console.log(`Description: ${weather.description}`);
            } else {
                settext.innerHTML = 'Weather data is unavailable.';
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
            settext.innerHTML = `Error fetching data: ${error.message}`;
        });
}