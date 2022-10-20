const {
  getCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  dropCategory,
} = require("../services/categories.service");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await getCategories();
    res.send(categories);
  } catch (err) {
    next(err);
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const category = await getSingleCategory(req.params.id);
    res.send(category);
  } catch (err) {
    next(err);
  }
};

const postCategory = async (req, res, next) => {
  try {
    const category = await createCategory(req.body);
    res.send(category);
  } catch (err) {
    next(err);
  }
};

const putCategory = async (req, res, next) => {
  try {
    const category = await updateCategory(req.params.id, req.body);
    res.send(category);
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const category = await dropCategory(req.params.id);
    res.send(category);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategory,
};
