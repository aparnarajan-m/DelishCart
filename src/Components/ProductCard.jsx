import React from 'react'
import products from '../Data/products.json';
import Banner from './Banner'; 
import ProductItems from './ProductItems';
import './productitems.css';

function ProductCard() {

  return (
    <div className="product-wrapper">
      {products.map((item, index) => (
        <React.Fragment key={item.id}>

          <ProductItems item={item} showCartActions={false}  />

          {/* show banner after 8 cards */}
          {index === 7 && <Banner />}

        </React.Fragment>
      ))}
    </div>
  );
}

export default ProductCard

