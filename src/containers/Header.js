 
import React from 'react';

const Header = () => {
	return (
 
    <div className="header_topbar">
        {/* Logo */}
        <div className="container"> 
                <div className="header_top_right list-unstyled">
                    <ul>
                        <li><i className="fa fa-phone"></i>+234 567 234 875</li>
                        <li><i className="fa fa-globe"></i>1st Avenue, Boston</li>
                    </ul>
                </div>
                <div className="header_top_left">
                    <ul className="header_socil list-inline pull-left">  
                        <li><i className="fa fa-envelope"></i>info@example.com</li>
                        <li>
                            <a href="//facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="//twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
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
 
	)
}


export default Header;