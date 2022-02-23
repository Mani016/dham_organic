 
import React from 'react';
import {Link} from 'react-router-dom';
 

const PricingList = () => {
  return (
 
    <section className="pricing-section" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/bg_2.jpg"})` }}>
        <div className="container"> 
            <div className="base-header">
                <small>Our Special Plan</small>
                <h3>Our Pricing</h3>
            </div> 
            <div className="row">
                <div className="col-md-4 col-sm-12"> 
                    {/* Start: pricing-box 1 */}
                    <div className="pricing-box">
                        <h4>Basic Plan</h4>
                        <h2>$27<span>/month</span></h2>
                        <ul>
                            <li>3 Bedrooms cleaning</li>
                            <li>Vacuuming</li>
                            <li>2 Bathroom cleaning</li>
                            <li>Mirror Cleaning</li>
                            <li>1 Livingroom cleaning</li>
                            <li>Window Sills</li> 
                        </ul>
                        <Link to="contact" className="more-link"> Order Now </Link>
                    </div>
                    {/* End: pricing-box 1 */}
                </div>
                <div className="col-md-4 col-sm-12">
                     {/* Start: pricing-box 2 */}
                    <div className="pricing-box active">

                        <h4>Premium Plan</h4>
                        <h2>$29<span>/month</span></h2>
                        <ul>
                            <li>3 Bedrooms cleaning</li>
                            <li>Vacuuming</li>
                            <li>2 Bathroom cleaning</li>
                            <li>Mirror Cleaning</li>
                            <li>1 Livingroom cleaning</li>
                            <li>Window Sills</li> 
                        </ul>
                        <Link to="contact" className="more-link"> Order Now </Link>
                    </div>
                    {/* End: pricing-box 2 */}
                </div>
                <div className="col-md-4 col-sm-12">
                     {/* Start: pricing-box 3 */}
                    <div className="pricing-box">
                        <h4>Standard Plan</h4>
                        <h2>$68<span>/month</span></h2>
                        <ul>
                            <li>3 Bedrooms cleaning</li>
                            <li>Vacuuming</li>
                            <li>2 Bathroom cleaning</li>
                            <li>Mirror Cleaning</li>
                            <li>1 Livingroom cleaning</li>
                            <li>Window Sills</li> 
                        </ul>
                        <Link to="contact" className="more-link"> Order Now </Link>
                    </div> 
                    {/* End: pricing-box 3 */}
                </div>
            </div> 
        </div> 
    </section>
    
  );
};

export default PricingList;
