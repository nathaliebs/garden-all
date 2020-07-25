import React, { useEffect } from 'react'
import { Grid, Typography, Divider } from '@material-ui/core'

import '../../assets/css/home.css'
import image1 from '../../products-pictures/1-quiabo.png'
import image2 from '../../products-pictures/2-acacia.png'
import image3 from '../../products-pictures/3-bengal-quince.png'
import image13 from '../../products-pictures/13-graviola.png'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

const Home = () => {
	const products = [
		{
			name: 'Quiabo',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
			price: 2399,
			image: image1,
			saleValue: 3400
		}, {
			name: 'Acacia',
			description: 'ssentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently',
			price: 3000,
			image: image2,
			saleValue: 3465
		}, {
			name: 'Bengal Quince',
			description: 'iou g dgo dsagasdgads g',
			price: 6790,
			image: image3,
			saleValue: 8476
		}, {
			name: 'Graviola',
			description: 'iou g dgo dsagasdgads g',
			price: 1750,
			image: image13,
			saleValue: 2330
		}, {
			name: 'Quiabo',
			description: 'den-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going thro',
			price: 1500,
			image: image1,
			saleValue: 1980
		}, {
			name: 'Acacia',
			description: 'iou g dgo dsagasdgads g',
			price: 3000,
			image: image2,
			saleValue: 3465
		}
	]

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])

	return (
		<>
    	<Typography variant="h6" color="primary" className="pageTitle">promoções</Typography>
			<Divider variant="inset" />
			<Grid container spacing={4} justify="center" className="products-container">
				{products.map((product) => (
					<Grid item xs={6}>
						<ProductCard product={product} saleValue={product.saleValue} />
					</Grid>
				))}
			</Grid>
			<Footer />
		</>
	)
}

export default Home