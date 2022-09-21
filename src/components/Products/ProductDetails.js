/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../layouts/LayoutOne';
import agent from '../../agent';
import { API_STATUS } from '../../constant';
import { getItemFromSessionStore, HANDLE_ERROR } from '../../Utils/utils';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useCart from '../../Utils/hooks/useCart';
import { GlassMagnifier } from 'react-image-magnifiers';
import ProductsCaraousel from './ProductsCarousel';
import Breadcrumb from '../reusables/Breadcrumb';
import Loader from '../reusables/Loader';
const ProductDetails = () => {
  const token = getItemFromSessionStore('token');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const history = useHistory();

  const { getCartQuantity } = useCart();
  /* Shop Tab menu */
  let productTabMenuData = [
    { tabMenuName: 'Product Specifications' },
    { tabMenuName: 'Additional Information' },
  ];
  function getProductById() {
    setLoading(true);
    agent.Product.getById(params.id)
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
      getProductById();
    }
    return () => {
      isActive = false;
    };
  }, [params.id]);
  const images = [];

  if (Array.isArray(data.images)) {
    data.images.forEach((card) => {
      images.push(card.path);
    });
  }

  const settings = {
    customPaging: function (i) {
      return <img src={images[i]} alt='' />;
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // adaptiveHeight: true,
  };
  /* Shop Tab Content */
  let productTabContentData = [
    {
      contentDesc: data.specification,
    },

    {
      contentDesc: data.additionalInfo,
    },
  ];
  let productTabContentDatalist = productTabContentData.map((val, i) => {
    return (
      <TabPanel key={i}>
        <div className='shop-tab-content-wrapper'>
          <div className='shop-tab-content'>
            <h3>{val.contentTitle}</h3>
            <p>{val.contentDesc}</p>
          </div>
        </div>
      </TabPanel>
    );
  });
  let productTabMenuDatalist = productTabMenuData.map((val, i) => {
    return (
      <Tab key={i}>
        <span className='shop-nav-tabs'>{val.tabMenuName}</span>
      </Tab>
    );
  });
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Product Details</title>
        <meta name='description' content='Organic Food' />
      </MetaTags>
      <LayoutOne>
        <div className='single-shop-page'>
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title='Our Products' />

          {/*====================  End of breadcrumb area  ====================*/}

          <div className='shop-product-area'>
            <div className='container'>
              {loading ? (
                <Loader />
              ) : (
                <>
                  <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                      <div className='shop-products'>
                        <div className='single-item-detail'>
                          <div className='product-thumbnail'>
                            {/* Image Index */}
                            <Slider {...settings}>
                              {data.images?.map((slide, j) => (
                                <div className='slide-img' key={j}>
                                  <GlassMagnifier
                                    imageSrc={slide.path}
                                    imageAlt='Example'
                                    cursorStyle='crosshair'
                                    magnifierSize='45%'
                                    className='img-magnifier'
                                    magnifierBorderColor='#f4f3f4'
                                  />
                                </div>
                              ))}
                            </Slider>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-6 col-sm-12'>
                      <div className='allproduct-info'>
                        <div className='tittle_product'>{data.name}</div>
                        <div className='allproduct-price-area'>
                          {/* Product Price  */}
                          <span className='price'>
                            <span className='n-amt'>
                              {data.finalPrice}/{data?.unit?.name}
                            </span>
                            {data.discount > 0 && (
                              <span>
                                <del>
                                  ₹{data.price}/{data?.unit?.name}
                                </del>
                              </span>
                            )}
                            &nbsp; &nbsp;
                            {data.discount > 0 && (
                              <span>{data.discount}% off;</span>
                            )}
                          </span>
                        </div>
                        {/* Product Desctiption  */}
                        <div className='p-content'>
                          <p className={
                                  data.status !== 'OUT-OF-STOCK'
                                    ? 'content'
                                    : 'd-none'
                                }>
                            Availability:
                            <span>
                                {data.status}
                            </span>
                          </p>
                          <p className='d-content'>{data.description}</p>
                        </div>
                        {getCartQuantity(params.id, data.status)}
                        <div className='allchoices'>
                          <div className='choice-icon'>
                            <ul>
                              <li>
                                <span
                                  to='single-shop'
                                  className='text-uppercase adtocart'
                                  onClick={() =>
                                    token ? history.push('/checkout') : ''
                                  }
                                >
                                  go to cart
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='categories-area'>
                          <p className='category'>
                            <span>Category :</span>
                          </p>
                          <ul>
                            <li>{data?.category?.name}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='cust-reviews-area'>
                    <div className='container'>
                      <div className='row'>
                        <div className='shop-tab-wrapper'>
                          <Tabs>
                            <div className='col-md-12'>
                              <TabList>{productTabMenuDatalist}</TabList>
                            </div>

                            <div className='col-md-12'>
                              {productTabContentDatalist}
                            </div>
                          </Tabs>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <ProductsCaraousel />

          {/*==================== End :  Section ====================*/}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ProductDetails;
