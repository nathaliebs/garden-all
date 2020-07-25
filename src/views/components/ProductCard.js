import React from 'react'
import { Typography } from '@material-ui/core'

import '../../assets/css/product-card.css'
import FormatMoney from '../../helper/FormatMoney'


const ProductCard = ({ product, saleValue }) => (
  <div className="product-card">
    <img src={product.image} alt="Produto" />
    <div>
      <Typography variant="h5" className="text-capitalize">{product.name}</Typography>
      <Typography variant="body1">{product.descricao}</Typography>
      <div className="money">
        {saleValue && (
          <Typography variant="subtitle" className="last-price">{FormatMoney(saleValue)}</Typography>
        )}
        <Typography variant="h3" color="primary">{FormatMoney(product.price)}</Typography>
      </div>
    </div>
  </div>
)

export default ProductCard