const express = require("express");

const {
  getAllArticles,
  getArticleById,
  postArticle,
  putArticle,
  deleteArticle,
} = require("./controllers/articles.controller");

const {
  getAllCategories,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategory,
} = require("./controllers/categories.controller");

const router = express.Router();

// articles
router.get("/articles", getAllArticles);
router.get("/articles/:id", getArticleById);
router.post("/articles", postArticle);
router.put("/articles/:id", putArticle);
router.delete("/articles/:id", deleteArticle);

// categories
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.post("/categories", postCategory);
router.put("/categories/:id", putCategory);
router.delete("/categories/:id", deleteCategory);

module.exports = router;
