import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlesByCategory } from "../../utils/apiCalls";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const ArticlesByCategory = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const articles = await getArticlesByCategory(category);
        setArticles(articles);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category]);

  return (
    <div className="container">
      <h1>Articles by category: {category}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <ArticleCard article={article} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesByCategory;
