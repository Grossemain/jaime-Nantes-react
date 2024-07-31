import Axios from "./caller.service";

/**
 * Récupératoin de la liste des places
 * @returns {Promise}
 */
let getAllPlaces = () => {
  return Axios.get("/api/places");
};

/**
 * Récupération d'un place
 * @param {number} Pid
 * @returns {Promise}
 */
let getPlace = (Pid) => {
  return Axios.get("/api/places/" + Pid);
};

/**
 * Ajout d'un place
 * @param {number} place
 * @returns {Promise}
 */
let addPlace = (place) => {
  return Axios.post("/api/places", place);
};


/**
 * Mise à jour d'un place
 * @param {number} place
 * @returns {Promise}
 */
let updatePlace = (place) => {
  return Axios.patch("/api/places/" + place.id, place);
};

/**
 * Suppression d'un place
 * @param {number} Pid
 * @returns {Promise}
 */
let deletePlace = (Pid) => {
  return Axios.delete("/api/places/" + Pid);
};

// Déclaration des services pour import
export const placeService = {
  getAllPlaces,
  getPlace,
  addPlace,
  updatePlace,
  deletePlace,
};
