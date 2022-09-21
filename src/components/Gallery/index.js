import React, { useEffect, useState, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../components/reusables/Breadcrumb';
import agent from '../../agent';
import {API_STATUS, GALLERY_TYPES} from '../../constant';
import { HANDLE_ERROR } from '../../Utils/utils';
import Loader from '../../components/reusables/Loader';
import {useParams} from "react-router-dom";

const Index = () => {
  const [galleryListArray, setGalleryListArray] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const type = useParams().type;
  useEffect(() => {
    let isActive = true;
    if (isActive && GALLERY_TYPES.map((item)=>item.key).includes(type)) {
      setLoading(true);
      agent.Gallery.getAll({ type: type.toUpperCase() })
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
    else
    {
      window.location = "/";
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
        <title>Our gallery</title>
        <meta name='description' content='Organic Food' />
      </MetaTags>
      <LayoutOne>
        <div className='work-page-two'>
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title={`Our ${GALLERY_TYPES.filter((item)=>item.key === type)?.[0]?.label} Gallery`} />

          {/*====================  End of breadcrumb area  ================*/}
          <section className='work-section'>
            <div className='container'>
              <p className="mb-5"> {GALLERY_TYPES.filter((item)=>item.key === type)?.[0]?.desc}</p>
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

export default Index;
