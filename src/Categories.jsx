function Categories({ categories, filterItems }) {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          type="button"
          className="btn"
          key={category}
          onClick={() => filterItems(category)}
        >
          <h1></h1>
          {category}
        </button>
      ))}
    </div>
  );
}
export default Categories;
