import React, { Component, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import agent from "../agent";
import Loader from "../components/Loader";
const Category = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [page, setpage] = useState(1);
	function getCategories() {
		setLoading(true);
		const payload = {
			page: page,
			limit: 10,
			status: true,
		};
		agent.Category.get(payload)
			.then((res) => {
				if (res.success) {
					setData(res.data);
					setLoading(false);
				} else {
					setData({});
					setLoading(false);
				}
			})
			.catch((err) => {
				setData({});
				setLoading(false);
			});
	}
	useEffect(() => {
		getCategories();
	}, []);

	console.log(data.data);
	const CategoryMap = ({ item = [] }) => {
		return (
			<>
				{item.map((valu, i) => (
					<div className="col-md-3 col-sm-12" key={i}>
						<Link to={`category/${valu._id}`}>
							<div className="product_wrp">
								<div className="product_img">
									<img src={valu.image.path} alt="product" />
								</div>
								<div className="product_info">
									<h4>{valu.name}</h4>
									<span className="product_price">{valu.description}</span>
								</div>

								<div className="project_view"></div>
							</div>
						</Link>
					</div>
				))}
			</>
		);
	};

	return (
		<Fragment>
			<MetaTags>
				<title>FuodBorne | Our Categories</title>
				<meta name="description" content="Organic Food React JS Template." />
			</MetaTags>
			<LayoutOne>
				<div className="shop-page">
					{/*====================  breadcrumb area ====================*/}

					<Breadcrumb title="Our Categories" />

					{/*====================  End of breadcrumb area  ====================*/}

					{/*==================== Team Mamber area  ====================*/}

					<section className="product-section">
						<div className="container">
							{loading ? (
								<Loader />
							) : (
								<>
									<div className="row">
										<div className="col-sm-12 product_orderby">
											<p className="product_count">{`Showing ${data.page}– ${data.total_pages} of ${data.total} results`}</p>
										</div>
									</div>
									<div className="row">
										<CategoryMap item={data.data || []} />

										<div className="prodt_pagination">
											<ul>
												<li>
													<span
														onClick={() => setpage(page - 1)}
														className={page <= 1 ? "disable" : ""}
													>
														{"< "}
													</span>
												</li>
												&nbsp; &nbsp; &nbsp;
												<li>
													<span
														onClick={() => setpage(page + 1)}
														className={
															page === data.total_pages ? "disable" : ""
														}
													>
														{">"}
													</span>
												</li>
											</ul>
										</div>
									</div>
								</>
							)}
						</div>
					</section>
					{/*====================  End Team Mamber area  ====================*/}
				</div>
			</LayoutOne>
		</Fragment>
	);
};

export default Category;
