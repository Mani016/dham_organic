/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../layouts/LayoutOne';
import Breadcrumb from '../components/Breadcrumb';
import agent from '../agent';
import Loader from '../components/Loader';
import { API_STATUS } from '../constant';
import { HANDLE_ERROR } from '../Utils/utils';
export const CategoryCard = ({ item = [] }) => {
  return (
    <>
      {item.map((valu, i) => (
        <div className='col-md-4 col-sm-12' key={i}>
          <div className='service-item'>
            <div className='img_serv'>
              <Link to={`category/${valu._id}`}>
                {' '}
                <img src={valu.image.path} alt='product' />
              </Link>
            </div>
            <div className='service_text'>
              <Link to={`category/${valu._id}`}>
                <h4>{valu.name}</h4>
              </Link>
              <p>{valu.description}</p>
            </div>
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
  const [page, setPage] = useState(1);
  function getCategories() {
    setLoading(true);
    const payload = {
      page: page,
      limit: 10,
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
        <title>Dhaam Organic| Our Categories</title>
        <meta name='description' content='Dhaam Organic | Our Categories' />
      </MetaTags>
      <LayoutOne>
        <div className='category-page'>
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title='Our Categories' />

          {/*====================  End of breadcrumb area  ====================*/}

          {/*==================== Category Area  ====================*/}
          <section className='service-section'>
            <div className='animate_icon'>
              <div className='animate_item animate_item1 bounce_animate'>
                <img src='assets/images/animate_icon1.png' alt='' />
              </div>
              <div className='animate_item animate_item2 bounce_animate'>
                <img src='assets/images/animate_icon2.png' alt='' />
              </div>
              <div className='animate_item animate_item3 bounce_animate'>
                <img src='assets/images/animate_icon3.png' alt='' />
              </div>
              <div className='animate_item animate_item4 bounce_animate'>
                <img src='assets/images/animate_icon4.png' alt='' />
              </div>
            </div>
            <div className='container'>
              <div className='base-header'>
                <small> Our Featured Categories</small>
                <h3> Organic Categories</h3>
              </div>
              {loading ? (
                <Loader />
              ) : (
                <>
                  <div className='d-flex justify-content-between'>
                    <p className='product_count'>{`Showing ${data.page}– ${data.total_pages} of ${data.total} results`}</p>
                    <div className='prodt_pagination mb-4'>
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
