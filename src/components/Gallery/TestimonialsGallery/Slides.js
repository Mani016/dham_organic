import React, { Component } from 'react';
import Slider from 'react-slick/lib/slider';
import 'swiper/css/swiper.css';

class Slides extends Component {
  render() {
    const properties = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      effect: 'slide',
      arrows: false,
      dots: true,
      autoplay: {
        delay: 5000,
      },
    };

    return (
      <div className='slides_wrapper'>
        <div className='slider_home'>
          <Slider {...properties}>
            {[...Array(8)].map((val,i) => (
              <img
              key={i}
                src={`/assets/images/testimonials/${`${i+1}.webp`}`}
                alt='testimonials'
              />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Slides;
