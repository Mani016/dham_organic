import React, {Component} from 'react';
import {Link} from 'react-router-dom';   
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'

class Slides extends Component{

    render(){

        let slideImages = [
            {
                img:'slider1.webp',
                smallTitle: 'Know Your Farmer, Know Your Food',
                title:"A huge variety fruits, vegetables, pickles, flour products, whole grain products, spices & hair/massage oil  .",
            },
            {
                img:'slider2.webp',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"A huge variety fruits, vegetables, pickles, flour products, whole grain products, spices & hair/massage oil  .",
            },
			{
                img:'slider3.webp',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"A huge variety fruits, vegetables, pickles, flour products, whole grain products, spices & hair/massage oil  .",
            },
			{
                img:'slider7.jpeg',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"A huge variety fruits, vegetables, pickles, flour products, whole grain products, spices & hair/massage oil  .",
				description:"Our Mission is to be a faithful brand which provides genuine organic products for day-to-day requirements. We serve a wide variety of essentials ranging from food products like flour, daliya to fruits and hair oil. We want to inspire people resurge and promote the tradition of food and wellness. ",
            },
			{
                img:'slider8.jpeg',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"A huge variety fruits, vegetables, pickles, flour products, whole grain products, spices & hair/massage oil  .",
            },
			{
                img:'slider8.jpg',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"A huge variety fruits, vegetables, pickles, flour products, whole grain products, spices & hair/massage oil  .",
            },
            {
                img:'slider9.jpg',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"A huge variety fruits, vegetables, pickles, flour products, whole grain products, spices & hair/massage oil  .",
				description:"As quas equidem noluisse et, ex pro semper fierent oporteat. Te epic urei ullam corper usu, eos et voluptaria rationibus. Usu cu eligendi ad ipisci sed  altera dae reformidans ea, inermis ration ibus necessitatibus eu eum.",
            },
            {
                img:'slider11.jpg',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"A huge variety fruits, vegetables, pickles, flour products, whole grain products, spices & hair/massage oil  .",
            },
            {
                img:'slider12.jpg',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"A huge variety fruits, vegetables, pickles, flour products, whole grain products, spices & hair/massage oil  .",
            },
            {
                img:'slider14.jpg',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"A huge variety fruits, vegetables, pickles, flour products, whole grain products, spices & hair/massage oil  .",
            },
        ];

		const properties = {
			slidesPerView : 1,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
			effect: 'slide',
            
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	type: 'bullets',
			// 	clickable: true
			// },
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
						              <h1>{val.title}</h1>
						              <div className="slider_btn animated fadeInDown">
                                        <Link to="/categories" className="slider_btn_one more-link ">Our Categories</Link>
                                      </div>
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


