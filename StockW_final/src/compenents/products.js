import stlye from './products.css';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductContext } from './ProductContext';

import './products.css';

export function Products(props) {
  const { selectProduct } = useContext(ProductContext);
  const history = useHistory();

  const handleClick = () => {
    selectProduct(props); // Pass the selected product to the context
    history.push('/shoes_detail'); // Navigate to the shoes_detail page
  };

  return (
    <div className='productList'>
      <div className='productCard' onClick={handleClick}>
        <img src={props.image} alt='product-img' className='productImage' />

        <div className='productCard__content'>
          <h3 className='productName'>{props.name}</h3>
          <div className='displayStack__1'>
            <div className='productPrice'>${props.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;