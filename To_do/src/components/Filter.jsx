const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filter:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div>
          <p>alphabetical order</p>
          <button onClick={() => setSort('asc')}>Asc</button>
          <button onClick={() => setSort('desc')}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
