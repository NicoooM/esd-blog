const API_URL = "http://localhost:3001";

export const getAllArticles = async () => {
  const response = await fetch(`${API_URL}/articles`);
  const data = await response.json();
  return data;
};

export const getArticleById = async (id) => {
  const response = await fetch(`${API_URL}/articles/${id}`);
  const data = await response.json();
  return data;
};

export const getLatestsArticles = async () => {
  const response = await fetch(`${API_URL}/articles/latests`);
  const data = await response.json();
  return data;
};

export const getArticlesByCategory = async (category) => {
  const response = await fetch(`${API_URL}/articles?category=${category}`);
  const data = await response.json();
  return data;
};

export const getArticlesBySearch = async (search) => {
  const response = await fetch(`${API_URL}/articles?search=${search}`);
  const data = await response.json();
  return data;
};

export const createArticle = async (article) => {
  try {
    const response = await fetch(`${API_URL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateArticle = async (article, id) => {
  try {
    const response = await fetch(`${API_URL}/articles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = async (id) => {
  try {
    await fetch(`${API_URL}/articles/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  const data = await response.json();
  return data;
};

export const getCategoryById = async (id) => {
  const response = await fetch(`${API_URL}/categories/${id}`);
  const data = await response.json();
  return data;
};

export const createCategory = async (category) => {
  try {
    const response = await fetch(`${API_URL}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (category, id) => {
  try {
    const response = await fetch(`${API_URL}/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    await fetch(`${API_URL}/categories/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
