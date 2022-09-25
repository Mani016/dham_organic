import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { HANDLE_ERROR } from '../../Utils/utils';
import agent from '../../agent';
import { API_STATUS } from '../../constant';
import Loader from '../reusables/Loader';
import './testimonials.css'
const Testimonials = () => {
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
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,

  };
  const thumbSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '20px',
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
    ],
  };
  const slider2Settings = {
    ...thumbSliderSettings,
    afterChange: (current) => setActiveIndex(current),
  };
  let ImageeTestiDataList = data.map((val, i) => {
    return (
      <div className='item' key={`val_${i}`}>
        <div className='testi_wrp'>
          <img src={val.image.path} alt='' />
          <div style={{flex:1}}>
            <div className='testi_info'>
              <p>{val.msg}</p>
            </div>
            <div className='testi_img'>
              <h4>
                {val.name}
                <span>{val.locality}</span>
                <span>{val.designation}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='testi mb-0 mt-2'>
      <div className='container'>
        <div className='base-header'>
          <h3>Dhaam Patrons</h3>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className='row'>
            <div className='col-md-12 col-sm-12'>
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                {...sliderSettings}
              >
                {ImageeTestiDataList}
              </Slider>
              <Slider
                {...slider2Settings}
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                className='thumbSliderWrapper'
              >
                {data.map((item, index) => {
                  return (
                    <div
                      className={`tThumbSlider ${
                        activeIndex === index? ' active' : ''
                      }`}
                      key={item}
                    >
                      <img src={item.image.path} alt={item.name} />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
