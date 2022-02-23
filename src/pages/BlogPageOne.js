import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom'; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";



class BlogPageOne extends Component{

    state = {
        heading: 'Latest news',
        subHeading: 'articles & tips',
    } 

    render(){

    const blogListArray = [
        {
            image:'blog1.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
        {
            image:'blog2.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
        {
            image:'blog3.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
        {
            image:'blog2.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
        {
            image:'blog3.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
        {
            image:'blog1.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
    ]

 

    const blogListtMap = blogListArray.map((valu, i) => {
        return(
            <div className="col-md-4 col-sm-12" key={i}> 
                <div className="blog_wrp">
                    <Link to={`${valu.link}`} className="blog_img"> 
                        <img src={`assets/images/${valu.image}`} alt="" />
                    </Link>
                    <div className="blog_info">
                        <Link to={`${valu.link}`}>
                            <h4>{valu.title}</h4> 
                        </Link> 
                        <div className="blog_date"> 
                            <span> <i className="fa fa-calendar"></i>{valu.date}</span>
                        </div>
                        <span className="blog_read">
                            <Link to={`${valu.link}`}>Read more </Link><i className="icon-right-open"></i>
                        </span>
                    </div>
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

	    <div className="blog-page-one">

            {/*====================  breadcrumb area ====================*/}

            <Breadcrumb title="Latest Blog" />
                
            {/*====================  End of breadcrumb area  ====================*/}
 
 
	        <section className="blog-section">
	            <div className="container">
	                <div className="base-header">
	                    <small>{this.state.subHeading} </small>  
	                    <h3>{this.state.heading}</h3> 
	                </div>
	                <div className="row">     

	                    {blogListtMap} 

						<div className="prodt_pagination">
		                    <ul>
		                        <li><Link to={process.env.PUBLIC_URL + "/blog"} className="page_number current">1</Link></li>
		                        <li><Link to={process.env.PUBLIC_URL + "/blog"} className="page_number">2</Link></li>
		                        <li><Link to={process.env.PUBLIC_URL + "/blog"} className="page_number">→</Link></li>
		                    </ul>
		                </div>
	                </div> 
	            </div> 
	        </section>

		</div> 

        </LayoutOne>
        </Fragment>
        
        )

    }
}

 
export default BlogPageOne;