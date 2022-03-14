import React, { Component, Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import agent from "../agent";
import Loader from "../components/Loader";
import Alert from "../Utils/Alert";
const SingleProduct = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [qty , setQyt]= useState(0);
	const params = useParams();
	const payload = {
		clientId: '622e34c983c95dfc2738e789',
		productId: params.id,
	};
	function getProductById() {
		setLoading(true);
		agent.Product.getById(params.id)
			.then((res) => {
				console.log("dkdj", res);
				if (res.success) {
					setData(res.data);
					setLoading(false);
				} else {
					setData([]);
					setLoading(false);
				}
			})
			.catch((err) => {
				setData([]);
				setLoading(false);
			});
	}
	function addToCart() {
		agent.AddToCart.add(payload).then((res) => {
			console.log(res);
			Alert.showToastAlert("success", "Product Added Successfully.");
			setQyt(res.data.quantity)
		}).catch ((err)=>{
			console.log(err);
		})
	}
	function subtractFromCart(){
		agent.AddToCart.remove(payload).then((res) => {
			console.log(res);
			Alert.showToastAlert("warning", "Product Removed Successfully.");
			setQyt(res.data.quantity)
		}).catch ((err)=>{
			console.log(err);
		})
	}
	useEffect(() => {
		getProductById();
	}, []);
	console.log(data);

	const settings = {
		customPaging: function (i) {
			return <img src={`assets/images/product0${i + 1}.jpg`} alt="" />;
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	/* Shop Tab menu */
	let serviceTabMenuData = [
		{ tabMenuName: "product description" },
		{ tabMenuName: "Additional Information" },
		{ tabMenuName: "Reviews (1)" },
	];
	return (
		<Fragment>
			<MetaTags>
				<title>FuodBorne | Product</title>
				<meta name="description" content="Organic Food React JS Template." />
			</MetaTags>
			<LayoutOne>
				<div className="single-shop-page">
					{/*====================  breadcrumb area ====================*/}

					<Breadcrumb title="Our Products" />

					{/*====================  End of breadcrumb area  ====================*/}

					<div className="shop-product-area">
						<div className="container">
							{loading ? (
								<Loader />
							) : (
								<div className="row">
									<div className="col-md-6 col-sm-12">
										<div className="shop-products">
											<div className="single-item-detail">
												<div className="product-thumbnail">
													{/* Image Gallery */}
													<Slider {...settings}>
														{data.images?.map((slide, j) => (
															<div key={`slide_${j}`}>
																<img src={slide.path} alt="" />
															</div>
														))}
													</Slider>
												</div>
											</div>
										</div>
									</div>

									<div className="col-md-6 col-sm-12">
										<div className="allproduct-info">
											<div className="tittle_product">{data.name}</div>
											<div className="allproduct-price-area">
												{/* Product Price  */}
												<span className="price">
													<span className="n-amt">
														{data.finalPrice}/{data?.unit?.name}
													</span>
													<span>
														<del>
															Rs. {data.price}/{data?.unit?.name}
														</del>
													</span>
													&nbsp; &nbsp;
													{data.discount && <span>{data.discount}% off;</span>}
												</span>
											</div>
											{/* Product Desctiption  */}
											<div className="p-content">
												<p className="content">
													Availability:<span> {data.status} </span>
												</p>
												<p className="d-content">{data.description}</p>
											</div>
											<div className="cart-quantity">
												<div className="cart-plus-minus">
													<input
														className="cart-plus-minus-box"
														type="text"
														name="qtybutton"
														placeholder="1"
														readOnly
														value={qty}
														
													/>
													<div className= {qty ===0 ?"qtybutton  disable" : "qtybutton" }  onClick={()=>subtractFromCart()}>-</div>
													<div className="inc qtybutton" onClick={()=> addToCart()}>+</div>
												</div>
											</div>
											<div className="allchoices">
												<div className="choice-icon">
													<ul>
														<li>
															<span
																to="single-shop"
																className="text-uppercase adtocart"
																onClick={() => addToCart()}
															>
																add to cart
															</span>
														</li>
													</ul>
												</div>
											</div>
											<div className="categories-area">
												<p className="category">
													<span>Category :</span>
												</p>
												<ul>
													<li>{data?.category?.name}</li>
												</ul>
											</div>

											{/* <div className="share-area">
												<ul>
													<li>
														<Link to="single-shop">
															<i className="fa fa-instagram"></i>
														</Link>
													</li>
													<li>
														<Link to="single-shop">
															<i className="fa fa-pinterest"></i>
														</Link>
													</li>
													<li>
														<Link to="single-shop">
															<i className="fa fa-linkedin"></i>
														</Link>
													</li>
													<li>
														<Link to="single-shop">
															<i className="fa fa-dribbble"></i>
														</Link>
													</li>
												</ul>
											</div> */}
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
					{/*==================== End :  Section ====================*/}
				</div>
			</LayoutOne>
		</Fragment>
	);
};

export default SingleProduct;
