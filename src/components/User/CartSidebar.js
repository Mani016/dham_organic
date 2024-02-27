import React from 'react';
import Sidebar from '../reusables/Sidebar';
import useCart from '../../Utils/hooks/useCart';
import ProductsCarousel from '../Products/ProductsCarousel';
import { useHistory } from 'react-router-dom';
import NoItemsInCart from '../reusables/NoItemsInCart';
import { Link } from 'react-router-dom';
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
              <span className='item_details'>
                <Link to={`/product/${subItem.productId}`}>
                  <img
                    src={subItem.images}
                    alt='items_in_cart'
                    style={{ height: '90px', width: '90px' }}
                  />
                </Link>
                <div>
                  <p>{subItem.name}</p>
                  <div className='price_tag'>
                    <span>
                      <b>
                        {subItem.details?.qty}{(subItem.unit.name)} x{' '}
                        {subItem.quantity}
                      </b> | 
                      <b className='mx-2'>₹{subItem.subTotal}</b>

                    </span>
                    {subItem.discount > 0 && (
                      <span style={{ textDecoration: 'line-through' }}>
                        ₹{subItem.price}
                      </span>
                    )}
                  </div>
                </div>
              </span>
              <span>{getCartQuantity(subItem.productId, subItem.status)}</span>
            </div>
          ))}
          <ProductsCarousel title={'before you checkout'} />
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
          <NoItemsInCart
            title={"you don't have any items in your cart"}
            subTitle={'your favourite items are just a click away'}
            btnTxt={'Start Shopping'}
          />{' '}
          <ProductsCarousel />
        </>
      )}
    </Sidebar>
  );
};

export default CartSidebar;
