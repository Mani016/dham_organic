import React, {Component} from 'react'; 
import Slider from "react-slick"; 
  
class ClinetCarousel extends Component{
 
    render(){
        var settings = {
          dots: false,
          arrows:false,
          infinite: true, 
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
            // Responsive breakpoints
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                      slidesToShow: 1,
                    }
                }
              ]
        };

        let imageTestiData = [
            {
                sponsorLogo:'client-1.png', 
            },
            {
                sponsorLogo:'client-2.png', 
            },
            {
                sponsorLogo:'client-3.png', 
            },
            {
                sponsorLogo:'client-4.png', 
            },
            {
                sponsorLogo:'client-2.png', 
            },
            {
                sponsorLogo:'client-3.png', 
            },
        ]; 

        let ImageeTestiDataList = imageTestiData.map((val, i) => {
            return(
                <div className="AA" key={i}> 
                    <div className="col-md-12">
                        <div className="client-box">
                            <img src={`assets/images/${val.sponsorLogo}`} alt="" /> 
                        </div>
                    </div>
                </div>
            )
        });


    return ( 
 
    <div className="client-section">
        <div className="container">    
            <Slider {...settings}>

                {ImageeTestiDataList}

            </Slider>
        </div> 
    </div>


    );
}


}


export default ClinetCarousel;


