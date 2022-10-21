import styles from "./SingleArticle.module.scss";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from "../../utils/apiCalls";
import { useState, useEffect } from "react";

const SingleArticle = () => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getArticleById(id);
        setArticle(data);
        console.log(article);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {article && (
        <div className={styles.article}>
          <img src={article.imageUrl} alt="" />
          <h1>{article.title}</h1>
          <ul>
            {article.categories.map((category) => (
              <li key={category.id} className="m-category">
                <Link to={`/articles/category/${category.title.toLowerCase()}`}>
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
          <p>{article.content}</p>
        </div>
      )}
    </div>
  );
};

export default SingleArticle;
