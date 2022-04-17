import React, { useState, useEffect, useContext } from 'react';
import agent from '../../agent';
import { API_STATUS } from '../../constant';
import useCart from '../../Utils/hooks/useCart';
import { Link } from 'react-router-dom';
import Alert from '../../Utils/Alert';
import AppContext from '../../Context';

const ProductsCarousel = (props) => {
  const { title = 'You may also like' } = props;
  const [data, setData] = useState([]);
  const {  getCartQuantity } = useCart();
  const { itemsInCart } = useContext(AppContext);
  const cartDetails = itemsInCart?.cartDetails || [];

  function getProducts() {
    const payload = {
      status: ['IN-STOCK', 'LOW-STOCK'],
    };
    agent.Product.get(payload)
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          if (cartDetails.length > 0) {
            setData(
              res.data.data.filter(
                (item) =>
                  !cartDetails.map((cd) => cd.productId).includes(item._id)
              )
            );
          } else {
            setData(res.data?.data);
          }
        } else {
          Alert.showToastAlert('error', res.message);
        }
      })
      .catch((err) => {
        Alert.showToastAlert('error', err.message);
      });
  }

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      getProducts();
    }
    return () => {
      isActive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const productMap = (item) =>
    item.map((valu, i) => {
      return (
        <div className='product_wrp' key={i}>
          <Link to={`/product/${valu._id}`}>
            <div className='product_img'>
              <img src={valu.images[0].path} alt='product' />
              {valu.discount > 0 && (
                <div className='on_sale'>{valu.discount}% off</div>
              )}
            </div>
          </Link>
          <div className='product_info'>
            <h4>{valu.name}</h4>
            <span>
              Qty:&nbsp; {valu.qty}/{valu.unit.name}
            </span>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='price'>
                <span
                  className={`product_price ${
                    valu.discount > 0 && 'cut_price'
                  }`}
                >
                  ₹{valu.price}
                </span>
                {valu.discount > 0 && (
                  <span className='product_price'>₹{valu.finalPrice}</span>
                )}
              </div>
              {getCartQuantity(valu._id,valu.status)}
            </div>
          </div>
        </div>
      );
    });
  return (
    <>
      {data.length > 0 && (
        <div className='container all-products'>
          <h3>{title}</h3>
          <div className='related_products'>{productMap(data)}</div>
        </div>
      )}
    </>
  );
};

export default ProductsCarousel;
