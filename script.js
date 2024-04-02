const apiKey = "f594bc61d4441d90a6ca8a0fa1667ef5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weather = document.querySelector(".weather");
const button = document.querySelector("button");
const input = document.querySelector("input");
const tempText = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const percent = document.querySelector(".humidity-number");
const wind_number = document.querySelector(".wind-number");
const weather_icon = document.querySelector(".weather-icon");

async function searchWeather(){

    const words = input.value;
    const link = `${apiURL}${words}&appid=${apiKey}`;
    const response = await fetch(link);
    const data = await response.json();
    
    const temp = data.main.temp;
    tempText.innerHTML = `${temp}°C`;
    cityName.innerHTML = words.toUpperCase();
    
    const humid = data.main.humidity;
    percent.innerHTML = `${humid}%`;

    const wind = data.wind.speed;
    wind_number.innerHTML = `${wind}Km/h`;


    if (temp > 35) {
        weather_icon.src = "images/clear.png";
    } else if (temp > 25) {
        weather_icon.src = "images/clouds.png";
    } else if (temp > 5) {
        weather_icon.src = "images/drizzle.png";
    } else if (temp >= 0) {
        weather_icon.src = "images/mist.png";
    } else {
        weather_icon.src = "images/snow.png";
    }
    
    weather.style.display = "flex";
}

button.addEventListener("click", searchWeather);

input.addEventListener("keypress", (event) => {
    if(event.key == "Enter"){
        searchWeather();
    }
})