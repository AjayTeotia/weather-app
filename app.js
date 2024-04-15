const APIKey = "d47c2e55cb33b779c82a5c9d17010c22";

const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        console.log(data);

        switch (data.weather[0].main) {
            case "Clear":
            weatherIcon.src = "img/clear.png";
            break;
            case "Rain":
                weatherIcon.src = "img/rain.png";
                break;
            case "Snow":
                weatherIcon.src = "img/snow.png";
                break;
            case "Clouds":
                weatherIcon.src = "img/cloud.png";
                break;
            case "Mist":
                weatherIcon.src = "img/mist.png";
                break;
            case "Haze":
                weatherIcon.src = "img/mist.png";
                break;
            default:
                weatherIcon.src = "img/404.png";
        }

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
        document.querySelector('.decription').innerHTML = `${data.weather[0].description}`;
        document.querySelector('.wind').innerHTML =  `${(data.wind.speed)} Km/h`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
        document.querySelector('.feel_likes').innerHTML = `${parseInt(data.main.feels_like)}<span>°C</span>`;
        document.querySelector('.pressure').innerHTML = `${data.main.pressure} Pa`;
        document.querySelector('.temp-max').innerHTML = `${parseInt(data.main.temp_max)}<span>°C</span>`;
        document.querySelector('.temp-min').innerHTML = `${parseInt(data.main.temp_min)}<span>°C</span>`;
        document.querySelector('.country').innerHTML = `${data.sys.country}`;

    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
}

searchBtn.addEventListener('click', () => {
    const city = searchInput.value.trim();
    console.log(city);
    checkWeather(city);
});
