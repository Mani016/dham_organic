import React , {Component, Fragment } from 'react'; 
import {Link} from 'react-router-dom';  
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";

class SingleShop extends Component{

    render(){
		const settings = {
	      customPaging: function(i) {
	      return (	         
	        	<img src={`assets/images/product0${i + 1}.jpg`} alt=""/> 
	        );
	      },
	      dots: true,
	      dotsClass: "slick-dots slick-thumb",
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
	    };


        /* Shop Tab menu */
        let serviceTabMenuData = [
            {tabMenuName: 'product description'},
            {tabMenuName: 'Additional Information'},
            {tabMenuName: 'Reviews (1)'}, 
        ];

		/* Shop Tab Content */
        let serviceTabContentData = [
            {

            	contentDesc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.', 
        	},

            {
            	contentDesc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate ', 
        	},

            {
            	
            	reviewPhoto: "testimonial3.jpg",
            	name: "Adam Crist -",
				date: "Jan 14, 2019",
				star: "icofont-star", 
				reviewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            },
        ];

        let serviceTabMenuDatalist = serviceTabMenuData.map((val, i)=>{
            return(
                <Tab key={i}> 
					<span className="shop-nav-tabs">{val.tabMenuName}</span>
				</Tab>
            )
        });

        let serviceTabContentDatalist = serviceTabContentData.map((val, i)=>{
            return(
                <TabPanel key={i}>
                    <div className="shop-tab-content-wrapper">
                        <div className="shop-tab-content">
                         	<h3>{val.contentTitle}</h3>
                            <p>{val.contentDesc}</p>
							<div className="review_wrp">
	                        	<div className="review_pic" style={{ backgroundImage: `url(assets/images/${val.reviewPhoto})` }}></div>
	                        	<span>{val.name}<span className="revw_dt">{val.date}</span> 
	                        	<span className={`${val.star}`}> </span>
	                        	<span className={`${val.star}`}> </span>
	                        	<span className={`${val.star}`}> </span>
	                        	<span className={`${val.star}`}> </span>
	                        	<span className={`${val.star}`}> </span>
	                        	</span>
	                        	<p className="review_text">{val.reviewText}</p>
                           </div>
							
                        </div>
                    </div>
                </TabPanel>
            )
        });


    	return(
			<Fragment>
			<MetaTags>
			  <title>Dhaam Organic| Single Service</title>
			  <meta
				name="description"
				content="Organic Food React JS Template."
			  />
			</MetaTags>
			<LayoutOne>

           <div className="single-shop-page">
 
             	{/*====================  breadcrumb area ====================*/}

			 	<Breadcrumb title="Our Products" />
            
            	{/*====================  End of breadcrumb area  ====================*/} 

				
					<div className="shop-product-area">
				        <div className="container">
				            <div className="row">

								<div className="col-md-6 col-sm-12">
				                    <div className="shop-products">
				                        <div className="single-item-detail">
				                            <div className="product-thumbnail">
				                        	{/* Image Gallery */}
				  		                        <Slider {...settings}>
										          <div>
										            <img src="assets/images/product01.jpg" alt=""/>
										          </div>
										          <div>
										            <img src="assets/images/product02.jpg" alt=""/>
										          </div>
										          <div>
										            <img src="assets/images/product03.jpg" alt=""/>
										          </div>
										          <div>
										            <img src="assets/images/product04.jpg" alt=""/>
										          </div>
										        </Slider>
				                            </div>
				                        </div>
				                    </div>
				                </div>

								<div className="col-md-6 col-sm-12">
				                    <div className="allproduct-info">
				                        <div className="tittle_product">
				                            <Link to="single-shop">Our Organic Food</Link>
				                            <div className="next_prev">
				                                <Link to="single-shop" className="next"><span className="icon-glyph-205"></span></Link>
				                                <Link to="single-shop" className="prev"><span className="icon-glyph-204"></span></Link>
				                            </div>
				                        </div>
				                        <div className="allproduct-price-area">     
				                            <div className="star-rating rating2">
				                                <ul>
				                                    <li className="star yes"><i className="fa fa-star"></i></li>
				                                    <li className="star yes"><i className="fa fa-star"></i></li>
				                                    <li className="star yes"><i className="fa fa-star"></i></li>
				                                    <li className="star yes"><i className="fa fa-star"></i></li>
				                                    <li className="star no"><i className="fa fa-star"></i></li>
				                                    <li className="reviews"><Link to="single-shop">12 Reviews(s)</Link> </li>
				                                    <li> | </li>
				                                    <li className="add-reviews"><Link to="single-shop">Add Your Review</Link></li>
				                                </ul>
				                            </div>
				                        	{/* Product Price  */}
				                            <span className="price">
				                                <span className="n-amt">$170.00</span>
				                                <span><del>$190.00</del></span>
				                            </span>
				                        </div>
				                    	{/* Product Desctiption  */}
				                        <div className="p-content">
				                            <p className="content">
				                                Availability:<span> In stock </span>
				                            </p>
				                            <p className="d-content">
				                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
				                        </div>
				                        <div className="cart-quantity">
				                            <div className="cart-plus-minus">
				                                <input  className="cart-plus-minus-box" type="text" name="qtybutton" placeholder="1" />
				                            <div className="dec qtybutton"><span>-</span></div><div className="inc qtybutton"><span> + </span></div></div>
				                        </div>
				                        <div className="allchoices">
				                            <div className="choice-icon">
				                                <ul>
				                                    <li>
				                                        <Link to="single-shop" className="text-uppercase adtocart">add to cart</Link>
				                                    </li>
				                                    <li>
				                                        <Link to="single-shop"><span className="heart"><i className="icon-glyph-52"></i></span></Link>
				                                    </li>
				                                </ul>
				                            </div>
				                        </div>
				                        <div className="categories-area">
				                            <p className="category"><span>Categories :</span></p>
				                            <ul>
				                                <li><Link to="single-shop" className="">Cloth, </Link></li>
				                                <li><Link to="single-shop" className="">Bags, </Link></li>
				                                <li><Link to="single-shop" className="">T-shirt, </Link></li>
				                                <li><Link to="single-shop" className="">Jeans</Link></li>
				                                <li><Link to="single-shop" className="">Men</Link></li>
				                            </ul>
				                        </div>
				                        
				                        <div className="categories-area">
				                            <p className="category"><span>Tags :</span> </p>
				                             <ul>
				                                <li><Link to="single-shop" className="">Cloth, </Link></li>
				                                <li><Link to="single-shop" className="">Bags, </Link></li>
				                                <li><Link to="single-shop" className="">T-shirt </Link></li>
				                            </ul>
				                        </div>
				                        
				                        <div className="share-area">
				                            <ul>
				                                <li><Link to="single-shop"><i className="fa fa-instagram"></i></Link></li>
				                                <li><Link to="single-shop"><i className="fa fa-pinterest"></i></Link></li>
				                                <li><Link to="single-shop"><i className="fa fa-linkedin"></i></Link></li>
				                                <li><Link to="single-shop"><i className="fa fa-dribbble"></i></Link></li>
				                            </ul>
				                        </div>
				                    </div>
				                </div>

                   			</div>
                    	</div>
                	</div>
					<div className="cust-reviews-area">
                    	<div className="container">
							<div className="row">

		                        {/* Shop tab wrapper */}
		                        <div className="shop-tab-wrapper">
			                        <Tabs> 
		                                <div className="col-md-12">
		                                    <TabList> 
		                                        {serviceTabMenuDatalist}  
		                                    </TabList>
		                                </div>

		                                <div className="col-md-12"> 
		                               		 {serviceTabContentDatalist}
		                                </div> 
			                        </Tabs>
		                        </div>

                    		</div>
						</div>
					</div>
                {/*==================== End :  Section ====================*/}  

			</div>

          </LayoutOne>
        </Fragment>

        )
 
    }



}

export default SingleShop;


