import React from "react"; 

const ChooseUs = () => {
  return (
    
	<section 
    className="whychose-section" 
    style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/bg_1.jpeg"})`
    }}
    > 
	    <div className="container">
	        <div className="row">
	            <div className="col-lg-5 col-sm-12">
	               <div className="whychose_bg" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/why_chose.jpeg"})` }}></div> 
	            </div> 
	            <div className="col-lg-7 col-sm-12 my-auto">
	                <div className="whychose_wrp" style={{background: "#4ba755" }}>
	                    {/* Start:  Header Section */}
	                    <div className="base-header base_header_left">
	                        <small>What We do</small>
	                        <h3> Why Choose Us </h3>
	                    </div>
	                    {/* End: Header Section */}
	                    <div className="special_ser_item">
	                        <div className="special_ser_icon">
	                            <i className="icon-glyph-11"></i>
	                        </div>
	                        <h4>Quick Response </h4>
	                        <p>Emergency response time is one hour or less guaranteed at live person will answer your call or you can enter service</p>
	                    </div>                 
	                    <div className="special_ser_item">
	                        <div className="special_ser_icon">
	                            <i className="icon-glyph-30"></i>
	                        </div>
	                        <h4>Very Fast Services</h4>
	                        <p>Emergency response time is one hour or less guaranteed at live person will answer your call or you can enter service</p>
	                    </div> 
	                </div>  
	            </div>  
	        </div>
	        {/* row */}
	    </div>
	    {/* container */}
	</section>  

  );
};

export default ChooseUs;
