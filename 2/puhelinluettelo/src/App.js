import { useState } from "react";
import AddNameForm from "./components/AddNameForm";
import FilterForm from "./components/FilterForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFiltervalue] = useState("");

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
      setPersons(persons.concat(newObject));
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
      <AddNameForm
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
