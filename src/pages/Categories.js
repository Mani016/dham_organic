/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../layouts/LayoutOne';
import Breadcrumb from '../components/Breadcrumb';
import agent from '../agent';
import Loader from '../components/Loader';
import { API_STATUS } from '../constant';
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
            <Link to={`${valu.link}`} className='serv_link'>
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
      // page: page,
      // limit: 10,
      status: true,
    };
    agent.Category.get(payload)
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)){
          setData(res.data);
          setLoading(false);
        } else {
          setData({});
          setLoading(false);
        }
      })
      .catch((err) => {
        setData({});
        setLoading(false);
      });
  }
  useEffect(() => {
    getCategories();
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

          <section className='product-section'>
            <div className='container'>
              {loading ? (
                <Loader />
              ) : (
                <>
                  <div className='d-flex justify-content-between align-items-center mb-4'>
                      <p className='product_count'>{`Showing ${data.page}– ${data.total_pages} of ${data.total} results`}</p>
                      <div className='prodt_pagination'>
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
