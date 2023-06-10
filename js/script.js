
const apiKey = "5a90a9ba832682d1738e3eb605b71d8d";
const apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5";
const searchBox = document.querySelector(".search inupt");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid={API key}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "./Images/clouds.png";
    }
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "./Images/clear.png";
    }
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "./Images/rain.png";
    }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./Images/drizzle.png";
    }   
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "./Images/mist.png";
    }

}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();