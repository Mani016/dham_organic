import React,{Component, Fragment} from 'react'; 
import ServiceSidebar from '../components/ServiceSidebar'; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";


class SingleService extends Component{
	render(){

	const serviceTopArray = [
		{
			image:'blog5.jpg',
            title:"Cleaning company offers a full range of daily services",
			desPartOne:"Loren ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt know you labore et dolore magna aliqua consectetur adipiscingLoren ipsum dolor conse ctetur sed adipi scing elit to sed do eiusmod tempor ipsum dolor consectetur adipiscing elit sed do eiu smod temp inci did know you labore et dolore magna aliqua consec consectetur elit tapp adipiscingLoren ipsum dol ",
            desPartTwo:"Loren ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt know you labore et dolore magna aliqua consectetur adipiscingLoren ipsum dolor consectetur adipiscing elit sed do eiusmod tempor ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt", 
		},
	]
 
    const serviceBottomArray = [
        {
            icon:'process_3.png',
            title:"Fresh Vegetable",
            des:"Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you",  
        },
        {
            icon:'process_4.png',
            title:"Fresh Fruits",
            des:"Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you",  
        },
    ]

    const serviceToptMap = serviceTopArray.map((val, i) => {
        return(
		    <div className="single_service_left" key={i}> 
                <img src={`assets/images/${val.image}`} alt="" />
                <h4>{val.title}</h4>
                <p>{val.desPartTwo}</p>
                <p>{val.desPartOne}</p>
            </div>
        )
    });

    const serviceBottomtMap = serviceBottomArray.map((val, i) => {
        return(
            <div className="col-md-6 col-sm-12" key={i}>
                <div className="sing_service_item">
                    <div className="icon-serv"> 
                        <img src={`assets/images/${val.icon}`} alt="" />
                    </div>
                    <h4>{val.title}</h4>
                    <p>{val.des}</p>
                </div>
            </div>
        )
    });


	return(
        <Fragment>
        <MetaTags>
          <title>FuodBorne | Single Service</title>
          <meta
            name="description"
            content="Organic Food React JS Template."
          />
        </MetaTags>
        <LayoutOne>

       <div className="single-services-page">

            {/*====================  breadcrumb area ====================*/}

            <Breadcrumb title="Single Services" />
            
            {/*====================  End of breadcrumb area  ====================*/} 


            {/*====================  Single Services area ====================*/}
            <div className="single_service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">

                            {serviceToptMap}

                            <div className="row single_service_left_botom">

                                {serviceBottomtMap}

                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">

                            <ServiceSidebar />
                            
                        </div>

                    </div>
                </div>
            </div>
             {/*====================  End Single Services area ====================*/} 
        </div>
        
          </LayoutOne>
        </Fragment>

 	)

	}
}

 
export default SingleService;