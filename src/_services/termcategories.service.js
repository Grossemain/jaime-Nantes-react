import Axios from "./caller.service";

/**
 * Récupératoin de la liste des term categories
 * @returns {Promise}
 */
let getAllTermCategories = () => {
  return Axios.get("/api/termcategories");
};

/**
 * Récupération d'un term categories
 * @param {number} TCid
 * @returns {Promise}
 */
let getTermCategory = (TCid) => {
  return Axios.get("/api/termcategories/" + TCid);
};

/**
 * Ajout d'un term categories
 * @param {number} termCategory
 * @returns {Promise}
 */
let addTermCategory = (termCategory) => {
  return Axios.post("/api/termcategories", termCategory);
};

/**
 * Mise à jour d'un term categories
 * @param {number} termCategory
 * @returns {Promise}
 */
let updateTermCategory = (termCategory) => {
  return Axios.patch("/api/termcategories/" + termCategory.id, termCategory);
};

/**
 * Suppression d'un term categories
 * @param {number} TCid
 * @returns {Promise}
 */
let deleteTermCategory = (TCid) => {
  return Axios.delete("/api/termcategories/" + TCid);
};

// Déclaration des services pour import
export const termCategoryService = {
  getAllTermCategories,
  getTermCategory,
  addTermCategory,
  updateTermCategory,
  deleteTermCategory,
};
