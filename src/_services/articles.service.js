import Axios from "./caller.service";
import AxiosServ from "./axios.service";


/**
 * Récupératoin de la liste des articles
 * @returns {Promise}
 */
let getAllArticles = () => {
  return Axios.get("/api/articles");
};

/**
 * Récupération d'un article
 * @param {number} Aid
 * @returns {Promise}
 */
let getArticle = (Aid) => {
  return Axios.get("/api/articles/" + Aid);
};

/**
 * Ajout d'un article
 * @param {number} article
 * @returns {Promise}
 */
let addArticle = (article) => {
  return Axios.post("/api/articles", article);
};

/**
 * Ajout d'un article avec formData
 * @param {Object} article
 * @returns {Promise}
 */
let addArticleFormData = (article) => {
  let formData = new FormData();
  for (let key in article) {
    formData.append(key, article[key]);
  }
  const fileInput = document.getElementById('fileInput');


  formData.append('title','title');
  formData.append('h1_title', 'h1_title');
  formData.append('content', 'content');
  formData.append("image", fileInput.files[0]);
  formData.append('slug', 'slug');
  formData.append('category_id', 'category_id');

  return AxiosServ.post("/api/articles", formData);
};



/**
 * Mise à jour d'un article
 * @param {number} article
 * @returns {Promise}
 */
let updateArticle = (article) => {
  return Axios.patch("/api/articles/" + article.id, article);
};

/**
 * Suppression d'un article
 * @param {number} Aid
 * @returns {Promise}
 */
let deleteArticle = (Aid) => {
  return Axios.delete("/api/articles/" + Aid);
};

// Déclaration des services pour import
export const articleService = {
  getAllArticles,
  getArticle,
  addArticle,
  addArticleFormData,
  updateArticle,
  deleteArticle,
};
