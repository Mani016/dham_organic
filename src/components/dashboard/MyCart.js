import React from "react";
import DashboardWrapper from "./DashboardWrapper";

const MyCart = () => {
	return (
		<DashboardWrapper
			topBtnTxt="Go to Profile"
			btnAction={() => (window.location = "/dashboard/my-profile")}
		>
			<div className="info_box">
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
											<th className="text-center">Product</th>
											<th className="text-center">Products name</th>
											<th className="text-center">Price</th>
											<th className="text-center">Qty</th>
											<th className="text-center">total</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="prod">
												<a href="#/">
													<img
														src="assets/images/product_1.png"
														alt="product"
													/>
												</a>
											</td>
											<td className="ptitle">
												<a href="#/">Samsung Mobile</a>
											</td>
											<td className="unit">
												<span>$160.00</span>
											</td>
											<td className="qty">
												<input type="number" placeholder="1" />
											</td>
											<td className="unit">
												<span>$160.00</span>
											</td>
											<td>
												<a href="#/">
													<i className="fa fa-trash"></i>
												</a>
											</td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td className="prod">
												<a href="#/">
													<img
														src="assets/images/product_2.png"
														alt="product"
													/>
												</a>
											</td>
											<td className="ptitle">
												<a href="#/"> Samsung Laptop</a>
											</td>
											<td className="unit">
												<span>$178.00</span>
											</td>
											<td className="qty">
												<input type="number" placeholder="1" />
											</td>
											<td className="unit">
												<span>$457.00</span>
											</td>
											<td>
												<a href="#/">
													<i className="fa fa-trash"></i>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="shop_cart_bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-sm-12">
								<div className="grand-total-area">
									<h4>Cart Totals</h4>
									<p className="sub-total">
										Subtotal<span className="amt"> $230.00</span>
									</p>
									<p className="delivery">
										delivery<span className="amt"> $10.00</span>
									</p>
									<p className="discount">
										discount<span className="amt"> $20.00</span>
									</p>
									<p className="grand-total">
										total <span className="amt">$200.00</span>
									</p>
									<a className="pro-checkout" href="#/">
										Proceed To Checkout
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DashboardWrapper>
	);
};

export default MyCart;
