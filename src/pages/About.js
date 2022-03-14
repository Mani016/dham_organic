import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import AboutContent from "../components/AboutContent";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>Dhaam Organic| About</title>
				<meta name="description" content="Organic Food React JS Template." />
			</MetaTags>
			<LayoutOne>
				<div className="about-page">
					{/*====================  breadcrumb area ====================*/}

					<Breadcrumb title="About Us" />

					{/*====================  End of breadcrumb area  ====================*/}

					{/*====================  About area ====================*/}

					<AboutContent />

					{/*==================== End:  About area ====================*/}

					{/* About Other Details */}
					<div className="container " style={{marginTop :"-80px" , marginBottom: "100px"}}>
						<div className="row">
							<div className="col-sm-12">
                                <h4>Lorem, ipsum.</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
									itaque sed nulla fugiat? Itaque vitae, sapiente repudiandae
									doloribus officia architecto illo dolor, aliquid nesciunt
									nobis sit non quibusdam distinctio quia recusandae aut rerum
									sequi sint quasi ad iusto illum, alias exercitationem. Debitis
									nisi in eaque suscipit aliquam! Facilis commodi veritatis
									assumenda officia voluptates soluta eaque vero totam modi
									doloribus reprehenderit laboriosam consequatur harum deleniti
									autem quas quaerat eum ducimus atque, rerum minus? Nemo totam
									voluptas dolorum voluptate corporis expedita sed consequuntur
									exercitationem odit ipsam! Repellendus voluptatibus facilis in
									ab quia recusandae error quos earum, impedit debitis soluta,
									alias corporis odio?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
									itaque sed nulla fugiat? Itaque vitae, sapiente repudiandae
									doloribus officia architecto illo dolor, aliquid nesciunt
									nobis sit non quibusdam distinctio quia recusandae aut rerum
									sequi sint quasi ad iusto illum, alias exercitationem. Debitis
									nisi in eaque suscipit aliquam! Facilis commodi veritatis
									assumenda officia voluptates soluta eaque vero totam modi
									doloribus reprehenderit laboriosam consequatur harum deleniti
									autem quas quaerat eum ducimus atque, rerum minus? Nemo totam
									voluptas dolorum voluptate corporis expedita sed consequuntur
									exercitationem odit ipsam! Repellendus voluptatibus facilis in
									ab quia recusandae error quos earum, impedit debitis soluta,
									alias corporis odio?
								</p>
                                <h4>Lorem, ipsum.</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
									itaque sed nulla fugiat? Itaque vitae, sapiente repudiandae
									doloribus officia architecto illo dolor, aliquid nesciunt
									nobis sit non quibusdam distinctio quia recusandae aut rerum
									sequi sint quasi ad iusto illum, alias exercitationem. Debitis
									nisi in eaque suscipit aliquam! Facilis commodi veritatis
									assumenda officia voluptates soluta eaque vero totam modi
									doloribus reprehenderit laboriosam consequatur harum deleniti
									autem quas quaerat eum ducimus atque, rerum minus? Nemo totam
									voluptas dolorum voluptate corporis expedita sed consequuntur
									exercitationem odit ipsam! Repellendus voluptatibus facilis in
									ab quia recusandae error quos earum, impedit debitis soluta,
									alias corporis odio?
								</p>
							</div>
						</div>
					</div>
				</div>
			</LayoutOne>
		</Fragment>
	);
};

export default About;
