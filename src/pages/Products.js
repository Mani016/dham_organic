import React, { Component, Fragment, useState , useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import agent from "../agent"
import Loader from "../components/Loader";
import NoData from "../components/NoData";
const Product = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const params = useParams();
	function getProducts() {
		setLoading(true);
		const payload = {
			status: "IN-STOCK",
			categoryId: params.id,
			page:1,
			limit:10
		};
		agent.Product
			.get(payload)
			.then((res) => {
				if (res.success) {
					setData(res.data.data);
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
	useEffect(() => {
		getProducts();
	}, []);

	const productMap = data.map((valu, i) => {
		return (
			<div className="col-md-3 col-sm-12" key={i}>
				<Link to={`/product/${valu._id}`}>
					<div className="product_wrp">
						<div className="product_img">
							<img src={valu.images[0].path} alt="product" />
						</div>
						<div className="product_info">
							<h4>{valu.name}</h4>
							<div className="price">
								<span className="product_price cut_price">Price: {valu.price}</span>
								<span className="product_price">Offer Price: {valu.finalPrice}</span>
							</div>
						</div>

						<div className="project_view">
							
						</div>
					</div>
				</Link>
			</div>
		);
	});

	return (
		<Fragment>
			<MetaTags>
				<title>FuodBorne | Our Products</title>
				<meta name="description" content="Organic Food React JS Template." />
			</MetaTags>
			<LayoutOne>
				<div className="shop-page">
					{/*====================  breadcrumb area ====================*/}

					<Breadcrumb title="Our Products" />

					{/*====================  End of breadcrumb area  ====================*/}

					{/*==================== Team Mamber area  ====================*/}

					<section className="product-section">
						<div className="container">
						{ loading ? <Loader/> : 
								// <NoData/>
							<div className="row">
								
							 {productMap}

							</div>
								}

						</div>
					</section>
					{/*====================  End Team Mamber area  ====================*/}
				</div>
			</LayoutOne>
		</Fragment>
	);
};

export default Product;
