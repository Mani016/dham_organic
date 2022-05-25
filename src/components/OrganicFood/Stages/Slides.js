import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

class Slides extends Component {
  render() {
    let slideImages = [
      {
        img: 'stage1.webp',
      },
      {
        img: 'stage2.webp',
      },
      {
        img: 'stage3.webp',
      },
      {
        img: 'stage4.webp',
      },
      {
        img: 'stage5.webp',
      },
      {
        img: 'stage6.webp',
      },
      {
        img: 'stage7.webp',
      },
      {
        img: 'stage8.webp',
      },
    ];

    const properties = {
      slidesPerView: 1,
      loop: true,
      speed: 500,
      watchSlidesVisibility: true,
      effect: 'slide',
      autoplay: {
        delay: 5000,
      },
    };

    let ImageGalleryDataList = slideImages.map((val, i) => {
      return (
        <div
          className='single_slider slide_bg_1 single_slider_about'
          style={{ backgroundImage: `url(/assets/images/dhaam_images/${val.img})` }}
          key={i}
        >
          <div className='slider_item_tb'>
            <div className='slider_item_tbcell'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6 col-sm-12'>
                    <div className='slider_btn animated fadeInDown'>
                      {/* <Link to="contact" className="slider_btn_one more-link ">Contact Us</Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='slides_wrapper'>
        <div className='slider_home'>
          <Swiper {...properties}>{ImageGalleryDataList}</Swiper>
        </div>
      </div>
    );
  }
}

export default Slides;
