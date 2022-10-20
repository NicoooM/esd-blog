const articles = require("../db/articles.json");

const HttpException = require("../exceptions/HttpException");

const API_URL = require("../config/config");

const findDataById = require("../utils/findDataById");
const createId = require("../utils/createId");
const deleteData = require("../utils/deleteData");

const getArticles = async () => {
  return articles;
};

const getSingleArticle = async (id) => {
  id = Number(id);
  if (!id) {
    throw new HttpException(400, "Invalid id");
  }
  const article = findDataById(id, articles);
  if (!article) {
    throw new HttpException(404, "Article not found");
  }
  return article;
};

const createArticle = async (data) => {
  const { title, imageUrl, content, categoryIds } = data;

  if (!title || !imageUrl || !content || !categoryIds) {
    throw new HttpException(400, "Invalid data");
  }

  if (!Array.isArray(categoryIds)) {
    throw new HttpException(400, "categoryIds must be an array");
  }

  const id = createId(articles);

  const categoryLinks = categoryIds.map((id) => {
    id = Number(id);
    return `${API_URL}/categories/${id}`;
  });
  const _links = {
    categories: categoryLinks,
  };

  const newArticle = {
    id,
    title,
    imageUrl,
    content,
    _links,
  };

  articles.push(newArticle);

  return newArticle;
};

const updateArticle = async (id, data) => {
  id = Number(id);
  if (!id) {
    throw new HttpException(400, "Invalid id");
  }

  const article = findDataById(id, articles);
  if (!article) {
    throw new HttpException(404, "Article not found");
  }

  const { title, imageUrl, content, categoryIds } = data;

  if (!title || !imageUrl || !content || !categoryIds) {
    throw new HttpException(400, "Invalid data");
  }

  if (!Array.isArray(categoryIds)) {
    throw new HttpException(400, "categoryIds must be an array");
  }

  const categoryLinks = categoryIds.map((id) => {
    id = Number(id);
    return `${API_URL}/categories/${id}`;
  });

  const _links = {
    categories: categoryLinks,
  };

  const updatedArticle = {
    id,
    title,
    imageUrl,
    content,
    _links,
  };

  const index = articles.findIndex((article) => article.id === id);
  articles[index] = updatedArticle;

  return updatedArticle;
};

const dropArticle = (id) => {
  id = Number(id);
  if (!id) {
    throw new HttpException(400, "Invalid id");
  }

  const article = findDataById(id, articles);
  if (!article) {
    throw new HttpException(404, "Article not found");
  }

  deleteData(articles, article);
};

module.exports = {
  getArticles,
  getSingleArticle,
  createArticle,
  updateArticle,
  dropArticle,
};
