import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => console.log(error.message));
};

const addPerson = (newPerson) => {
  return axios
    .post(baseUrl, newPerson)
    .then((response) => response.data)
    .catch((error) => console.log(error.message));
};

const removePerson = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .catch((error) => console.log(error.message));
};

const editPerson = (id, newPerson) => {
  return axios
    .put(`${baseUrl}/${id}`, newPerson)
    .catch((error) => console.log(error.message));
};

export default { getAll, addPerson, removePerson, editPerson };
