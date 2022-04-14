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
  const getCartQuantity = (id)=>(
    <div className='cart-quantity'>
    <div className='cart-plus-minus'>
      <input
        className='cart-plus-minus-box'
        type='text'
        name='qtybutton'
        readOnly
        value={getItemQuantity(id)}
      />
      <div
        className={`qtybutton ${
          getItemQuantity() === 0 ? 'disable' : ''
        }`}
        onClick={() => subtractFromCart(id)}
      >
        <span>-</span>
      </div>
      <div
        className='inc qtybutton'
        onClick={() => addToCart(id)}
      >
        <span>+</span>
      </div>
    </div>
  </div>
  )
  return {
    getCartQuantity,
    getItemQuantity,
    addToCart,
    handleRemove,
  };
};
export default useCart;
