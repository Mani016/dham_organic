import React from 'react';
import { useHistory } from 'react-router-dom';
import { API_STATUS } from '../../constant';
import AppContext from '../../Context';
import Alert from '../Alert';
import { HANDLE_ERROR } from '../utils';
import agent from '../../agent';

const useCart = () => {
  const { checkUserLogin, setLoading, GetCart, itemsInCart } =
    React.useContext(AppContext);
  const history = useHistory();

  function getItemQuantity(id) {
    let qty = 0;
    const product = itemsInCart?.cartDetails?.filter(
      (item) => item.productId === id
    );
    if (product?.length) {
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
      history.push('/login');
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
      history.push('/login');
    }
  }
  function handleRemove(productId) {
    const payload = {
      productId,
    };
    agent.Cart.deleteFromCart(payload)
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          Alert.showToastAlert('success', res.message);
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
  const getCartQuantity = (id) => (
    <div className='cart-quantity'>
      {getItemQuantity(id) ? (
        <div className='cart-plus-minus'>
          <div
            className={`qtybutton ${
              getItemQuantity(id) === 0 ? 'disable' : ''
            }`}
            onClick={() => subtractFromCart(id)}
          >
            <i className='fa fa-minus'></i>
          </div>
          <input
            className='cart-plus-minus-box'
            type='text'
            name='qtybutton'
            readOnly
            value={getItemQuantity(id)}
          />

          <div className='inc qtybutton' onClick={() => addToCart(id)}>
            <i className='fa fa-plus'></i>
          </div>
        </div>
      ) : (
        <div onClick={() => addToCart(id)} className='prod_add_cart_btn' style={{marginTop:'38px'}}>
          Add To Cart
        </div>
      )}
    </div>
  );
  return {
    getCartQuantity,
    getItemQuantity,
    addToCart,
    handleRemove,
  };
};
export default useCart;
