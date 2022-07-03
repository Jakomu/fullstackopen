import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameAdding = (event) => {
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();

    if (nameAlreadyAdded()) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newObject = {
        name: newName,
      };
      setPersons(persons.concat(newObject));
    }
  };

  function nameAlreadyAdded() {
    let alreadyAdded = false;
    persons.map((person) => {
      if (person.name == newName) {
        alreadyAdded = true;
      }
    });
    if (alreadyAdded) return true;
    else return false;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameAdding} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
