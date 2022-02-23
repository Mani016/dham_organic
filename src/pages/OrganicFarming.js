import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>FuodBorne | Organic Farming</title>
				<meta name="description" content="Organic Food React JS Template." />
			</MetaTags>
			<LayoutOne>
				<div className="about-page">
					{/*====================  breadcrumb area ====================*/}

					<Breadcrumb title="Organic Farming" />

					{/*====================  End of breadcrumb area  ====================*/}

					{/* Organic Farming Content */}
					<div className="organic_farming_content">
						<div className="container ">
							<div className="row">
								<div className="col-sm-12">
									<h4>Lorem, ipsum.</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
										itaque sed nulla fugiat? Itaque vitae, sapiente repudiandae
										doloribus officia architecto illo dolor, aliquid nesciunt
										nobis sit non quibusdam distinctio quia recusandae aut rerum
										sequi sint quasi ad iusto illum, alias exercitationem.
										Debitis nisi in eaque suscipit aliquam! Facilis commodi
										veritatis assumenda officia voluptates soluta eaque vero
										totam modi doloribus reprehenderit laboriosam consequatur
										harum deleniti autem quas quaerat eum ducimus atque, rerum
										minus? Nemo totam voluptas dolorum voluptate corporis
										expedita sed consequuntur exercitationem odit ipsam!
										Repellendus voluptatibus facilis in ab quia recusandae error
										quos earum, impedit debitis soluta, alias corporis odio?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
										itaque sed nulla fugiat? Itaque vitae, sapiente repudiandae
										doloribus officia architecto illo dolor, aliquid nesciunt
										nobis sit non quibusdam distinctio quia recusandae aut rerum
										sequi sint quasi ad iusto illum, alias exercitationem.
										Debitis nisi in eaque suscipit aliquam! Facilis commodi
										veritatis assumenda officia voluptates soluta eaque vero
										totam modi doloribus reprehenderit laboriosam consequatur
										harum deleniti autem quas quaerat eum ducimus atque, rerum
										minus? Nemo totam voluptas dolorum voluptate corporis
										expedita sed consequuntur exercitationem odit ipsam!
										Repellendus voluptatibus facilis in ab quia recusandae error
										quos earum, impedit debitis soluta, alias corporis odio?
									</p>
									<h4>Lorem, ipsum.</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
										itaque sed nulla fugiat? Itaque vitae, sapiente repudiandae
										doloribus officia architecto illo dolor, aliquid nesciunt
										nobis sit non quibusdam distinctio quia recusandae aut rerum
										sequi sint quasi ad iusto illum, alias exercitationem.
										Debitis nisi in eaque suscipit aliquam! Facilis commodi
										veritatis assumenda officia voluptates soluta eaque vero
										totam modi doloribus reprehenderit laboriosam consequatur
										harum deleniti autem quas quaerat eum ducimus atque, rerum
										minus? Nemo totam voluptas dolorum voluptate corporis
										expedita sed consequuntur exercitationem odit ipsam!
										Repellendus voluptatibus facilis in ab quia recusandae error
										quos earum, impedit debitis soluta, alias corporis odio?
									</p>

									<img src="http://jvesri.org/images/activites.jpg" alt="" />

									<ul>
										<li>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Voluptatibus, consequatur!
											</p>
										</li>
										<li>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Voluptatibus, consequatur!
											</p>
										</li>
										<li>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Voluptatibus, consequatur!
											</p>
										</li>
									</ul>
									<h4>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</h4>
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Dolor dolores debitis numquam nemo ratione odit eos omnis
										odio aliquid cumque repellendus, esse aut voluptate,
										voluptas quidem obcaecati! Laudantium ex obcaecati
										repudiandae veritatis deleniti repellat, accusantium
										consequuntur quae praesentium aliquam quibusdam, autem
										dolorum inventore tempora porro alias fugiat voluptas,
										itaque magni?
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</LayoutOne>
		</Fragment>
	);
};

export default About;
