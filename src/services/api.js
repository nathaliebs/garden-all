import axios from "axios";

const listProducts = async () => (await axios.get("http://backend-loja.herokuapp.com/products/list")).data;

const createProducts = async () => (await axios.get("http://backend-loja.herokuapp.com/products/create")).data;

export default {
  listProducts,
  createProducts
};
