import { useState, useEffect } from "react";
import AddPersonForm from "./components/AddNameForm";
import FilterForm from "./components/FilterForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFiltervalue] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameAdding = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneAdding = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFiltering = (event) => {
    setFiltervalue(event.target.value);
  };

  const filteredPersons = !filterValue
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filterValue.toLowerCase())
      );

  const addName = (event) => {
    event.preventDefault();

    if (nameAlreadyAdded()) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newObject = {
        name: newName,
        phone: newNumber,
      };
      personService
        .addPerson(newObject)
        .then((newPerson) => setPersons(persons.concat(newPerson)));
    }
  };

  function nameAlreadyAdded() {
    let alreadyAdded = false;
    persons.map((person) => {
      if (person.name === newName) {
        alreadyAdded = true;
      }
    });
    if (alreadyAdded) return true;
    else return false;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm filterValue={filterValue} handleFiltering={handleFiltering} />
      <AddPersonForm
        newName={newName}
        newNumber={newNumber}
        addName={addName}
        handleNameAdding={handleNameAdding}
        handlePhoneAdding={handlePhoneAdding}
      />
      <h2>Numbers</h2>
      <Persons list={filteredPersons} />
    </div>
  );
};

export default App;
