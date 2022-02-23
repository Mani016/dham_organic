import React , {Component, Fragment } from 'react'; 
import {Link} from 'react-router-dom';  
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";


class Gallery extends Component{

    render(){

	    const galleryListArray = [
	        {
	            image:'work-1.jpg',
	            title:'Native Orange',
	            category:'vegetable', 
	            link:'single-shop',
	        },
 	        {
	            image:'work-2.jpg',
	            title:'Juicy Grapes',
	            category:'vegetable', 
	            link:'single-shop',
	        },
	        {
	            image:'work-4.jpg',
	            title:'Fresh Banana',
	            category:'vegetable', 
	            link:'single-shop',
	        },
 	        {
	            image:'work-3.jpg',
	            title:'Red Watermelon',
	            category:'vegetable', 
	            link:'single-shop',
	        },
	        {
	            image:'work-4.jpg',
	            title:'Juicy Grapes',
	            category:'vegetable', 
	            link:'single-shop',
	        },
 	        {
	            image:'work-5.jpg',
	            title:'Fresh Banana',
	            category:'vegetable', 
	            link:'single-shop',
	        },
	    ]

	    const galleryListtMap = galleryListArray.map((valu, i) => {
	        return(
 
                <div className="col-md-4 col-sm-12 web graphics" key={i}>
                    <div className="single-project-item" style={{ backgroundImage: `url(assets/images/${valu.image})` }}>
                        <div className="project-hover">
                            <div className="project_cnt"> 
                                <h6><Link to={`${valu.link}`}>{valu.title}</Link></h6>
                                <span><Link to={`${valu.link}`}>category : {valu.category}</Link></span>
                            </div>
                        </div>
                    </div>
                </div>  
  
	        )
	    });

    	return(

		<Fragment>
            <MetaTags>
              <title>FuodBorne | Gallery </title>
              <meta
                name="description"
                content="Organic Food React JS Template."
              />
            </MetaTags>
            <LayoutOne>

            <div className="work-page-two">
 

				{/*====================  breadcrumb area ====================*/}

				<Breadcrumb title="Our Gallery" />
			
				{/*====================  End of breadcrumb area  ================*/}

  
				<section className="work-section">
			        <div className="container">
						{/* Heading */}
						<div className="base-header">
		                    <small>Our Latest Work</small>
		                    <h3>Our Farm Gallery</h3>
		                 </div>  
		                {/* End: Heading */}
			            <div className="row projects-list">  

			                {galleryListtMap}

			            </div> 
			        </div> 
			    </section>


                {/*==================== End : Work Section ====================*/}  

			</div>
            </LayoutOne>
        </Fragment>
        )
    }
}

export default Gallery;


