/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Slider from "react-slick";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import agent from "../agent";
import Loader from "../components/Loader";
import Alert from "../Utils/Alert";
import { API_STATUS } from "../constant";
import { getItemFromSessionStore } from "../Utils/utils";
import AppContext from "../Context";
const ProductDetails = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const params = useParams();
	const history = useHistory();
	const payload = {
		productId: params.id,
	};
	const { itemsInCart, setItemsInCart } = React.useContext(AppContext);
	const [quantity, setQuantity] = useState(0);
	function getItemQuantity() {
		console.log(itemsInCart);
		// GetCart().then((res) => {
		//   setQuantity(res.data.length);
		// }).catch((err) => console.error(err))
	}
	useEffect(() => {
		getItemQuantity();
	}, []);
	function checkUserLogin() {
		if (getItemFromSessionStore("token")) {
			return true;
		}
		return false;
	}
	function getProductById() {
		setLoading(true);
		agent.Product.getById(params.id)
			.then((res) => {
				if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
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
		if (checkUserLogin()) {
			agent.Cart.add(payload)
				.then((res) => {
					if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
						Alert.showToastAlert("success", "Product Added Successfully.");
						GetCart();
					} else {
						Alert.showToastAlert("error", res.message);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			Alert.showToastAlert("error", "Login Required");
		}
	}
	function subtractFromCart() {
		if (checkUserLogin()) {
			agent.Cart.remove(payload)
				.then((res) => {
					if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
						Alert.showToastAlert("success", "Product Removed Successfully.");
						GetCart();
					} else {
						Alert.showToastAlert("error", res.message);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			Alert.showToastAlert("error", "Login Required");
		}
	}
	console.log(quantity);

	function GetCart() {
		agent.Cart.get()
			.then((res) => {
				// setData(res.data);
				// setItems(res.data.items);
				setItemsInCart(res.data.length);
				setQuantity();
			})
			.catch((err) => console.error(err));
	}
	useEffect(() => {
		getProductById();
	}, []);

	const settings = {
		// customPaging: function (i) {
		//   return <img src={`assets/images/product0${i + 1}.jpg`} alt='' />;
		// },
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		arrow: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Fragment>
			<MetaTags>
				<title>Dhaam Organic| Product</title>
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
																<div className="imgb">
																	<img src={slide.path} alt="" />
																</div>
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
													{data.discount > 0 && (
														<span>
															<del>
																Rs. {data.price}/{data?.unit?.name}
															</del>
														</span>
													)}
													&nbsp; &nbsp;
													{data.discount > 0 && (
														<span>{data.discount}% off;</span>
													)}
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
														readOnly
														value={quantity}
													/>
													<div
														className={
															quantity === 0
																? "qtybutton  disable"
																: "qtybutton"
														}
														onClick={() => subtractFromCart()}
													>
														<span>-</span>
													</div>
													<div
														className="inc qtybutton"
														onClick={() => addToCart()}
													>
														<span>+</span>
													</div>
												</div>
											</div>
											<div className="allchoices">
												<div className="choice-icon">
													<ul>
														<li>
															<span
																to="single-shop"
																className="text-uppercase adtocart"
																onClick={() => history.push("/cart")}
															>
																go to cart
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

export default ProductDetails;
