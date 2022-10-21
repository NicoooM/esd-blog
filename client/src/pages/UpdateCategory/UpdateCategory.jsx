import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  updateCategory,
  deleteCategory,
  getCategoryById,
} from "../../utils/apiCalls";

const UpdateCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await getCategoryById(id);
        setCategoryName(data.title);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: categoryName,
    };
    updateCategory(data, id).then(() => {
      console.log("Category updated");
    });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    deleteCategory(id).then(() => {
      navigate("/admin");
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="categoryName">Category name</label>
        <input
          type="text"
          id="categoryName"
          value={categoryName}
          onChange={handleChange}
        />
        <button type="submit">Modifier la catégorie</button>
      </form>
      <button onClick={handleDelete}>Supprimer la catégorie</button>
    </>
  );
};

export default UpdateCategory;
