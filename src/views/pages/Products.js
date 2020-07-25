import React, { useEffect, useState } from "react";

import api from "../../services/api";
import "../../assets/css/page-products.css";
import { Grid, Typography, Divider } from "@material-ui/core";

import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Products = () => {

  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);

  const handleGetProductList = async () => {
    const response = await api.listProducts();

    setLoad(true);
    setProducts(response);
  };

  useEffect(() => {
    if (!load) {
      handleGetProductList();
    }
  });

  return (
    <>
      <Typography variant="h6" color="primary" className="pageTitle">
        produtos
      </Typography>
      <Divider variant="inset" />
      <Grid
        container
        spacing={4}
        justify="center"
        className="products-container"
      >
        {products.map((product) => (
          <Grid item xs={6}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
};

export default Products;
