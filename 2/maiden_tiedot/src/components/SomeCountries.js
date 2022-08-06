const SomeCountries = ({ countries, showCountry }) => {
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
};

export default SomeCountries;
