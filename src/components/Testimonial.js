import React, {Component} from 'react'; 
import Slider from "react-slick"; 
  
class Testimonial extends Component{

    state = { 
        heading: `What Client's Say`, 
        subHeading: ' Client Satisfait ',
        image1: 'testimonial1.jpg',
        image2: 'testimonial2.jpg',
        image3: 'testimonial3.jpg',
        image4: 'testimonial4.jpg',
    }

    render(){
        var settings = {
          dots: false,
          arrows:false,
          infinite: true, 
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };

        let imageTestiData = [
            {
                clientImg:'testimonial4.jpg',
                content: 'Organically grown crops tend use natural fertilizer like manure to improve growth to plant as amet cons adip scing elited id lectus quis dui euismod con after.',
                name:'Adam Crew',  
                designation:'Manager',
            },
            {
                clientImg:'testimonial3.jpg',
                content: 'Organically grown crops tend use natural fertilizer like manure to improve growth to plant as amet cons adip scing elited id lectus quis dui euismod con after.',
                name:'Adam Crew',  
                designation:'Manager',
            },
        ]; 

        let ImageeTestiDataList = imageTestiData.map((val, i) => {
            return(

 
                <div className="item" key={i}> 
                    <div className="testi_wrp">
                        <img src={`assets/images/${val.clientImg}`} alt="" />
                        <div>
                            <div className="testi_info">
                                    <p>{val.content}</p>
                                </div>
                                <div className="testi_img"> 
                                    
                                    <h4>{val.name}<span>{val.designation}</span></h4> 
                                </div>
                        </div>
                        
                    </div>
                </div> 

            )
        });


    return ( 
 
    <section className="testi-section">
        <div className="container"> 
            <div className="base-header">
                <small>{this.state.subHeading} </small> 
                <h3>{this.state.heading} </h3> 
            </div> 
            <div className="row">
                <div className="col-sm-12">

                        <Slider {...settings}>

                            {ImageeTestiDataList}

                        </Slider>
 
                </div>
            </div> 
        </div> 
    </section>


    );
}


}


export default Testimonial;


