import { useState } from "react";

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
      <div>
        filter shown with{" "}
        <input value={filterValue} onChange={handleFiltering} />
      </div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameAdding} /> <br />
          phone: <input value={newNumber} onChange={handlePhoneAdding} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
