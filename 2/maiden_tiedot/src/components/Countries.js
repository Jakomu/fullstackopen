import ManyCountries from "./ManyCountries";
import SomeCountries from "./SomeCountries";
import TheCountry from "./TheCountry";

const Countries = ({ countries, showCountry }) => {
  if (countries.length > 10) {
    return <ManyCountries />;
  } else if (countries.length > 1) {
    return <SomeCountries countries={countries} showCountry={showCountry} />;
  } else if (countries.length === 1) {
    return <TheCountry countries={countries} />;
  }
};

export default Countries;
