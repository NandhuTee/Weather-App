const cityInput = document.getElementById("cityInput");

const getWeatherBtn = document.getElementById("getWeatherBtn");

const weatherInfo = document.getElementById("weatherInfo");

getWeatherBtn.addEventListener("click", function () {

const cityName = cityInput.value.trim();

if (cityName !== "") {

getWeather(cityName);

}

});

function getWeather(city) {

const apiKey = "bb04ed471e895a7fe4fdc954c7a19bcc";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)

.then((response) => response.json())

.then((data) => {

displayWeather(data);

console.log(data);

})

.catch((error) => {

console.error("Error fetching weather data:", error);

weatherInfo.textContent =

"Error fetching weather data. Please try again.";

});

}

function displayWeather(data) {

const cityName = data.name;

const temperature = data.main.temp;

const description = data.weather[0].description;

const weatherText = `Current weather in ${cityName}: ${temperature}°C, ${description}.`;

weatherInfo.textContent = weatherText;

}