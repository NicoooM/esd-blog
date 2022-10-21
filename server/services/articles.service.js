const articles = require("../db/articles.json");
const categories = require("../db/categories.json");

const HttpException = require("../exceptions/HttpException");

const findDataById = require("../utils/findDataById");
const createId = require("../utils/createId");
const deleteData = require("../utils/deleteData");

const getArticles = async (query) => {
  query.category = query.category || null;
  query.search = query.search || null;

  if (query.category) {
    const articlesList = articles.filter((article) => {
      return article.categories.find(
        (cat) => cat.title.toLowerCase() === query.category.toLowerCase()
      );
    });
    return articlesList;
  }

  if (query.search) {
    const articlesList = articles.filter((article) => {
      return article.title.includes(query.search);
    });
    return articlesList;
  }

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

const getLastsArticles = async () => {
  const lastsArticles = articles.slice(-3);
  return lastsArticles;
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

  const categoriesList = categoryIds.map((id) => {
    id = Number(id);
    const category = findDataById(id, categories);
    return category;
  });

  const newArticle = {
    id,
    title,
    imageUrl,
    content,
    categories: categoriesList,
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

  const categoriesList = categoryIds.map((id) => {
    id = Number(id);
    const category = findDataById(id, categories);
    return category;
  });

  const updatedArticle = {
    id,
    title,
    imageUrl,
    content,
    categories: categoriesList,
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
  getLastsArticles,
  createArticle,
  updateArticle,
  dropArticle,
};
