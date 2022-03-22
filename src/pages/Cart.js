import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import agent from "../agent";
import AppContext from "../Context";
import Alert from "../Utils/Alert"
const Cart = () => {
	const { userData } = React.useContext(AppContext);

	const [itemsInCart, setItemsInCart] = useState([]);
	function GetCart() {
		agent.Cart.get()
			.then((res) => {
				setItemsInCart(res.data);
			})
			.catch((err) => console.error(err));
	}
    function ProceedToCkeckout(){
        console.log(userData);
        
        if(!userData.address.length ){
            Alert.showToastAlert('warning', 'Complete your address in the profile section.');
        }
        else{
            agent.Cart.checkout()
            .then((res)=>{
               
            })
        }
    }
	useEffect(() => {
		GetCart();
	}, []);
	return (
		<Fragment>
			<MetaTags>
				<title>Dhaam Organic| About</title>
				<meta name="description" content="Organic Food React JS Template." />
			</MetaTags>
			<LayoutOne>
				<div className="cart-page">
					{/*====================  breadcrumb area ====================*/}

					<Breadcrumb title="Shopping Cart" />

					{/*====================  End of breadcrumb area  ====================*/}

					{/*====================  Cart area ====================*/}
					<div className="shop_cart">
						<div className="container">
							<div className="shop_cart_title">
								<h2>Shopping Cart</h2>
							</div>
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div className="table-responsive text-center">
										<table className="table table-bordered">
											<thead>
												<tr className="shop_cart_tr">
													<th className="text-center">Product Image</th>
													<th className="text-center">Product name</th>
													<th className="text-center">Price</th>
													<th className="text-center">Discount</th>
													<th className="text-center">Final Price</th>
													<th className="text-center">Qty</th>
													<th className="text-center">total</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												{itemsInCart?.cartDetails?.map((product , index) => (
													<tr key={`product_${index}`}>
														<td className="prod">
                                                            <img
                                                                src={product.images}
                                                                alt="product"
                                                            />
														</td>
														<td className="ptitle">{product.name}
														</td>
														<td className="unit">
															<span>₹ {product.price}</span>
														</td>
                                                        <td className="unit">
															<span> {product.discount}%</span>
														</td>
                                                        <td className="unit">
															<span>₹ {product.finalPrice}</span>
														</td>
														<td className="qty">
															<input type="number" placeholder="1" value={product.quantity} />
														</td>
														<td className="unit">
															<span>₹ {product.subTotal }</span>
														</td>
														<td>
															<a href="#/">
																<i className="fa fa-trash"></i>
															</a>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="shop_cart_bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-sm-12">
									<div className="grand-total-area">
										<h4>Cart Totals</h4>
										<p className="sub-total">
											Total<span className="amt"> ₹ {itemsInCart.subTotal}</span>
										</p>
                                        <p className="delivery">
											delivery<span className="amt"> ₹ 10</span>
										</p>
										{/* <p className="delivery">
											delivery<span className="amt"> $10.00</span>
										</p>
										<p className="discount">
											discount<span className="amt"> $20.00</span>
										</p> */}
										{/* <p className="grand-total">
											total <span className="amt">$200.00</span>
										</p> */}
										<a className="pro-checkout" href="#" onClick={()=>ProceedToCkeckout()}>
											Proceed To Checkout
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*====================  End of Cart  Section    ====================*/}
				</div>
			</LayoutOne>
		</Fragment>
	);
};

export default Cart;
