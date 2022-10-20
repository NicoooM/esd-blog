const {
  getArticles,
  getSingleArticle,
  createArticle,
  updateArticle,
  dropArticle,
} = require("../services/articles.service");

const getAllArticles = async (req, res, next) => {
  try {
    const articlesData = await getArticles();
    res.status(200).json(articlesData);
    next();
  } catch (err) {
    next(err);
  }
};

const getArticleById = async (req, res, next) => {
  try {
    const articleData = await getSingleArticle(req.params.id);
    res.status(200).json(articleData);
    next();
  } catch (err) {
    next(err);
  }
};

const postArticle = async (req, res, next) => {
  try {
    const articleData = await createArticle(req.body);
    res.status(201).json(articleData);
  } catch (err) {
    next(err);
  }
};

const putArticle = async (req, res, next) => {
  try {
    const articleData = await updateArticle(req.params.id, req.body);
    res.status(200).json(articleData);
  } catch (err) {
    next(err);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const articleData = await dropArticle(req.params.id);
    res.status(200).json(articleData);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllArticles,
  getArticleById,
  postArticle,
  putArticle,
  deleteArticle,
};
