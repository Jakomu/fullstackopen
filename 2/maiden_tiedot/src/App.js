import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [searchword, setSearchword] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearching = (event) => {
    setSearchword(event.target.value);
  };

  const countriesFiltered = countries.filter((country) =>
    country.name.toLowerCase().includes(searchword.toLowerCase())
  );

  const handleShowing = (event) => {
    setSearchword(event.target.value);
  };

  return (
    <div>
      <form>
        find countries <input value={searchword} onChange={handleSearching} />
      </form>
      <div>
        <Countries countries={countriesFiltered} showCountry={handleShowing} />
      </div>
    </div>
  );
};

export default App;
