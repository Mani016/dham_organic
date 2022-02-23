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
                        <p>+122 (345) 345 72</p>
                    </div>
                    <div className="single-contact-info">
                        <i className="fa fa-envelope"></i>
                        <p>info-revita@acb.com</p>
                    </div>
                    <div className="single-contact-info">
                        <i className="fa fa-globe"></i>
                        <p>#27, East Madison Ave, <br/> Melbourne, Australia</p>
                    </div> 
                </div>
            </div>
            <div className="download_brochur">
                <h4>Downloads </h4>
                <p>Loren ipsum dolor cons ectetur adip iscing elit sed do eiu smod tempor </p>
                <ul className="files">
                    <li><Link to={process.env.PUBLIC_URL + "/single-services"}><span className="fa fa-file-pdf-o"></span> Download as pdf</Link>
                    </li>
                    <li><Link to={process.env.PUBLIC_URL + "/single-services"}><span className="fa fa-file-word-o"></span> Download as doc</Link>
                    </li>
                </ul>
            </div>
        </div>
 	)

	}
}

 
export default ServiceSidebar;