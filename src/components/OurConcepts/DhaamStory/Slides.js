import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

class Slides extends Component {
  render() {
    let slideImages = [
      {
        img: 'slider12.webp',
      },
      {
        img: 'slider11.webp',
      },
      {
        img: 'slider13.webp',
      },
      {
        img: 'slider14.webp',
      },
      {
        img: 'slider15.webp',
      },
      {
        img: 'slider16.webp',
      },
    ];

    const properties = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      effect: 'slide',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.st-swiper-button-next',
        prevEl: '.st-swiper-button-prev',
      },
      renderPrevButton: () => (
        <div className='st-swiper-button-prev st-swiper-button-nav d-none d-xl-block'>
          <i className='icon-glyph-205' />
        </div>
      ),
      renderNextButton: () => (
        <div className='st-swiper-button-next st-swiper-button-nav d-none d-xl-block'>
          <i className='icon-glyph-204' />
        </div>
      ),
      autoplay: {
        delay: 5000,
      },
    };

    let ImageGalleryDataList = slideImages.map((val, i) => {
      return (
        <div
          className='single_slider slide_bg_1'
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
