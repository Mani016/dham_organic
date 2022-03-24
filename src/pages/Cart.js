/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../layouts/LayoutOne';
// import Breadcrumb from '../components/Breadcrumb';
import agent from '../agent';
import AppContext from '../Context';
import Alert from '../Utils/Alert';
import { API_STATUS } from '../constant';
import { HANDLE_ERROR, setItemToSessionStore } from '../Utils/utils';
import Loader from '../components/Loader';
import ManageAddress from '../components/dashboard/ManageAddress';
import NoItemsInCart from '../components/NoItemsInCart';
const Cart = () => {
  const {
    checkUserLogin,
    loading,
    setLoading,
    GetCart,
    itemsInCart,
    selectedAddress,
  } = React.useContext(AppContext);
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
    console.log(selectedAddress)
    if (!selectedAddress?.locality) {
      Alert.showToastAlert('warning', 'Select Address');
    } else {
      const payload = {
        orderItem: itemsInCart.cartDetails?.map((item) => ({
          price: item.subTotal,
          quantity: item.quantity,
          productId: item.productId,
        })),
        orderAmount: itemsInCart.subTotal,
        finalAmount: itemsInCart.subTotal + selectedAddress.locality.charge,
        deliveryAddress: `${selectedAddress.address}, ${selectedAddress.landmark}`,
        locality: selectedAddress.locality._id,
        deliveryBoyId: selectedAddress.locality.deliveryBoyId,
      };
      agent.Cart.checkout(payload)
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            Alert.showToastAlert('success', res.message);
            setItemToSessionStore('selectedAddress', {});
            GetCart();
            setLoading(false);
          } else {
            HANDLE_ERROR(res.message, setLoading);
          }
        })
        .catch((err) => {
          HANDLE_ERROR(err.message, setLoading);
        });
    }
  }

  function getItemQuantity(id) {
    let qty = 0;
    const product = itemsInCart?.cartDetails.filter(
      (item) => item.productId === id
    );
    if (product.length) {
      qty = product[0].quantity;
    }
    return qty;
  }
  function addToCart(id) {
    if (checkUserLogin()) {
      setLoading(true);
      agent.Cart.add({ productId: id })
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            Alert.showToastAlert('success', 'Product Added Successfully.');
            GetCart();
            setLoading(false);
          } else {
            HANDLE_ERROR(res.message, setLoading);
          }
        })
        .catch((err) => {
          HANDLE_ERROR(err.message, setLoading);
        });
    } else {
      Alert.showToastAlert('error', 'Login Required');
    }
  }
  function subtractFromCart(id) {
    if (checkUserLogin()) {
      setLoading(true);
      agent.Cart.remove({ productId: id })
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            Alert.showToastAlert('success', 'Product Removed Successfully.');
            GetCart();
            setLoading(false);
          } else {
            HANDLE_ERROR(res.message, setLoading);
          }
        })
        .catch((err) => {
          HANDLE_ERROR(err.message, setLoading);
        });
    } else {
      Alert.showToastAlert('error', 'Login Required');
    }
  }
  function handleRemove(productId){
    const payload = {
      productId
    }
    agent.Cart.deleteFromCart(payload).then((res) => {
      if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
        Alert.showToastAlert('success',res.message);
        GetCart();
        setLoading(false);
      } else {
        HANDLE_ERROR(res.message, setLoading);
      }
    })
    .catch((err) => {
      HANDLE_ERROR(err.message, setLoading);
    });
  }
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Cart</title>
        <meta name='description' content='Organic Food React JS Template.' />
      </MetaTags>
      <LayoutOne>
        <div >
          {/*====================  breadcrumb area ====================*/}

          {/* <Breadcrumb title='Shopping Cart' /> */}

          {/*====================  End of breadcrumb area  ====================*/}

          {/*====================  Cart area ====================*/}

          <div className='shop_cart'>
            <div className='container-fluid'>
              <div className='base-header'>
                <h3> SECURE CHECKOUT</h3>
              </div>
              {loading ? (
                <Loader msg={'Updating Cart'} />
              ) : (
                <>
                  {!itemsInCart.cartDetails?.length ? (
                    <NoItemsInCart />
                  ) : (
                    <div className='row'>
                      <div className='col-sm-12 col-lg-6'>
                        <ManageAddress
                          title={'Choose a delivery address'}
                          subTitle={'Multiple addresses in this location'}
                          isChooseAddress={true}
                        />
                      </div>
                      <div className='col-sm-12 col-lg-6'>
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
                                  <td className='prod'>
                                    <img src={item.images} alt='product' />
                                  </td>
                                  <td className='ptitle'>{item.name}</td>
                                  <td className='unit'>
                                    <span>₹ {item.price}</span>
                                  </td>
                                  <td className='unit'>
                                    <span>{item.discount}%</span>
                                  </td>
                                  <td className='unit'>
                                    <span>₹ {item.finalPrice}</span>
                                  </td>
                                  <td className='qty'>
                                    <div className='cart-plus-minus'>
                                      <input
                                        className='cart-plus-minus-box'
                                        type='text'
                                        name='qtybutton'
                                        readOnly
                                        value={getItemQuantity(item.productId)}
                                      />
                                      <div
                                        className={`qtybutton ${
                                          getItemQuantity(item.productId) === 0
                                            ? 'disable'
                                            : ''
                                        }`}
                                        onClick={() =>
                                          subtractFromCart(item.productId)
                                        }
                                      >
                                        <span>-</span>
                                      </div>
                                      <div
                                        className='inc qtybutton'
                                        onClick={() =>
                                          addToCart(item.productId)
                                        }
                                      >
                                        <span>+</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className='unit'>
                                    <span>₹ {item.subTotal}</span>
                                  </td>
                                  <td>
                                    <div onClick={()=>handleRemove(item.productId)}>
                                      <i className='fa fa-trash'></i>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className='col-lg-12 col-sm-12'>
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
                                  ₹ {selectedAddress?.locality?.charge || 0}
                                </span>
                              </p>
                            }
                            <hr />
                            <p className='delivery'>
                              TO PAY
                              <span className='amt'>
                                {' '}
                                ₹{' '}
                                {(selectedAddress?.locality?.charge ||
                                  0) + itemsInCart.subTotal}
                              </span>
                            </p>
                            <div
                              className='pro-checkout'
                              onClick={() => handleCheckout()}
                            >
                              Proceed To Checkout
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          {/*====================  End of Cart  Section    ====================*/}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Cart;
