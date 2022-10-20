const categories = require("../db/categories.json");

const HttpException = require("../exceptions/HttpException");

const findDataById = require("../utils/findDataById");
const createId = require("../utils/createId");
const deleteData = require("../utils/deleteData");

const getCategories = async () => {
  return categories;
};

const getSingleCategory = async (id) => {
  id = Number(id);
  if (!id) {
    throw new HttpException(400, "Invalid id");
  }
  const category = findDataById(id, categories);
  if (!category) {
    throw new HttpException(404, "Category not found");
  }
  return category;
};

const createCategory = async (data) => {
  const { title } = data;
  if (!title) {
    throw new HttpException(400, "Invalid data");
  }

  const id = createId(categories);
  const newCategory = {
    id,
    title,
  };

  categories.push(newCategory);
  return newCategory;
};

const updateCategory = (id, data) => {
  id = Number(id);
  if (!id) {
    throw new HttpException(400, "Invalid id");
  }

  const category = findDataById(id, categories);
  if (!category) {
    throw new HttpException(404, "Category not found");
  }

  const { title } = data;
  if (title) {
    category.title = title;
  }

  return category;
};

const dropCategory = (id) => {
  id = Number(id);
  if (!id) {
    throw new HttpException(400, "Invalid id");
  }

  const category = findDataById(id, categories);
  if (!category) {
    throw new HttpException(404, "Category not found");
  }

  deleteData(categories, category);
};

module.exports = {
  getCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  dropCategory,
};
