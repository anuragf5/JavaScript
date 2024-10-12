const apiKey = "e34b4c51d8c2b7bf48d5217fe52ff79e"; // Replace with your OpenWeatherMap API key
const weatherResult = document.getElementById("weatherResult");

document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  if (city) {
    getWeather(city);
  } else {
    weatherResult.innerHTML = "Please enter a city name.";
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherResult.innerHTML = error.message;
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const description = weather[0].description;
  weatherResult.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;
}
