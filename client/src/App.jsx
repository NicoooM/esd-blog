import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import SingleArticle from "./pages/SingleArticle/SingleArticle";
import Home from "./pages/Home/Home";
import AllArticles from "./pages/AllArticles/AllArticles";
import AllCategories from "./pages/AllCategories/AllCategories";
import SingleCategory from "./pages/SingleCategory/SingleCategory";
import Admin from "./pages/Admin/Admin";
import ArticleCreation from "./pages/ArticleCreation/ArticleCreation";
import UpdateArticle from "./pages/UpdateArticle/UpdateArticle";
import CategoryCreation from "./pages/CategoryCreation/CategoryCreation";
import UpdateCategory from "./pages/UpdateCategory/UpdateCategory";
import ArticlesByCategory from "./pages/ArticlesByCategory/ArticlesByCategory";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:id" element={<SingleArticle />} />
        <Route
          path="/articles/category/:category"
          element={<ArticlesByCategory />}
        />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/categories/:id" element={<SingleCategory />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/creer-un-article" element={<ArticleCreation />} />
        <Route
          path="/admin/creer-une-categorie"
          element={<CategoryCreation />}
        />
        <Route
          path="/admin/modifier-un-article/:id"
          element={<UpdateArticle />}
        />
        <Route
          path="/admin/modifier-une-categorie/:id"
          element={<UpdateCategory />}
        />
      </Routes>
    </Router>
  );
}

export default App;
