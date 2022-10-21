import styles from "./Home.module.scss";
import { useState, useEffect } from "react";
import { getLatestsArticles } from "../../utils/apiCalls";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getLatestsArticles();
        console.log(data);
        setArticles(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="container">
      <h1 className={styles.title}>Accueil</h1>
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

export default Home;
