import React from 'react';
import { Link } from 'react-router-dom';
const NoItemsInCart = () => {
  return (
    <div className='no_items'>
      <div className='no_items_bg'></div>
      <div className='no_items_title'>Your cart is empty</div>
      <div className='no_items_sub_title'>
        You can go to category page to view more categories
      </div>
      <Link to='/categories' className='no_items_btn'>
        Categories
      </Link>
    </div>
  );
};

export default NoItemsInCart;
