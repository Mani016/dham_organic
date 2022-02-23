import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ServiceContent extends Component{

    render(){

    const serviceListArray = [
        {
            image:'service_1.jpg',
            title:'Fresh Fruits',
            description:'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are', 
            link:'services',
        },
         {
            image:'service_2.jpg',
            title:'Fresh Vegetable',
            description:'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are', 
            link:'services',
        },
        {
            image:'service_3.jpg',
            title:'Natural Wheats',
            description:'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are', 
            link:'services',
        },
    ]
 

    const serviceListtMap = serviceListArray.map((valu, i) => {
        return(

            <div className="col-md-4 col-sm-12" key={i}> 
                <div className="service-item">
                    <div className="img_serv"> 
                        <Link to={`${valu.link}`}><img src={`assets/images/${valu.image}`} alt="service" /></Link>
                    </div>
                    <div className="service_text">
                        <Link to={`${valu.link}`}> <h4>{valu.title}</h4></Link>
                        <p>{valu.description}</p>
                    </div>  
                    <Link to={`${valu.link}`} className="serv_link"><i className="icon-glyph-40"></i></Link>
                </div>
            </div>                

        )
    });

    return(
        <section className="service-section">
            <div className="animate_icon">
                <div className="animate_item animate_item1 bounce_animate">
                    <img src="assets/images/animate_icon1.png" alt="" />
                </div>
                <div className="animate_item animate_item2 bounce_animate">
                    <img src="assets/images/animate_icon2.png" alt="" />
                </div>
                <div className="animate_item animate_item3 bounce_animate">
                    <img src="assets/images/animate_icon3.png" alt="" />
                </div>
                <div className="animate_item animate_item4 bounce_animate">
                    <img src="assets/images/animate_icon4.png" alt="" />
                </div>
            </div>
            <div className="container"> 
                {/* Heading */}
                 <div className="base-header">
                    <small>What We Offer</small>
                    <h3>Service we offer</h3>
                 </div>  
                {/* End: Heading */}

                <div className="row">
                    {serviceListtMap}
                </div> 
                
            </div> 
        </section>
        )

    }
}

 
export default ServiceContent;