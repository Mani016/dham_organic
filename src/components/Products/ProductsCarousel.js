import React, { useState, useEffect } from 'react';
import agent from '../../agent';
import { API_STATUS } from '../../constant';
import useCart from '../../Utils/hooks/useCart';
import usePagination from '../../Utils/hooks/usePagination';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Alert from '../../Utils/Alert';

const ProductsCarousel = () => {
  const [data, setData] = useState([]);
  const { page } = usePagination(data);
  const { getItemQuantity, addToCart, getCartQuantity } = useCart();

  function getProducts() {
    const payload = {
      status: ['IN-STOCK', 'LOW-STOCK'],
    };
    agent.Product.get(payload)
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          setData(res.data);
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
  }, [page]);
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  const productMap = (item) =>
    item.map((valu, i) => {
      return (
        <div className='product_wrp' key={i}>
          <Link to={`/product/${valu._id}`} >
            <div className='product_img'>
              <img src={valu.images[0].path} alt='product' />
              {valu.discount > 0 && (
                <div className='on_sale'>{valu.discount}%</div>
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
                  Price:&nbsp; ₹{valu.price}
                </span>
                {valu.discount > 0 && (
                  <span className='product_price'>
                    Offer Price: ₹{valu.finalPrice}/{valu.unit.name}
                  </span>
                )}
              </div>
              {getItemQuantity(valu._id) ? (
                getCartQuantity(valu._id)
              ) : (
                <div onClick={() => addToCart(valu._id)}>Add To Cart</div>
              )}
            </div>
          </div>
        </div>
      );
    });

  return (
    <>
      {data.total > 0 && (
        <div className='container all-products'>
          <h3>you might also like</h3>
          <Slider {...settings}>{productMap(data.data)}</Slider>
        </div>
      )}
    </>
  );
};

export default ProductsCarousel;
