const Persons = ({ list, removePerson }) => {
  return (
    <div>
      <ul>
        {list.map((person) => (
          <li key={person.name}>
            {person.name} {person.phone}{" "}
            <button onClick={() => removePerson(person.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
