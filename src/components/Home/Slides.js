import React, {Component} from 'react';
import {Link} from 'react-router-dom';   
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'

class Slides extends Component{

    render(){

        let slideImages = [
            {
                img:'dhaam_banner.webp',
                smallTitle: 'Know Your Farmer, Know Your Food',
                title:"Organic produce available from our farms at your doorstep. \n" +
                    "Our aim is to perform sustainable agriculture, producing high-quality products by the use of processes that do not harm the environment, nor human, plant or animal health and welfare.",
            },
            {
                img:'slider1.webp',
                smallTitle: 'Know Your Farmer, Know Your Food',
                title:"Organic produce available from our farms at your doorstep. \n" +
                    "Our aim is to perform sustainable agriculture, producing high-quality products by the use of processes that do not harm the environment, nor human, plant or animal health and welfare.",
            },
            {
                img:'slider2.webp',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"Organic produce available from our farms at your doorstep. \n" +
                    "Our aim is to perform sustainable agriculture, producing high-quality products by the use of processes that do not harm the environment, nor human, plant or animal health and welfare.",
            },
			{
                img:'slider3.webp',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"Organic produce available from our farms at your doorstep. \n" +
                    "Our aim is to perform sustainable agriculture, producing high-quality products by the use of processes that do not harm the environment, nor human, plant or animal health and welfare.",
            },
			{
                img:'slider7.webp',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"Organic produce available from our farms at your doorstep. \n" +
                    "Our aim is to perform sustainable agriculture, producing high-quality products by the use of processes that do not harm the environment, nor human, plant or animal health and welfare.",
				description:"Our Mission is to be a faithful brand which provides genuine organic products for day-to-day requirements. We serve a wide variety of essentials ranging from food products like flour, daliya to fruits and hair oil. We want to inspire people resurge and promote the tradition of food and wellness. ",
            },
			{
                img:'slider8.webp',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"Organic produce available from our farms at your doorstep. \n" +
                    "Our aim is to perform sustainable agriculture, producing high-quality products by the use of processes that do not harm the environment, nor human, plant or animal health and welfare.",
            },
			{
                img:'slider8.webp',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"Organic produce available from our farms at your doorstep. \n" +
                    "Our aim is to perform sustainable agriculture, producing high-quality products by the use of processes that do not harm the environment, nor human, plant or animal health and welfare.",
            },
            {
                img:'slider9.webp',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"Organic produce available from our farms at your doorstep. \n" +
                    "Our aim is to perform sustainable agriculture, producing high-quality products by the use of processes that do not harm the environment, nor human, plant or animal health and welfare.",
				description:"As quas equidem noluisse et, ex pro semper fierent oporteat. Te epic urei ullam corper usu, eos et voluptaria rationibus. Usu cu eligendi ad ipisci sed  altera dae reformidans ea, inermis ration ibus necessitatibus eu eum.",
            },
            {
                img:'slider11.webp',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"Organic produce available from our farms at your doorstep. \n" +
                    "Our aim is to perform sustainable agriculture, producing high-quality products by the use of processes that do not harm the environment, nor human, plant or animal health and welfare.",
            },
            {
                img:'slider12.webp',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"Organic produce available from our farms at your doorstep. \n" +
                    "Our aim is to perform sustainable agriculture, producing high-quality products by the use of processes that do not harm the environment, nor human, plant or animal health and welfare.",
            },
            {
                img:'slider14.webp',
                smallTitle:"Know Your Farmer, Know Your Food",
                title:"Organic produce available from our farms at your doorstep. \n" +
                    "Our aim is to perform sustainable agriculture, producing high-quality products by the use of processes that do not harm the environment, nor human, plant or animal health and welfare.",
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
						              <div className="slider_btn animated fadeInDown">
                                        <Link to="/our-products" className="slider_btn_one more-link ">Our Products</Link>
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


