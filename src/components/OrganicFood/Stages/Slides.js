import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
class Slides extends Component{

  render(){

    let slideImages = [
      {
        img:'step-1.png',
        smallTitle: 'STEP 1:',
        title:"Seed Selection is done to ensure better yield and proper nutrients in the plants.",
      },
      {
        img:'step-2.png',
        smallTitle: 'STEP 2:',
        title:"Ploughing of field is done before sowing the seed so that there are optimum nutrients and water available to the seed and the soil is well aerated for germination of the seed.",
      },
      {
        img:'step-3.png',
        smallTitle: 'STEP 3:',
        title:"Farmland is well irrigated by the water sources available all around us. We irrigate the fields by the surface water so that ground water is preserved for future use.",
      },
      {
        img:'step-4.png',
        smallTitle: 'STEP 4:',
        title:"Crop production with the use of alternative sources of nutrients such as crop rotation, residue management, organic manures and biological inputs.",
      },
      {
        img:'step-5.jpg',
        smallTitle: 'STEP 5:',
        title:"    Management of weeds and pests by better management practices, physical and cultural means and by biological control system is the main objective behind our approach.",
      },
      {
        img:'step-6.png',
        smallTitle: 'STEP 6:',
        title:"We also have Maintained live-stock in tandem with organic concept of farming for availability of manure and they are an integral part of the entire system.",
      },
      {
        img:'step-7.png',
        smallTitle: 'STEP 7:',
        title:"The variety that grows in bunches is harvested simply using hands and the one that has a vast spread is harvested by digging.",
      },
      {
        img:'step-8.png',
        smallTitle: 'STEP 8:',
        title:"After harvesting, the grains are stored by spraying them with biological liquid fumigants.",
      },
    ];


    const properties = {
      slidesPerView : 1,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      effect: 'slide',
      navigation: {
        nextEl: '.st-swiper-button-next',
        prevEl: '.st-swiper-button-prev'
      },
      renderPrevButton: () => (
          <div className="st-swiper-button-prev st-swiper-button-nav d-none d-xl-block"><i className="icon-glyph-205" /></div>
      ),
      renderNextButton: () => (
          <div className="st-swiper-button-next st-swiper-button-nav d-none d-xl-block"><i className="icon-glyph-204" /></div>
      ),
      autoplay: {
        delay: 5000,
      }
    }

    let ImageGalleryDataList = slideImages.map((val, i) => {
      return(
          <div className="single_slider slide_bg_1"  key={i}>
            <div className="slider_item_tb">
              <div className="slider_item_tbcell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <h5>{val.smallTitle}</h5>
                      <p className="fs-2">{val.title}</p>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0 col-sm-12 home_slides" >
                      <img src={`/assets/images/dhaam_images/${val.img}`} alt="slider" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    });

    return (
        <div className="slides_wrapper">
          <div className="slider_home">
            <Swiper {...properties}>
              {ImageGalleryDataList}
            </Swiper>
          </div>
        </div>
    );

  }
}

export default Slides;


