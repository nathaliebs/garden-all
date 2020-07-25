import React, { useState, useEffect } from 'react'
import { Grid, Typography, Divider, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import api from "../../services/api";
import '../../assets/css/home.css'
import ProductCard from '../components/ProductCard'
import ModalInsertProducts from '../components/ModalInsertProducts'


const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);


	useEffect(() => {
		window.scrollTo(0, 0);
  }, [])


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

  const handleCreateProduct = async (object) => {
    await api.createProducts(object);
    setOpenModal(false);
  };


	return (
		<>
      <div style={{position: 'flex', alignItems: 'center'}}>
        <Typography variant="h6" color="primary" className="pageTitle">Todos os produtos</Typography>
        <IconButton aria-label="delete" onClick={() => setOpenModal(true)}>
          <AddIcon fontSize="large" />
        </IconButton>
      </div>
			<Divider variant="inset" />
			<Grid container spacing={1} justify="center" className="products-container">
				{products.map((product) => (
					<Grid item xs={7}>
						<ProductCard product={product} saleValue={product.saleValue} />
					</Grid>
				))}
			</Grid>
      <ModalInsertProducts
        open={openModal}
        setOpen={setOpenModal}
        handleCreateProduct={handleCreateProduct}
      />
		</>
	)
}

export default Home