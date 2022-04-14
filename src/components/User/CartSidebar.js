import React from 'react';
import Sidebar from '../reusables/Sidebar';
import useCart from '../../Utils/hooks/useCart';
import ProductsCarousel from '../Products/ProductsCarousel';
import { useHistory } from 'react-router-dom';
import NoItemsInCart from '../reusables/NoItemsInCart';

const CartSidebar = (props) => {
  const { data, onClose, isOpen } = props;
  const { getCartQuantity } = useCart();
  const history = useHistory();
  return (
    <Sidebar onClose={onClose} isOpen={isOpen}>
      <h3>My Cart #</h3>
      <h4 className='item_count'>{data.cartDetails?.length} Items</h4>
      {data.cartDetails?.length ? (
        <>
          {data.cartDetails.map((subItem, index) => (
            <div
              className='item_box d-flex justify-content-between align-items-center'
              key={index}
            >
              <span className='d-flex'>
                <img
                  src={subItem.images}
                  alt='items_in_cart'
                  style={{ height: '100px', width: '100px' }}
                />
                <p>{subItem.name}</p>,
                <div>
                  {' '}
                  {subItem.quantity}/{subItem.unit}
                </div>
                <div>₹{subItem.subTotal}</div>
              </span>
              <span>{getCartQuantity(subItem.productId)}</span>
            </div>
          ))}
          ----------------------
          <ProductsCarousel />
          <div className='bill d-flex justify-content-between align-items-center'>
            <h5>Item Sub Total</h5>
            <span>₹{data.subTotal}</span>
          </div>
          <div
            className='pro-checkout cursor-pointer d-flex justify-content-between align-items-center'
            onClick={() => history.push('/checkout')}
          >
            <span>
              {data.cartDetails?.length} Items * <span>₹{data.subTotal}</span>
            </span>
            <span>
              Proceed <i className='fa fa-chevron-right'></i>
            </span>
          </div>
        </>
      ) : (
        <>
          {' '}
          <NoItemsInCart /> <ProductsCarousel />
        </>
      )}
    </Sidebar>
  );
};

export default CartSidebar;
