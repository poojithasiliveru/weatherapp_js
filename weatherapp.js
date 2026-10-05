document.getElementById('myform').addEventListener('submit',function(e){
    e.preventDefault()

    var city=document.getElementById('city').value;
    var apikey="7dc4e4b4c74cdd34650a50dbb552da4e";
    //CRUD ->POST,PUT,POST,DELETE
    //AXIOS->Returns in promises

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    .then(function(res){
        console.log(res);
        // Display weather details in browser
        document.getElementById('weather').innerHTML = `
            <h2>${res.data.name}</h2>
            <p> Country: ${res.data.sys.country}</p>
            <p> Temperature: ${res.data.main.temp} °C</p>
            <p> Feels Like: ${res.data.main.feels_like} °C</p>
            <p> Humidity: ${res.data.main.humidity}%</p>
            <p> Pressure: ${res.data.main.pressure} hPa</p>
            <p> Weather: ${res.data.weather[0].description}</p>
            <p> Sunrise: ${new Date(res.data.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p> Sunset: ${new Date(res.data.sys.sunset * 1000).toLocaleTimeString()}</p>
        `;
    })
    .catch(function(res){
        console.log(res);
    })
})