import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { HANDLE_ERROR } from '../../Utils/utils';
import agent from '../../agent';
import { API_STATUS } from '../../constant';
import Loader from '../reusables/Loader';

const GalleryContent = ({ type }) => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '200px',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '80px',
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '40px',
          centerMode: false,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  const [loading, setLoading] = React.useState(false);
  const [imageGalleryData, setImageGalleryData] = useState([]);
  useEffect(() => {
    let isActive = true;
    if (isActive) {
      setLoading(true)
      agent.Gallery.getAll({type})
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            setImageGalleryData(res.data);
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

  let ImageGalleryDataList = imageGalleryData.map((val, i) => {
    return (
      <div
        className='col-md-12 swiper-slide service-gallery__single-slide'
        key={i}
      >
        <div className='project-item item'>
          <div className='project_slide_img item'>
            <img src={val.image.path} alt='product' />
          </div>
          <div className='project_text'>
            <h4>{val.title}</h4>
            <h4>{val.description}</h4>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className='project-section'>
      {loading ? (
        <Loader />
      ) : (
        <div className='container-fluid'>
          <div className='project_list_one'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                  <div className='base-header base_header_left'>
                    <h3>
                      {' '}
                      Special {type === 'farm' ? 'Farm' : 'Event'} Gallery{' '}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='project_slider_one'>
              <Slider {...settings}>{ImageGalleryDataList}</Slider>
            </div>
            <div className='project_btn text-center'>
              <Link
                to={type === 'farm' ? '/gallery/landscape' : '/gallery/landscape'}
                className='more-link'
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryContent;
