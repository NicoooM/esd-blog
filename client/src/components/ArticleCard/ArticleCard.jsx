import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.scss";

const ArticleCard = ({ article }) => {
  return (
    <div className={styles.articleCard}>
      <img src={article.imageUrl} alt="" />
      <h2>{article.title}</h2>
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
  );
};

export default ArticleCard;
