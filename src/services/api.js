import axios from "axios";

const listProducts = async () => (await axios.get("http://backend-loja.herokuapp.com/products/list")).data;

const createProducts = async (object) => (await axios.post("http://backend-loja.herokuapp.com/products/create", object)).data;

export default {
  listProducts,
  createProducts
};
