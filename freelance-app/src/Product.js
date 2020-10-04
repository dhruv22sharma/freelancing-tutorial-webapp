import React from 'react'
import './Product.css'
import Button from '@material-ui/core/Button'

import Rating from '@material-ui/lab/Rating';
  
  function Product({id,price,rating,image}) {
    return (
      <div className="Product">
        <div className="ProductName">{id}</div>
        <img src={image} className="image" alt=""/>
        <div className="Price">
          <strong>${price}</strong>
           
           <Rating name="read-only" value={rating} readOnly />
           </div>
           <Button variant="solid"  className="Button">
              Add to Cart
            </Button>
        <div>
          
        </div>
      </div>
      );
  }
  export default Product