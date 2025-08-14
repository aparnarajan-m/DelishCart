import React from 'react'
import products from '../Data/products.json';
import ProductCard from './ProductCard';
import Banner from './Banner';
import BottomBanner from './BottomBanner' 
import './productcard.css';

function ProductItem() {

  return (
    <div className="product-wrapper">
      {products.map((item, index) => (
        <React.Fragment key={item.id}>

          <ProductCard item={item} showCartActions={false}  />

          {/* show banner after 8 cards */}
          {index === 7 && <Banner />}
          {index === 15 && <BottomBanner/>}

        </React.Fragment>
      ))}
    </div>
  );
}

export default ProductItem