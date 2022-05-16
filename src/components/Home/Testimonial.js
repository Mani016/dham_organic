import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { HANDLE_ERROR } from '../../Utils/utils';
import agent from '../../agent';
import { API_STATUS } from '../../constant';
import Loader from '../reusables/Loader';

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  function getTestimonials() {
    setLoading(true);
    const payload = {
      status: true,
    };
    agent.Testimonial.get(payload)
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
      getTestimonials();
    }
    return () => {
      isActive = false;
    };
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let ImageTestiDataList = data.map((val, i) => {
    return (
      <div className='item' key={`val_${i}`}>
        <div className='testi_wrp'>
          <img src={val.image.path} alt='' />
          <div>
            <div className='testi_info'>
              <p>{val.msg}</p>
            </div>
            <div className='testi_img'>
              <h4>
                {val.name}
                <span>{val.designation}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='container'>
        <div className='base-header'>
          <small>Client Satisfait </small>
          <h3>What Consumers Say </h3>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className='row'>
            <div className='col-sm-12'>
              <Slider {...settings}>{ImageTestiDataList}</Slider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
