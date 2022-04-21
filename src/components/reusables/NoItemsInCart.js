import React from 'react';
import { Link } from 'react-router-dom';
import empty_cart from '../../assets/images/empty_cart.webp';
const NoItemsInCart = (props) => {
  const {
    title = 'Your Cart Is Empty',
    subTitle = 'You can go to category page to view more categories',
    btnTxt = 'Categories',
  } = props;
  return (
    <div className='no_items'>
      <div
        className='no_items_bg'
        style={{
          backgroundImage:
            `url(${empty_cart})`,
        }}
      ></div>
      <div className='no_items_title'>{title}</div>
      <div className='no_items_sub_title'>{subTitle}</div>
      <Link to='/categories' className='no_items_btn my-5'>
        {btnTxt}
      </Link>
    </div>
  );
};

export default NoItemsInCart;
