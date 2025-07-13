import "./Main.css";
import { useState, useEffect } from "react";

export default function Weather() {
  const [time, setTime] = useState(new Date().toString());
  const [city, setCity] = useState("Novosibirsk");
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState(null);

  async function fetchWeather(e) {
    const selectedCity = e.target.value;
    if (!selectedCity) return;

    try {
      setError(null);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=4df87ae8c78dd3ccf504c974d8232960&units=metric&lang=ru`
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Город не найден");
      }

      const data = await response.json();
      setWeatherData(data);
      setCity(data.name);
    } catch (error) {
      setError("Не удалось найти погоду для этого города");
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="weather-container">
      <h1>Какая сейчас погода</h1>
      <div className="current-time">{time}</div>
      <div className="weather">
        <p>
          <b>Выбор города</b>
        </p>
        <select onChange={fetchWeather} className="weather_select">
          <option value="Novosibirsk">Новосибирск</option>
          <option value="Moscow">Москва</option>
          <option value="Saint Petersburg">Санкт-Петербург</option>
          <option value="Krasnodar">Краснодар</option>
          <option value="Sochi">Сочи</option>
          <option value="Sukhumi">Сухуми</option>
        </select>
        <p className="city-name">В городе {city} погода</p>
        {error && <div className="error-message">{error}</div>}
        {weatherData && (
          <div className="weather-info">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="weather-icon"
            />
            <div className="temperature">
              {Math.round(weatherData.main.temp)}°C
            </div>
            <div className="weather-description">
              {weatherData.weather[0].description}
            </div>
            <div className="weather-detail">
              Влажность: {weatherData.main.humidity}%
            </div>
            <div className="weather-detail">
              Ветер: {weatherData.wind.speed} м/с
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
