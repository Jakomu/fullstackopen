const FilterForm = ({ filterValue, handleFiltering }) => {
  return (
    <form>
      <div>
        filter shown with{" "}
        <input value={filterValue} onChange={handleFiltering} />
      </div>
    </form>
  );
};

export default FilterForm;
