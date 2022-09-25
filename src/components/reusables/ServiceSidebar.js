import React,{Component} from 'react';
import {Link} from 'react-router-dom'; 

class ServiceSidebar extends Component{
	render(){

	const serviceListArray = [
		{
			serviceTitle:"Fresh Vegetable ",
			sidebarLink:"single-services",  
		},
		{
			serviceTitle:"Fresh Fruits ",
			sidebarLink:"single-services",  
		},
		{
			serviceTitle:"Natural Wheats",
			sidebarLink:"single-services",  
		},
		{
			serviceTitle:"Red Watermelon",
			sidebarLink:"single-services",  
		},
		{
			serviceTitle:"Juicy Grapes",
			sidebarLink:"single-services",  
		},
		{
			serviceTitle:"Fresh Banana",
			sidebarLink:"single-services",  
		},
	]

 

    const serviceListMap = serviceListArray.map((val, i) => {
        return(
			<li key={i}><Link to={`${val.sidebarLink}`}>{val.serviceTitle}</Link></li>
        )
    });

	return(
		<div className="single_service_right">
            <div className="single_service_cat">
                <ul>
                    {serviceListMap}
                </ul>
            </div>
            <div className="service_contact"> 
                <h4>Contact </h4>
                <div className="serv_contact_wrp">
                    <div className="single-contact-info">
                        <i className="fa fa-phone"></i>
                        <p><a href='tel:9266027544'> 9266027544</a></p>
                    </div>
                    <div className="single-contact-info">
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:dhaamorganic@gmail.com">dhaamorganic@gmail.com</a></p>
                    </div>
                    <div className="single-contact-info">
                        <i className="fa fa-globe"></i>
                        <p>Village Chhudani Dhaam <br/>Haryana-124504</p>
                    </div> 
                </div>
            </div>
        </div>
 	)

	}
}

 
export default ServiceSidebar;