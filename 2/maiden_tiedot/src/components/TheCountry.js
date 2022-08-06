import axios from "axios";
import { useEffect, useState } from "react";

const TheCountry = ({ countries }) => {
  const [weatherInfo, setWeatherInfo] = useState({
    main: { temp: 273.15 },
    wind: { speed: 0 },
    weather: [{ icon: "01d" }],
  });

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${countries[0].latlng[0]}&lon=${countries[0].latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setWeatherInfo(response.data);
      });
  });

  return (
    <div>
      {countries.map((country) => (
        <div key={country.name}>
          <h1>{country.name}</h1>
          <p>{country.capital}</p>
          <p>{country.area}</p>
          Languages
          <ul>
            {country.languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <img
            src={`${country.flag}`}
            alt="country_flag"
            width="30%"
            height="30%"
          ></img>
          <h1>Weather in {country.capital}</h1>
          <p>
            temperature {(weatherInfo.main.temp - 273.15).toFixed(2)} Celcius
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
            alt="weather_icon"
          ></img>
          <p>wind {weatherInfo.wind.speed} m/s</p>
        </div>
      ))}
    </div>
  );
};

export default TheCountry;
