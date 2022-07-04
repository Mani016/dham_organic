import React, { useEffect, useState, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../components/reusables/Breadcrumb';
import agent from '../../agent';
import { API_STATUS } from '../../constant';
import { HANDLE_ERROR } from '../../Utils/utils';
import Loader from '../../components/reusables/Loader';

const Gallery = ({ type }) => {
  const [galleryListArray, setGalleryListArray] = useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      setLoading(true);
      agent.Gallery.getAll({ type })
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            setGalleryListArray(res.data);
            setLoading(false);
          } else {
            HANDLE_ERROR(res.message, setLoading);
          }
        })
        .catch((err) => {
          HANDLE_ERROR(err.message, setLoading);
        });
    }
    return () => {
      isActive = false;
    };
  }, [type]);

  const galleryListMap = galleryListArray.map((valu, i) => {
    return (
      <div className='col-md-4 col-sm-12 web graphics' key={i}>
        <div
          className='single-project-item'
          style={{ backgroundImage: `url(${valu.image.path})` }}
        >
          <div className='project-hover'>
            <div className='project_cnt'>
              <h6>{valu.title}</h6>
              <h6>{valu.description}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Gallery </title>
        <meta name='description' content='Organic Food' />
      </MetaTags>
      <LayoutOne>
        <div className='work-page-two'>
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title={`Our ${type === 'FARM'
                    ? 'Farms'
                    : type === 'EVENT'
                    ? 'Events'
                    : 'Products'} Gallery`} />

          {/*====================  End of breadcrumb area  ================*/}

          <section className='work-section'>
            <div className='container'>
              {/* Heading */}
              <div className='base-header'>
                <small>Our Latest Work</small>
                <h3>
                  Our{' '}
                  {type === 'FARM'
                    ? 'Farms'
                    : type === 'EVENT'
                    ? 'Events'
                    : 'Products'}{' '}
                  Gallery
                </h3>
              </div>
              {/* End: Heading */}
              {loading ? (
                <Loader />
              ) : (
                <div className='row projects-list'>{galleryListMap}</div>
              )}
            </div>
          </section>

          {/*==================== End : Work Section ====================*/}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Gallery;