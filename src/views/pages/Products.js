 
import React from 'react'
import '../../assets/css/page-products.css'
import { Grid } from '@material-ui/core'
import image1 from '../../products-pictures/1-quiabo.png'
import image2 from '../../products-pictures/2-acacia.png'
import image3 from '../../products-pictures/3-bengal-quince.png'
import image13 from '../../products-pictures/13-graviola.png'
import ProductCard from '../components/ProductCard'


const Products = () => {
	const products = [
		{
			name: 'Quiabo',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
			price: 198741,
			image: image1
		}, {
			name: 'Acacia',
			description: 'ssentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently',
			price: 346534,
			image: image2
		}, {
			name: 'Bengal Quince',
			description: 'iou g dgo dsagasdgads g',
			price: 847653,
			image: image3
		}, {
			name: 'Graviola',
			description: 'iou g dgo dsagasdgads g',
			price: 23223,
			image: image13
		}, {
			name: 'Quiabo',
			description: 'den-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going thro',
			price: 198741,
			image: image1
		}, {
			name: 'Acacia',
			description: 'iou g dgo dsagasdgads g',
			price: 346534,
			image: image2
		}, {
			name: 'Bengal Quince',
			description: 'iou g dgo dsagasdgads g',
			price: 847653,
			image: image3
		}, {
			name: 'Graviola',
			description: 'iou g dgo dsagasdgads g',
			price: 23223,
			image: image13
		}, {
			name: 'Quiabo',
			description: 'iou g dgo dsagasdgads g',
			price: 198741,
			image: image1
		}, {
			name: 'Acacia',
			description: 'iou g dgo dsagasdgads g',
			price: 346534,
			image: image2
		}, {
			name: 'Bengal Quince',
			description: 'iou g dgo dsagasdgads g',
			price: 847653,
			image: image3
		}, {
			name: 'Graviola',
			description: 'iou g dgo dsagasdgads g',
			price: 23223,
			image: image13
		}
	]

	return (
		<>
    	<Grid container spacing={4} justify="center" className="products-container">
				{products.map((product) => (
					<Grid item xs={6}>
						<ProductCard product={product} />
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default Products