import React from "react"; 

const AboutContent = () => {
  return (
 
	<section className="about-section">
        <div className="container"> 
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="about_img"> 
                        <img src="assets/images/about.jpg" alt="about" /> 
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="about_item_tb">
                        <div className="about_item_tbcell">
                             <div className="base-header base_header_left">
                                <small>Welcome To Our Dhaam Organic</small>
                                <h3>Organic Food - Farm Fresh Produce Right to Your Door</h3>
                             </div>
                            <div className="about_item">
                                <h4>Natural Products</h4>
                                 <p>Organically grown crops tend to use natural fertilizers like manure to improve plant growth. Animals raised organically are also not given antibiotic organic  hormones  most commonly purchased organic .</p>
                            </div>
                            <div className="about_item">
                                <h4>Wheat Cultivation</h4>
                                 <p>Organically grown crops tend to use natural fertilizers like manure to improve plant growth. Animals raised organically are also not given antibiotic organic  hormones  most commonly purchased organic .</p> 
                            </div> 
                        </div>
                    </div>
                </div>
                {/*about_wrp*/}
            </div>
            {/* row */}
            
        </div>
        {/* container */}
    </section>


  );
};

export default AboutContent;
