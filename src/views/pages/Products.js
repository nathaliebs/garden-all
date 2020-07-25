import React, { useEffect, useState } from "react";
import api from "../../services/api";
import ModalInsertProducts from "../components/ModalInsertProducts";

const Products = () => {
  const [openModal, setOpenModal] = useState(false);

  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);

  const handleGetProductList = async () => {
    const response = await api.listProducts();

    setLoad(true);
    setProducts(response);
  };

  const handleCreateProduct = async (object) => {
    const response = await api.createProducts(object);
    const ProductsList = products.push(response)
    setProducts(ProductsList);
    console.log(ProductsList);
  };

  useEffect(() => {
    if (!load) {
      handleGetProductList();
    }
  });

  return (
    <>
      <p>PRODUTOS</p>
      <ModalInsertProducts
        open={openModal}
        setOpen={setOpenModal}
        handleCreateProduct={handleCreateProduct}
      />
    </>
  );
};

export default Products;
