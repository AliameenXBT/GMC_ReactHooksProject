import "./Filter.css";

const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating"
        onChange={(e) => setRateFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
