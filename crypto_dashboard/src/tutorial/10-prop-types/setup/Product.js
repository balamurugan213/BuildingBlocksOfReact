import React from 'react';
import PropTypes from 'prop-types'
import moduleName from '../../../Untitled-mockup.png'

const Product = ({image,name,price}) => {
  const url=image && image.url
  return <article className='product'>
    <img src={url ||moduleName} alt=""/>
    <h3>{name}</h3>
    {price || 3.99}
  </article>;
};

Product.propTypes ={
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,

};

// Product.defaultProps={
//   name:'undefined',
//   price:3.99,
//   image:moduleName
// }

export default Product;
