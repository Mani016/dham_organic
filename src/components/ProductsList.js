import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { agent } from '';
import agent from "../agent";
import Loader from "./Loader";

const ProductsList = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	function getCategories() {
		setLoading(true);
		const payload = {
			page: 1,
			limit: 4,
			status: true,
		};
		agent.Category.get(payload)
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
		getCategories();
	}, []);

	const productMap = data.map((valu, i) => {
		return (
			<div className="col-md-3 col-sm-12" key={i}>
				<div className="product_wrp">
					<Link to={`category/${valu._id}`}>
						<div className="product_img">
							<img src={valu.image.path} alt="product" />
						</div>
						<div className="product_info">
							<h4>{valu.name}</h4>
							<span className="product_price">{valu.description}</span>
						</div>
						<div className="project_view"></div>
					</Link>

					{/* <div className="project_view">
						<Link to="#/">
							<i className="icon-glyph-13"></i>
						</Link>
						<Link to="#/" className="project-link">
							<i className="icon-glyph-52"></i>
						</Link>
					</div> */}
				</div>
			</div>
		);
	});

	return (
		<section className="product-section">
			<div className="container">
				<div className="base-header">
					<small> Our Featured Categories</small>
					<h3> Organic Categories</h3>
				</div>
				{loading ? <Loader /> : <div className="row">{productMap}</div>}
			</div>
		</section>
	);
};

export default ProductsList;
