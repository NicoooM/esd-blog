import { useState } from "react";
import { createCategory } from "../../utils/apiCalls";

const CategoryCreation = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: categoryName,
    };
    createCategory(data).then(() => {
      setCategoryName("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="categoryName">Category name</label>
      <input
        type="text"
        id="categoryName"
        value={categoryName}
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CategoryCreation;
