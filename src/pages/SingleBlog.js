import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom'; 
import BlogSidebar from '../components/BlogSidebar'; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";

class SingleBlog extends Component{

 
    render(){

    const postTag = [
        { 
            name:'Food',  
            link: 'single-blog',
        },
        { 
            name:'Red',  
            link: 'single-blog',
        },
        { 
            name:'Grapes',  
            link: 'single-blog',
        },
        { 
            name:'Fresh',  
            link: 'single-blog',
        },
    ]
   
 
    const postTagMap = postTag.map((val, i) => {
        return(
            <Link to={`${val.link}`} key={i}> {val.name}</Link>
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

	    <div className="single-blog">

            {/*====================  breadcrumb area ====================*/}

            <Breadcrumb title="Latest Blog" />
            
            {/*====================  End of breadcrumb area  ====================*/} 

	        <div className="blog_container single_blog_container">
	            <div className="container"> 
	                <div className="row">     

                        <div className="col-lg-9 col-xs-12 blog-area">
                            <div className="blog-post-list">

                                <div className="blog_wrp">
                                    <Link to="single-blog" className="blog_img">
                                        <img src="assets/images/blog4.jpg" alt="" />
                                    </Link>
                                    <div className="blog_info">
                                        <div className="blog_date"> 
                                            <span><i className="fa fa-comment-o"></i> 0 comments</span>
                                            <span> <i className="fa fa-calendar"></i>6 Nov 2019</span>
                                        </div>
                                        <Link to="single-blog">
                                            <h4>Organic food contributes to better health through reduced .</h4> 
                                        </Link> 
                                        <p>Conventional farming methods expose produce to chemicals in the form of pesticides, fertilisers, and preser vatives. While these greatly improve productivity, they can be very harmful to human beings, and in large amou nts even cause irreversible damage. Organic food on the other hand, is produced through traditional farming methods, without the use of any artificial compounds or preservatives, making it far safer for human consump tion  human beings, and in large amou nts even cause irreversible.</p> 

                                        <div className="blog_quote">
                                            <p>Lorem ipsum dolor sit amet, in urna molestie tristique. Cong erment sed at facilisis lacinia aliqu after fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis euelito an rem ipsum psum dolor sit amet molestie cras morbi in facilisis eu elit Lorem ipsum psum dolor sit amet, in urna molestie tristique</p> <p>in urna molestie tristique. Cong erment sed at facilisi lacinia aliqua  fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis eu elit Lorem ipsum si porta ligula nibh vel congue  cras morbi in facilisis eu</p>
                                            <h3>Benefits of summer cleaning tips how to clean office</h3>
                                            <p>Lorem ipsum dolor sit amet, in urna molestie tristique. Cong erment sed at facilisis lacinia aliqu after fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis euelito an rem ipsum psum dolor sit amet molestie cras morbi in facilisis eu elit Lorem ipsum psum dolor sit amet, in urna molestie tristique</p>
                                            <h6 className="marked">“How to clean office cleaning company offers a full range of daily services  facilisis euelito an rem ipsum psum dolor sit  molestie cras morbi in ”
                                            <span className="name">Adam Josef </span>
                                            </h6>
                                            <p>Lorem ipsum dolor sit amet, in urna molestie tristique. Cong erment sed at facilisis lacinia aliqu after fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis euelito an rem ipsum psum dolor sit amet molestie cras morbi in facilisis eu elit Lorem ipsum psum dolor sit amet, in urna molestie tristique</p> <p>in urna molestie tristique. Cong erment sed at facilisi lacinia aliqua  fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis eu elit Lorem ipsum si porta ligula nibh vel congue  cras morbi in facilisis eu</p>
                                        </div>
                                        <div className="post_tags">
                                            <h5> Tags</h5>
                                            {postTagMap} 
                                        </div>
                                        <div className="post_share footer_socil"> 
                                            <ul className="list-icons link-list footer_soc">
                                                <li>
                                                    <Link to={process.env.PUBLIC_URL + "/single-blog"}><i className="fa fa-facebook"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to={process.env.PUBLIC_URL + "/single-blog"}><i className="fa fa-twitter"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to={process.env.PUBLIC_URL + "/single-blog"}><i className="fa fa-behance"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to={process.env.PUBLIC_URL + "/single-blog"}><i className="fa fa-instagram"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to={process.env.PUBLIC_URL + "/single-blog"}><i className="fa fa-pinterest"></i></Link>
                                                </li>
                                            </ul>
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                            {/*  article */} 

                            <div className="post-option">
                                <div className="pull-left">
                                    <Link to={process.env.PUBLIC_URL + "/single-blog"} className="prev-post"><span className="arrow-icon icon-glyph-205"></span> &nbsp;</Link>
                                </div>
                                <span className="middle-icon">
                                    <Link to={process.env.PUBLIC_URL + "/single-blog"} className="icon-glyph-99"> </Link>
                                </span>
                                <div className="pull-right">
                                    <Link to={process.env.PUBLIC_URL + "/single-blog"} className="next-post"> &nbsp;<span className="arrow-icon icon-glyph-204"></span></Link>
                                </div>
                            </div>
 
                            {/*  comments list */} 
                            <div className="list-comments">
                                <div className="comments-section-title">
                                    <h4>7 Comments</h4>
                                </div> 

                                <ul className="comments">
                                    <li>
                                        <div className="comment">
                                            <div className="comment_imgg">
                                                <img src="assets/images/testimonial1.jpg" alt="" className="comment-avatar" />
                                            </div>
                                            <div className="comment_cont_wrp">
                                                <strong className="commenter-title">
                                                    <Link to={process.env.PUBLIC_URL + "/single-blog"}>John Doe</Link> 
                                                </strong>
                                                <span className="comment-date">27 Jan 2019</span>
                                                <span className="comment-reply">
                                                        <Link to={process.env.PUBLIC_URL + "/single-blog"}>Reply</Link>
                                                    </span>
                                                <p>Lorem ipsum dolor sit amet, in urna molestie tristique. A fermentum sed at faci lisis lacin ia aliquam fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras</p>
                                            </div>    
                                        </div>
                                        {/*  comment */} 
                                        <ul>
                                            <li>
                                                <div className="comment">
                                                    <div className="comment_imgg">
                                                        <img src="assets/images/testimonial2.jpg" alt="" className="comment-avatar" />
                                                    </div>
                                                    <div className="comment_cont_wrp">
                                                        <strong className="commenter-title">
                                                            <Link to={process.env.PUBLIC_URL + "/single-blog"}>Adam Doe</Link> 
                                                            <span className="comment-reply">
                                                                <Link to={process.env.PUBLIC_URL + "/single-blog"}>Reply</Link>
                                                            </span>
                                                        </strong>
                                                        <span className="comment-date">29 Jan 2019</span>
                                                        <p>Lorem ipsum dolor sit amet, in urna molestie tristique. A fermentum sed at faci lisis lacin ia aliquam fusce wisi porta ligula nibh vel congue diam. Sed ligula erat </p>
                                                    </div>
                                                </div>
                                                {/*  comment */} 
                                            </li>
                                        </ul>
                                    </li>
                                </ul> 
                                {/*  comments */} 
                            </div> 
                            {/*  comments list */} 

 
                            {/*  comments box */} 
                            <div className="contact">
                                <div className="contact-form-warper blog-contact">
                                    <div className="contact-warper">
                                        <div className="comments-section-title">
                                            <h4>Leave a Comment</h4>
                                        </div> 
                                        {/*  section title */} 

                                        {/*  Comment Form */}  
                                        <div className="contact-form">
                                            <form action="#" id="contact-form">
                                                <div className="row">
                                                    <div className="col-lg-12 col-xs-12">
                                                        <textarea className="con-field" name="message" id="message" rows="6" placeholder="Your Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-xs-12">
                                                        <input className="con-field" name="name" id="name" type="text" placeholder="Name"/>
                                                    </div>
                                                    <div className="col-lg-6 col-xs-12">
                                                        <input className="con-field" name="email" id="email" type="text" placeholder="Email"/>
                                                    </div>                                
                                                    <div className="col-lg-12 col-xs-12 submit-area"> 
                                                        <button id="submit-contact" className="submit-contact">Post Comment</button>
                                                        <div id="msg" className="message"></div>
                                                    </div>
                                                </div>

                                            </form>
                                        </div> 
                                        {/*  End:Comment Form */}  
                                    </div>
                                </div>
                            </div> 
                            {/*  End: comment box */}  
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

 
export default SingleBlog;