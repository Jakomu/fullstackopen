const Countries = ({ countries, showCountry }) => {
  if (countries.length > 10) {
    return (
      <div>
        <ul>
          <li>"Too many matches, specify another filter"</li>
        </ul>
      </div>
    );
  } else if (countries.length > 1) {
    return (
      <div>
        <ul>
          {countries.map((country) => (
            <div key={country.name}>
              <li>{country.name} </li>
              <button value={country.name} onClick={showCountry}>
                show
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  } else {
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
          </div>
        ))}
      </div>
    );
  }
};

export default Countries;
