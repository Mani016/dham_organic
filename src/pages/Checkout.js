import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import Breadcrumb from "../components/Breadcrumb";


const Checkout = () => {
 
    return(
        <Fragment>
            <MetaTags>
              <title>FuodBorne | About</title>
              <meta
                name="description"
                content="Organic Food React JS Template."
              />
            </MetaTags>
            <LayoutOne>
        

            <div className="checkout-page">
                {/*====================  breadcrumb area ====================*/}

                <Breadcrumb title="Shopping Cart" />
                
                {/*====================  End of breadcrumb area  ====================*/} 

 
                {/*====================  Start of Checkout  Section    ====================*/}

                <section className="checkout_section">
                    <div className="container">
                        <div className="row">
                            <div id="content" className="col-lg-12 col-sm-12">
                                <div name="contactform" method="post" className="shopform">
                                    <div className="row">

                                        <div className="col-lg-6 col-sm-12">
                                            <div className="custom-title">
                                                <h3>Billing details</h3>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-lg-6 col-sm-12">
                                                    <label>First Name *</label>
                                                    <input type="text" name="name" id="name" className="form-control" />
                                                </div>

                                                <div className="col-lg-6 col-sm-12">
                                                    <label>Last Name *</label>
                                                    <input type="text" name="name" id="name1" className="form-control" />
                                                </div>
                                                <div className="col-lg-12 col-sm-12">
                                                    <label>Company Name</label>
                                                    <input type="text" name="name" id="name2" className="form-control" />
                                                </div>
                                                <div className="col-lg-12 col-sm-12">
                                                    <label>Address *</label>
                                                    <input type="text" name="name" id="name3" className="form-control" />
                                                    <label>Address Line 2</label>
                                                    <input type="text" name="name" id="name4" className="form-control" />
                                                </div>
                                                <div className="col-lg-12 col-sm-12">
                                                    <label>Town / City *</label>
                                                    <input type="text" name="name" id="name5" className="form-control" />
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <label>County *</label>
                                                    <input type="text" name="name" id="name6" className="form-control" />
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <label>Zip Code *</label>
                                                    <input type="text" name="name" id="name7" className="form-control" />
                                                </div>
                                                <div className="col-lg-12 col-sm-12">
                                                    <label>Email *</label>
                                                    <input type="text" name="name" id="name8" className="form-control" />
                                                    <label>Phone Number *</label>
                                                    <input type="text" name="name" id="name9" className="form-control" />
                                                </div>
                                            </div>
                                        {/*  end row */}
                                        </div>
                                        {/*  end col */}



                                        <div className="col-lg-6 col-sm-12">
                                            <div className="custom-title">
                                                <h3>Shipping to the other address</h3>
                                            </div>
                                            <br/>
                                            <label>Other Notes</label>
                                            <textarea rows="5" className="form-control" placeholder="Add extra notes..."></textarea>
                                
                                            <div className="coupon-area">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="coupon_show">
                                                                {/* ACCORDION START */}
                                                                <h3>Returning customer? <span id="showlogin">Click here to login</span></h3>
                                                                <div id="checkout-login" className="coupon-content" style={{display: 'none'}}>
                                                                    <div className="coupon_info">
                                                                        <form action="#">
                                                                            <p className="input_name">
                                                                                <label>Username or email <span className="required">*</span></label>
                                                                                <input type="text"/>
                                                                            </p>
                                                                            <p className="input_pass">
                                                                                <label>Password <span className="required">*</span></label>
                                                                                <input type="text"/>
                                                                            </p>
                                                                            <p className="input_login">
                                                                                <input type="submit" className="button" value="Login"/>
                                                                                <label>
                                                                                <input type="checkbox"/> Remember me
                                                                                </label>
                                                                            </p>
                                                                            <p className="lost_pass">
                                                                                <a href="/">Lost your password?</a>
                                                                            </p>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {/* ACCORDION END */}

                                                                {/* ACCORDION START */}
                                                                <h3>Have a coupon? <span id="showcoupon">Click here to enter your code</span></h3>
                                                                <div id="checkout_coupon" className="coupon-checkout-content" style={{display: 'none'}}>
                                                                    <div className="coupon-info">
                                                                        <form action="#">
                                                                            <p className="checkout-coupon">
                                                                                <input type="text" placeholder="Coupon code" />
                                                                                <input type="submit" value="Apply Coupon" />
                                                                            </p>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {/* ACCORDION END */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        {/* end COL */}
                                    </div>
                                    {/* end row */}
                                </div>

                                <div className="payment_mth">
                                    <div className="custom-title">
                                        <h3>Payment method </h3>
                                    </div>
                                    <br/>
                                    <form id="payment" className="clearfix">
                                        <label className="checkbox payment-method inline">
                                            <input type="checkbox" id="customCheck1" value="option1" className="" /> Direct Bank Transfer 
                                        </label>
                                        <label className="checkbox payment-method inline">
                                            <input type="checkbox" id="customCheck2" value="option2" /> Cheque Payment
                                        </label>
                                        <label className="checkbox payment-method inline">
                                            <input type="checkbox" id="customCheck4" value="option2" /> PayPal Payment
                                        </label>
                                        <label className="checkbox payment-method inline">
                                            <input type="checkbox" id="customCheck3" value="option3" /> Google Checkout
                                        </label>
                                        <a href="#/" className="more-link">Place An Order</a>
                                    </form>
                                </div>
                                
                            </div>
                            {/* end content */}
                        </div>
                    {/* end row */}
                    </div>
                    {/* end container*/}
                </section>


                {/*====================  End of Checkout  Section    ====================*/}


                </div>

            </LayoutOne>
        </Fragment>
            
    ); 
};

export default Checkout;   