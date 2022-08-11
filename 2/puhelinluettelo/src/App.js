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
    const idToEdit = nameAlreadyAdded();

    if (idToEdit !== -1) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace old number with a new one?`
        )
      ) {
        const personToEdit = persons.find((person) => person.id === idToEdit);
        const newPerson = { ...personToEdit, number: newNumber };
        personService.editPerson(idToEdit, newPerson).then((response) => {
          setPersons(
            persons.map((person) =>
              person.id !== idToEdit ? person : response.data
            )
          );
        });
      }
    } else {
      const newObject = {
        name: newName,
        number: newNumber,
      };
      personService
        .addPerson(newObject)
        .then((newPerson) => setPersons(persons.concat(newPerson)));
    }
  };

  function nameAlreadyAdded() {
    let idToEdit = -1;
    persons.forEach((person) => {
      if (person.name === newName) {
        idToEdit = person.id;
      }
    });
    return idToEdit;
  }

  const removePerson = (id) => {
    if (window.confirm(`Delete ${id}?`)) {
      personService.removePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

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
      <Persons list={filteredPersons} removePerson={removePerson} />
    </div>
  );
};

export default App;
