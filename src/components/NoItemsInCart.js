import React from 'react';
import { Link } from 'react-router-dom';
const NoItemsInCart = (props) => {
  const { title ='Your Cart Is Empty' } = props;
  return (
    <div className='no_items'>
      <div className='no_items_bg'></div>
      <div className='no_items_title'>{title}</div>
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
