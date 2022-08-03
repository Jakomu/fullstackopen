const Persons = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((person) => (
          <li key={person.name}>
            {person.name} {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
