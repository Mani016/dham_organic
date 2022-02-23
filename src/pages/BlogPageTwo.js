import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom'; 
import BlogSidebar from '../components/BlogSidebar'; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";

class BlogPagTwo extends Component{

    state = {
        heading: 'Latest news',
        subHeading: 'articles & tips',
    } 

    render(){

    const blogListArray = [
        {
            image:'blog4.jpg',
            commentCount:'0 comments',
            date:'6 Nov 2019', 
            title:'How to Find and Afford Organic Food in Your Area', 
            postExcerpt:'Conventional farming methods expose produce to chemicals in the form of pesticides, fertilisers, and preser vatives. While these greatly improve productivity, they can be very harmful to human beings, and in large amou nts even cause irreversible damage. Organic food on the other hand, is produced through traditional farming methods, without the use of any artificial compounds or preservatives, making it far safer for human consump tion human beings, and in large amou nts even cause irreversible.', 
            link: 'single-blog',
        },
         {
            image:'blog5.jpg',
            commentCount:'0 comments',
            date:'6 Nov 2019', 
            title:'How to Find and Afford Organic Food in Your Area', 
            postExcerpt:'Conventional farming methods expose produce to chemicals in the form of pesticides, fertilisers, and preser vatives. While these greatly improve productivity, they can be very harmful to human beings, and in large amou nts even cause irreversible damage. Organic food on the other hand, is produced through traditional farming methods, without the use of any artificial compounds or preservatives, making it far safer for human consump tion human beings, and in large amou nts even cause irreversible.', 
            link: 'single-blog',
        },
    ]

  
    const blogListtMap = blogListArray.map((valu, i) => {
        return(
            <div className="col-sm-12" key={i}> 
                <div className="blog_wrp">
                    <Link to="single-blog" className="blog_img">
                        <img src={`assets/images/${valu.image}`} alt="" />
                    </Link>
                    <div className="blog_info">
                        <div className="blog_date"> 
                            <span><i className="fa fa-comment-o"></i>{valu.commentCount} </span>
                            <span> <i className="fa fa-calendar"></i>{valu.date}</span>
                        </div>
                        <Link to={`${valu.link}`}>
                            <h4>{valu.title}</h4> 
                        </Link> 
                        <p>{valu.postExcerpt}</p> 
                        <Link to={`${valu.link}`} className="more-link">Read more </Link> 
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

	    <div className="blog-page-two">

 
            {/*====================  breadcrumb area ====================*/}

            <Breadcrumb title="Latest Blog" />
        
            {/*====================  End of breadcrumb area  ================*/}


	        <div className="blog_container">
	            <div className="container"> 
	                <div className="row">     

                        <div className="col-md-9 col-sm-12 blog-area">
                            <div className="row">

                                {/* Blog Item */}
                                {blogListtMap} 
         

                                {/* Blog Pagination */}
                                <div className="prodt_pagination">
                                    <ul>
                                        <li><Link to={process.env.PUBLIC_URL + "/blog-two"} className="page_number current">1</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/blog-two"} className="page_number">2</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/blog-two"} className="page_number">→</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Blog Area */}


                        {/*  Widget Area */} 
                        
                        <BlogSidebar />
 
                        {/* End: Widget Area */} 

	                </div> 
	            </div> 
	        </div>


		</div> 

          </LayoutOne>
        </Fragment>

        )

    }
}

 
export default BlogPagTwo;