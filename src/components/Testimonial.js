import React, {Component, useEffect, useState} from 'react'; 
import Slider from "react-slick"; 
import  agent  from '../agent';
  
const Testimonial =()=>{
    const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	function getTestimonials() {
		setLoading(true);
		const payload = {
			status: true,
		};
		agent.Testimonial
			.get(payload)
			.then((res) => {
                console.log(res);
				if (res.success) {

					setData(res.data);
					setLoading(false);
				} else {
					setData([]);
					setLoading(false);
				}
			})
			.catch((err) => {
				setData([]);    
				setLoading(false);
			});
	}
	useEffect(() => {
		getTestimonials();
	}, []);

        var settings = {
          dots: false,
          arrows:false,
          infinite: true, 
          autoplay:true,
          fade:true,
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

        let ImageTestiDataList = data.map((val, i) => {
            return(

 
                <div className="item" key={`val_${i}`}> 
                    <div className="testi_wrp">
                        <img src={val.image.path} alt="" />
                        <div>
                            <div className="testi_info">
                                    <p>{val.msg}</p>
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
                <small>Client Satisfait </small> 
                <h3>What Consumers Say </h3> 
            </div> 
            <div className="row">
                <div className="col-sm-12">

                        <Slider {...settings}>

                            {ImageTestiDataList}

                        </Slider>
 
                </div>
            </div> 
        </div> 
    </section>


    );
}



export default Testimonial;


