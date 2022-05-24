import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { Link } from "react-router-dom";
// import dhaam_logo from '../assets/images/dhaam_logo.png';
const Footer = () => {
	const [scroll, setScroll] = useState(0);
	const [top, setTop] = useState(0);

	useEffect(() => {
		setTop(100);
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		animateScroll.scrollToTop();
	};

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	return (
		<footer className="footer-section">
			<div className="container">
				<div className="row">
					{/*  Start:About  */}
					<div className="col-lg-4 col-sm-12">
						<div className="widget">
							<div className="footer_logo">
								<img
									className="img-responsive"
									src="/assets/images/dhaam_images/dhaam_logo.png"
									alt=""
								/>
							</div>
							<div className="footer_p">
								<p className="footer_para">
									Eating organic isn't a trend, it's a return to tradition.’
									Working towards this vision of providing pesticide free,
									chemical free, unadulterated organic food products to our
									supporters.
								</p>
							</div>
							<div className="footer_socil">
								<ul className="list-icons link-list footer_soc">
									<li>
										<a
											href="https://www.facebook.com/groups/303331530978336/?ref=share"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fa fa-facebook"></i>
										</a>
									</li>
									<li>
										<a
											href="//instagram.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fa fa-instagram"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/*  End:About  */}

					{/*  Start:Quick Link  */}
					<div className="col-lg-2 col-sm-12">
						<div className="widget quick_lnk">
							<h5>Quick Links</h5>
							<ul>
								<li>
									<Link to={process.env.PUBLIC_URL + "/our-concepts/about-us"}>
										About Us
									</Link>
								</li>
								<li>
									<Link
										to={process.env.PUBLIC_URL + "/our-concepts/dhaam-story"}
									>
										Dhaam Story
									</Link>
								</li>
								<li>
									<Link to={process.env.PUBLIC_URL + "/organic-food/need"}>
										Organic Food
									</Link>
								</li>
								<li>
									<Link to={process.env.PUBLIC_URL + "/farm-gallery"}>
										Farm Gallery
									</Link>
								</li>
								<li>
									<Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
								</li>
							</ul>
						</div>
					</div>

					{/*  Start:Facebook page  */}
					<div className="col-lg-6 col-sm-12">
						<div className="row">
							<div className="widget col-lg-6 col-sm-12">
								<iframe
									src="https://www.facebook.com/plugins/group.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F303331530978336&width=300&height=300&show_metadata=true&adapt_container_width=true&appId=306728041628985&embedded=true"
									width={300}
									height={300}
									style={{ border: "none", overflow: "auto" }}
									target="_top"
									title="Facebook Group"
									allowTransparency={true}
									allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
								></iframe>
							</div>
							<div className="widget col-lg-6 col-sm-12 pl-3">
								<iframe
									src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhaamorganic&tabs=timeline&width=300&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=306728041628985"
									width={300}
									height={300}
									style={{ border: "none", overflow: "auto" }}
									scrolling="no"
									frameBorder="0"
									allowTransparency={true}
									title="Facebook Page"
									allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
								></iframe>

							</div>
						</div>
					</div>

					{/*  End:Facebook page */}

					<button
						className={`scrollup ${scroll > top ? "show" : ""}`}
						onClick={() => scrollToTop()}
					>
						<span className="icon-glyph-203"></span>
					</button>
				</div>
			</div>
			{/*  Start:Subfooter  */}
			<div className="subfooter">
				<p>
					{new Date().getFullYear()}© Copyright{" "}
					<Link to={process.env.PUBLIC_URL + "/"}>Dhaam Organic</Link> All
					rights Reserved.
				</p>
			</div>
			{/* End:Subfooter  */}
		</footer>
	);
};

export default Footer;
