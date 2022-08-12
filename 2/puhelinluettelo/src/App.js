import { useState, useEffect } from "react";
import AddPersonForm from "./components/AddNameForm";
import FilterForm from "./components/FilterForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFiltervalue] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);

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
        setNotificationMessage(`${newPerson.name}'s number has been updated`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
        setNewName("");
        setNewNumber("");
      }
    } else {
      const newObject = {
        name: newName,
        number: newNumber,
      };
      personService
        .addPerson(newObject)
        .then((newPerson) => setPersons(persons.concat(newPerson)));
      setNotificationMessage(`${newObject.name} has been added to phonebook`);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
      setNewName("");
      setNewNumber("");
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
    const removedPerson = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${removedPerson.name}?`)) {
      personService.removePerson(id);
      setNotificationMessage(
        `${removedPerson.name} has been removed from phonebook`
      );
      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMessage} />
      <FilterForm filterValue={filterValue} handleFiltering={handleFiltering} />
      <h2>Add a new</h2>
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
