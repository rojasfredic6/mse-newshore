import trae from "trae";
// import { component } from 'vue/types/umd'
const url = "http://hp-api.herokuapp.com/api/characters";

const api = () => {
  return trae.get(`${url}`, {
    bodyType: "json",
  });
};

export { api };
