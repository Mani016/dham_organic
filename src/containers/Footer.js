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

    return(
    <footer className="footer-section">
        <div className="container">
            <div className="row"> 
                {/*  Start:About  */}
                <div className="col-lg-4 col-sm-12">
                    <div className="widget">
                        <div className="footer_logo">
                            <img className="img-responsive" src="assets/images/footer_logo.png" alt="" />
                        </div>
                        <div className="footer_p">
                            <p className="footer_para">Loren ipsum dolor conse ctetur at adipis cing elit sed do eiu smod of tempor inci didunt know youlab a et dolore magna aliqua </p>
                        </div>
                        <div className="footer_socil">
                            <ul className="list-icons link-list footer_soc">
                                <li>
                                    <a href="//facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="//twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="//facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-behance"></i></a>
                                </li>
                                <li>
                                    <a href="//instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="//pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
                {/*  End:About  */}

                {/*  Start:Quick Link  */} 
                <div className="col-lg-4 col-sm-12">
                    <div className="widget quick_lnk">
                        <h5>Quick Link</h5>
                        <ul>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/about"}>Help and Ordering</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/services"}>Return & Cancellation</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/single-services"}>Online Organic Service</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/team"}>Delevery Schedule</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/team"}>Online Organic Service</Link>
                            </li> 
                        </ul>
                    </div>
                </div> 
                {/*  End:Quick Link  */}
 
                {/*  Start:Latest post   */}
                <div className="col-lg-4 col-sm-12">
                    <div className="widget">
                        <h5>Latest Articles</h5>
                        <ul className="footer_recent_blog">
                            <li> 
                                <img className="img-responsive" src="assets/images/blog1.jpg" alt="" />  
                                <span className="post_cont">
                                    <span className="post-date">
                                        <i className="fa fa-calendar"></i>March 14, 2019
                                    </span>
                                    <Link to={process.env.PUBLIC_URL + "/single-blog"}>
                                        <span>How to Eat Organic Foods</span>
                                    </Link>
                                </span>
                            </li>
                             <li> 
                                <img className="img-responsive" src="assets/images/blog2.jpg" alt="" />  
                                <span className="post_cont">
                                    <span className="post-date">
                                        <i className="fa fa-calendar"></i>March 14, 2019
                                    </span>
                                    <Link to={process.env.PUBLIC_URL + "/single-blog"}>
                                        <span>How to Eat Organic Foods</span>
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div> 
                {/*  End:Latest post  */}



                <button className={`scrollup ${scroll > top ? "show" : ""}`} onClick={() => scrollToTop()} >
                    <span className="icon-glyph-203"></span>
                </button>
            </div>
        </div> 
        {/*  Start:Subfooter  */}
        <div className="subfooter">
            <p>2020 © Copyright <Link to={process.env.PUBLIC_URL + "/"}>Dhaam Organic</Link> All rights Reserved.</p>
        </div> 
        {/* End:Subfooter  */}
    </footer> 

        )
 
}

 
export default Footer;