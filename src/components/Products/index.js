import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../reusables/Breadcrumb';
import agent from '../../agent';
import Loader from '../reusables/Loader';
import { API_STATUS } from '../../constant';
import { HANDLE_ERROR } from '../../Utils/utils';
import useCart from '../../Utils/hooks/useCart';
import usePagination from '../../Utils/hooks/usePagination';
import NoData from '../reusables/NoData';
const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { paginationLayout, page } = usePagination(data);
  const { getItemQuantity, addToCart, getCartQuantity } = useCart();

  function getProducts() {
    setLoading(true);
    const payload = {
      status: ['IN-STOCK', 'LOW-STOCK'],
      categoryId: params.id,
      page: page,
      limit: 10,
    };
    agent.Product.get(payload)
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          setData(res.data);
          setLoading(false);
        } else {
          HANDLE_ERROR(res.message, setLoading);
        }
      })
      .catch((err) => {
        HANDLE_ERROR(err.message, setLoading);
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

  const productMap = (item) =>
    item.map((valu, i) => {
      return (
        <div className='col-md-3 col-sm-12' key={i}>
          <Link to={`/product/${valu._id}`}>
            <div className='product_wrp'>
              <div className='product_img'>
                <img src={valu.images[0].path} alt='product' />
                {valu.discount > 0 && (
                  <div className='on_sale'>{valu.discount}%</div>
                )}
              </div>
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
          </Link>
        </div>
      );
    });

  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic | Our Products</title>
        <meta name='description' content='Dhaam Organic Products' />
      </MetaTags>
      <LayoutOne>
        <div className='product-page'>
          {/*====================  breadcrumb area ====================*/}
          <Breadcrumb title='Our Products' />
          {/*====================  End of breadcrumb area  ====================*/}
          {/*==================== Products area  ====================*/}
          <section className='product-section blog-section'>
            <div className='container'>
              <div className='base-header'>
                <small> Our Featured Products</small>
                <h3> Organic Products</h3>
              </div>
              {loading ? (
                <Loader />
              ) : (
                <>
                  {data.total > 0 ? (
                    <>
                      {paginationLayout()}
                      <div className='row'>{productMap(data.data)}</div>
                    </>
                  ) : (
                    <NoData />
                  )}
                </>
              )}
            </div>
          </section>
          {/*====================  End Products area  ====================*/}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
