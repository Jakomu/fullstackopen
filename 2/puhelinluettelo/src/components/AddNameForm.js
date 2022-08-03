const AddNameForm = (props) => {
  return (
    <form onSubmit={props.addName}>
      <div>
        name: <input value={props.newName} onChange={props.handleNameAdding} />{" "}
        <br />
        phone:{" "}
        <input value={props.newNumber} onChange={props.handlePhoneAdding} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddNameForm;
