import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const addPerson = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data);
};

const removePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const editPerson = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson);
};

export default { getAll, addPerson, removePerson, editPerson };
