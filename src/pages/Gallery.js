import React, { useEffect, useState, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../layouts/LayoutOne';
import Breadcrumb from '../components/Breadcrumb';
import Loader from '../components/Loader';
import agent from '../agent';
import { API_STATUS } from '../constant';

const Gallery = () => {
  const [galleryListArray, setGalleryListArray] = useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    agent.Gallery.getAll()
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          setGalleryListArray(res.data);
          setLoading(false);
        } else {
          setGalleryListArray([]);
          setLoading(false);
        }
      })
      .catch((err) => {
        setGalleryListArray([]);
        setLoading(false);
      });
  }, []);

  const galleryListMap = galleryListArray.map((valu, i) => {
    return (
      <div className='col-md-4 col-sm-12 web graphics' key={i}>
        <div
          className='single-project-item'
          style={{ backgroundImage: `url(${valu.image.path})` }}
        >
          <div className='project-hover'>
            <div className='project_cnt'>
              <h6>
               {valu.title}
              </h6>
          
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
        <meta name='description' content='Organic Food React JS Template.' />
      </MetaTags>
      <LayoutOne>
        <div className='work-page-two'>
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title='Our Gallery' />

          {/*====================  End of breadcrumb area  ================*/}

          <section className='work-section'>
            <div className='container'>
              {/* Heading */}
              <div className='base-header'>
                <small>Our Latest Work</small>
                <h3>Our Farm Gallery</h3>
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
