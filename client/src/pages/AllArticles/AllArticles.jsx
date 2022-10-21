import styles from "./AllArticles.module.scss";
import { useState, useEffect } from "react";
import { getAllArticles, getArticlesBySearch } from "../../utils/apiCalls";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { Link } from "react-router-dom";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getAllArticles();
        setArticles(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getArticlesBySearch(search);
        setArticles(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [search]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <h1 className={styles.title}>ldkqjlkdq</h1>
      <input type="text" value={search} onChange={onChangeSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {articles.map((article) => (
        <Link to={`/articles/${article.id}`} key={article.id}>
          <ArticleCard article={article} />
        </Link>
      ))}
    </div>
  );
};

export default AllArticles;
