import Axios from "./caller.service";

/**
 * Récupératoin de la liste des categories
 * @returns {Promise}
 */
let getAllCategories = () => {
  return Axios.get("/api/categories");
};

/**
 * Récupération d'une categorie
 * @param {number} Cid
 * @returns {Promise}
 */
let getCategory = (Cid) => {
  return Axios.get("/api/categories/" + Cid);
};

/**
 * Ajout d'une categorie
 * @param {number} category
 * @returns {Promise}
 */
let addCategory = (category) => {
  return Axios.post("/api/categories", category);
};

/**
 * Mise à jour d'une categorie
 * @param {number} category
 * @returns {Promise}
 */
let updateCategory = (category) => {
  return Axios.patch("/api/categories/" + category.id, category);
};

/**
 * Suppression d'une categorie
 * @param {number} Cid
 * @returns {Promise}
 */
let deleteCategory = (Cid) => {
  return Axios.delete("/api/categories/" + Cid);
};

// Déclaration des services pour import
export const categoryService = {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
