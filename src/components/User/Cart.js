/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../layouts/LayoutOne';
import agent from '../../agent';
import AppContext from '../../Context';
import Alert from '../../Utils/Alert';
import { API_STATUS } from '../../constant';
import { HANDLE_ERROR, setItemToSessionStore } from '../../Utils/utils';
import Loader from '../reusables/Loader';
import ManageAddress from './ManageAddress';
import NoItemsInCart from '../reusables/NoItemsInCart';
import useCart from '../../Utils/hooks/useCart';
import ProductsCarousel from '../Products/ProductsCarousel';
import {Link} from 'react-router-dom';
const Cart = () => {
  const {
    loading,
    setLoading,
    GetCart,
    itemsInCart,
    selectedAddress,
    finalAmount,
  } = React.useContext(AppContext);
  const minOrder = selectedAddress?.locality?.minOrder;
  const { getCartQuantity, handleRemove } = useCart();
  useEffect(() => {
    let isActive = true;
    if (isActive) {
      GetCart();
    }
    return () => {
      isActive = false;
    };
  }, []);
  function handleCheckout() {
    if (!selectedAddress?.locality) {
      Alert.showToastAlert('warning', 'Select Address');
    } else {
      setLoading(true);
      const payload = {
        orderItem: itemsInCart.cartDetails?.map((item) => ({
          price: item.subTotal,
          quantity: item.quantity,
          productId: item.productId,
        })),
        orderAmount: itemsInCart.subTotal,
        finalAmount: finalAmount,
        deliveryAddress: `${selectedAddress.address}, ${selectedAddress.landmark}`,
        locality: selectedAddress.locality._id,
        deliveryBoyId: selectedAddress.locality.deliveryBoyId,
      };
      agent.Cart.checkout(payload)
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res?.status)) {
            Alert.showToastAlert('success', res?.message);
            setItemToSessionStore('selectedAddress', {});
            GetCart();
            setLoading(false);
          } else {
            HANDLE_ERROR(res?.message, setLoading);
          }
        })
        .catch((err) => {
          HANDLE_ERROR(err.message, setLoading);
        });
    }
  }
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Cart</title>
        <meta name='description' content='Organic Food' />
      </MetaTags>
      <LayoutOne>
        <div>
          {/*====================  breadcrumb area ====================*/}

          {/* <Breadcrumb title='Shopping Cart' /> */}

          {/*====================  End of breadcrumb area  ====================*/}

          {/*====================  Cart area ====================*/}

          <div className='shop_cart'>
            <div className='container'>
              <div className='base-header'>
                <h3> SHOPPING CART</h3>
              </div>
              {loading ? (
                <div className="cart-loader">
                <Loader msg={'Updating Cart'} />
                </div>
              ) : (
                <>
                  {!itemsInCart.cartDetails?.length ? (
                    <NoItemsInCart />
                  ) : (
                    <div className='row mb-5'>
                      <div className='col-sm-12 col-lg-12'>
                        <div className='table-responsive text-center'>
                          <table className='table table-bordered'>
                            <thead>
                              <tr className='shop_cart_tr'>
                                <th className='text-center'>Product Image</th>
                                <th className='text-center'>Product name</th>
                                <th className='text-center'>Price</th>
                                <th className='text-center'>Discount</th>
                                <th className='text-center'>Final Price</th>
                                <th className='text-center'>Qty</th>
                                <th className='text-center'>total</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {itemsInCart?.cartDetails?.map((item, index) => (
                                <tr key={`product_${index}`}>
                                  <td align='center' className='prod'>
                                   <Link to={`/product/${item.productId}`}> <img src={item.images} alt='product' /></Link>
                                  </td>
                                  <td align='center' className='ptitle'>
                                    {item.name}
                                  </td>
                                  <td align='center' className='unit'>
                                    <span>₹ {item.price}</span>
                                  </td>
                                  <td align='center' className='unit'>
                                    <span>{item.discount}%</span>
                                  </td>
                                  <td align='center' className='unit'>
                                    <span>₹ {item.finalPrice}</span>
                                  </td>
                                  <td align='center' className='qty'>
                                    {getCartQuantity(item.productId,item.status)}
                                  </td>
                                  <td align='center' className='unit'>
                                    <span>₹ {item.subTotal}</span>
                                  </td>
                                  <td align='center'>
                                    <div
                                      onClick={() =>
                                        handleRemove(item.productId)
                                      }
                                      className='cursor-pointer'
                                    >
                                      <i
                                        className='fa fa-trash'
                                        style={{
                                          fontSize: '35px',
                                          color: '#ff4343',
                                        }}
                                      ></i>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className='col-sm-12 col-lg-8'>
                        <div className='grand-total-area'>
                          <ManageAddress
                            title={'Choose a delivery address'}
                            isChooseAddress={true}
                          />
                        </div>
                      </div>
                      <div className='ml-auto col-lg-4'>
                        <div className='grand-total-area'>
                          <h4>Bill Details</h4>
                          <p className='sub-total'>
                            Item Total
                            <span className='amt'>
                              {' '}
                              ₹ {itemsInCart.subTotal}
                            </span>
                          </p>
                          {
                            <p className='delivery'>
                              Delivery Fee
                              <span className='amt'>
                                {' '}
                                ₹{' '}
                                {itemsInCart.subTotal < minOrder
                                  ? selectedAddress?.locality?.charge
                                  : 0}
                              </span>
                              {itemsInCart.subTotal < minOrder && (
                                <div style={{ fontSize: '12px' }} className="d-flex">
                                  <span className="text-primary">FREE DELIVERY</span>: On Order over ₹{minOrder}
                                </div>
                              )}
                            </p>
                          }
                          <hr />
                          <p className='delivery'>
                            TO PAY
                            <span className='amt'> ₹ {finalAmount}</span>
                          </p>
                          <div
                            className='pro-checkout cursor-pointer'
                            onClick={() => handleCheckout()}
                          >
                            Proceed To Checkout
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            <ProductsCarousel />
          </div>
          {/*====================  End of Cart  Section    ====================*/}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Cart;
