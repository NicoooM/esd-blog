import styles from "./UpdateArticle.module.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getCategories,
  updateArticle,
  deleteArticle,
  getArticleById,
} from "../../utils/apiCalls";

const UpdateArticle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const onCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategoryIds([...selectedCategoryIds, value]);
    } else {
      setSelectedCategoryIds(selectedCategoryIds.filter((id) => id !== value));
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await getArticleById(id);
        setTitle(data.title);
        setContent(data.content);
        setImageUrl(data.imageUrl);
        setSelectedCategoryIds(
          data.categories.map((category) => category.id.toString())
        );
        console.log(selectedCategoryIds);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      title,
      content,
      imageUrl,
      categoryIds: selectedCategoryIds,
    };
    updateArticle(article, id)
      .then(() => {
        console.log(article);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteArticle(id)
      .then(() => {
        console.log("Article supprimé");
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className={styles.title}>Modifier un article</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="content">Contenu</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          onChange={onContentChange}
          value={content}
        ></textarea>
        <label htmlFor="imageUrl">Image</label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          onChange={onImageUrlChange}
          value={imageUrl}
        />
        <label htmlFor="categories">Catégories</label>
        {categories.map((category) => (
          <div key={category.id}>
            <input
              type="checkbox"
              name={category.title}
              id={category.id}
              value={category.id}
              checked={selectedCategoryIds.includes(category.id.toString())}
              onChange={onCategoryChange}
            />
            <label htmlFor={category.title}>{category.title}</label>
          </div>
        ))}
        <button type="submit">Modifier article</button>
      </form>
      <button onClick={handleDelete}>Supprimer article</button>
    </div>
  );
};

export default UpdateArticle;
