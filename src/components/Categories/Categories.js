/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../components/reusables/Breadcrumb';
import agent from '../../agent';
import { API_STATUS } from '../../constant';
import Loader from '../../components/reusables/Loader';
import usePagination from '../../Utils/hooks/usePagination';
import { HANDLE_ERROR } from '../../Utils/utils';
export const CategoryCard = ({ item = [] }) => {
  return (
    <>
      {item.map((valu, i) => (
        <div className='col-md-4 col-sm-12 mb-5' key={i}>
          <div className='service-item'>
            <Link to={`category/${valu._id}`}>
              <div className='img_serv'>
                {' '}
                <img src={valu.image.path} alt='product' />
              </div>
              <div className='service_text'>
                <h4 className='text-uppercase'>{valu.name}</h4>
                <p>
                  {valu.description.length > 120
                    ? valu.description.slice(0, 120) + '....'
                    : valu.description}
                </p>
              </div>
            </Link>
            <Link to={`category/${valu._id}`} className='serv_link'>
              <i className='icon-glyph-40'></i>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
const Category = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { paginationLayout, page } = usePagination({data});
  function getCategories() {
    setLoading(true);
    const payload = {
      page: page,
      limit: 100,
      status: true,
    };
    agent.Category.get(payload)
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
      getCategories();
    }
    return () => {
      isActive = false;
    };
  }, [page]);

  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic|  Our Products</title>
        <meta name='description' content='Dhaam Organic | Our Products' />
      </MetaTags>
      <LayoutOne>
        <div className='category-page'>
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title='Our Products' />

          {/*====================  End of breadcrumb area  ====================*/}

          {/*==================== Category Area  ====================*/}
          <section className='service-section'>
            <div className='animate_icon'>
              <div className='animate_item animate_item1 bounce_animate'>
                <img src='/assets/images/animate_icon1.webp' alt='' />
              </div>
              <div className='animate_item animate_item2 bounce_animate'>
                <img src='/assets/images/animate_icon2.webp' alt='' />
              </div>
              <div className='animate_item animate_item3 bounce_animate'>
                <img src='/assets/images/animate_icon3.webp' alt='' />
              </div>
              <div className='animate_item animate_item4 bounce_animate'>
                <img src='/assets/images/animate_icon4.webp' alt='' />
              </div>
            </div>
            <div className='container'>
              {loading ? (
                <Loader />
              ) : (
                <>
                  {paginationLayout()}
                  <div className='row'>
                    <CategoryCard item={data.data || []} />
                  </div>
                </>
              )}
            </div>
          </section>
          {/*====================  End Category Area  ====================*/}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Category;
