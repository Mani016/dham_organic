import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../layouts/LayoutOne';
import Breadcrumb from '../components/Breadcrumb';
import agent from '../agent';
import Loader from '../components/Loader';
import { API_STATUS } from '../constant';
import NoData from '../components/NoData';
import { HANDLE_ERROR } from '../Utils/utils';
const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const params = useParams();
  function getProducts() {
    setLoading(true);
    const payload = {
      status: 'IN-STOCK',
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
                <div className='price'>
                  <span
                    className={`product_price ${
                      valu.discount > 0 && 'cut_price'
                    }`}
                  >
                    Price: ₹{valu.price}
                  </span>
                  {valu.discount > 0 && (
                    <span className='product_price'>
                      Offer Price: ₹{valu.finalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className='project_view'></div>
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
                      <div className='d-md-flex d-block justify-content-between w-100'>
                        <p className='product_count text-center text-md-left'>{`Showing ${data.page}– ${data.total_pages} of ${data.total} results`}</p>
                        <div className='prodt_pagination mb-3'>
                          <ul>
                            <li>
                              <span
                                onClick={() => setPage(page - 1)}
                                className={page <= 1 ? 'disable' : ''}
                              >
                                {'< '}
                              </span>
                            </li>
                            {page}
                            <li>
                              <span
                                onClick={() => setPage(page + 1)}
                                className={
                                  page === data.total_pages ? 'disable' : ''
                                }
                              >
                                {'>'}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
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
