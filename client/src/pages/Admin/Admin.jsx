import { Link } from "react-router-dom";
import styles from "./Admin.module.scss";
import { getAllArticles, getCategories } from "../../utils/apiCalls";
import { useState, useEffect } from "react";

const Admin = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllArticles();
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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

  return (
    <div className="container">
      <h1 className={styles.title}>Admin</h1>
      <Link to="/admin/creer-un-article">Créer un article</Link>
      <Link to="/admin/creer-une-categorie">Créer une catégorie</Link>
      <h2>Modifier les articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/admin/modifier-un-article/${article.id}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Modifier les catégories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/admin/modifier-une-categorie/${category.id}`}>
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
