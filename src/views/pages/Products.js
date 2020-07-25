import React, { useEffect, useState } from "react";
import api from "../../services/api";

const Products = () => {
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const handleGetProductList = async () => {
    const response = await api.listProducts();

	setLoad(true);
    setProducts(response);
  };

  const handleCreateApp = async () => {
    const response = await api.createProducts();

    setProducts(products.push(response));
  };

  useEffect(() => {
    if (!load) {
      handleGetProductList();
    }
  });

  return (
    <>
      <p>PRODUTOS</p>
    </>
  );
};

export default Products;
