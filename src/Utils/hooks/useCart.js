import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { API_STATUS } from '../../constant';
import AppContext from '../../Context';
import Alert from '../Alert';
import { HANDLE_ERROR } from '../utils';
import agent from '../../agent';
import loadImg from '../../assets/images/loading.gif';
const useCart = () => {
  const { checkUserLogin, setLoading, GetCart, itemsInCart, loading } =
    React.useContext(AppContext);

  const history = useHistory();
  const [selectedId, setSelectedId] = useState('');

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
      setSelectedId(id);
      setLoading(true);
      agent.Cart.add({ productId: id })
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            Alert.showToastAlert('success', 'Product Added Successfully.');
            GetCart();
            setLoading(false);
            setSelectedId('');
          } else {
            HANDLE_ERROR(res.message, setLoading);
            setSelectedId('');
          }
        })
        .catch((err) => {
          HANDLE_ERROR(err.message, setLoading);
          setSelectedId('');
        });
    } else {
      Alert.showToastAlert('error', 'Login Required');
      history.push('/login');
    }
  }
  function subtractFromCart(id) {
    if (checkUserLogin()) {
      setSelectedId(id);
      setLoading(true);
      agent.Cart.remove({ productId: id })
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            Alert.showToastAlert('success', 'Product Removed Successfully.');
            GetCart();
            setLoading(false);
            setSelectedId('');
          } else {
            HANDLE_ERROR(res.message, setLoading);
            setSelectedId('');
          }
        })
        .catch((err) => {
          setSelectedId('');
          HANDLE_ERROR(err.message, setLoading);
        });
    } else {
      Alert.showToastAlert('error', 'Login Required');
      history.push('/login');
    }
  }
  function handleRemove(productId) {
    setLoading(true);
    const payload = {
      productId,
    };
    agent.Cart.deleteFromCart(payload)
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          Alert.showToastAlert('success', res.message);
          GetCart();
          setTimeout(()=>{
            setLoading(false);
          },1000)
        } else {
          HANDLE_ERROR(res.message, setLoading);
        }
      })
      .catch((err) => {
        HANDLE_ERROR(err.message, setLoading);
      });
  }
  const getCartQuantity = (id, status) => {
    return(
    <>
      {status !== 'OUT-OF-STOCK' ? (
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
              {(loading && id === selectedId)  ? (
                <img src={loadImg} className='white_load' alt='cart' />
              ) : (
                <input
                  className='cart-plus-minus-box'
                  type='text'
                  name='qtybutton'
                  readOnly
                  value={getItemQuantity(id)}
                />
              )}
              <div className='inc qtybutton' onClick={() => addToCart(id)}>
                <i className='fa fa-plus'></i>
              </div>
            </div>
          ) : (
            <div onClick={() => addToCart(id)} className='prod_add_cart_btn'>
              {loading && id === selectedId ? (
                <img src={loadImg} className='white_load' alt='loader' />
              ) : (
                'Add To Cart'
              )}
            </div>
          )}
        </div>
      ) : (
        <div className='prod_out_of_stock'>
          OUT OF STOCK
        </div>
      )}
    </>
  )};
  return {
    getCartQuantity,
    getItemQuantity,
    addToCart,
    handleRemove,
  };
};
export default useCart;
