const Persons = ({ list, removePerson }) => {
  return (
    <div>
      <ul>
        {list.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}{" "}
            <button onClick={() => removePerson(person.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
