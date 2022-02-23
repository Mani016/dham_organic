import React,{Component} from 'react';
import {Link} from 'react-router-dom'; 

 
class BlogList extends Component{

    state = {
        heading: 'Latest news',
        subHeading: 'articles & tips',
    } 

    render(){

    const blogLeftArray = [
        {
            title: 'How To Eat Organic Foods',
            date:'6 Nov 2019',
            link: 'single-blog',
        },
        {
            title: 'How To Eat Organic Foods',
            date:'6 Nov 2019',
            link: 'single-blog',
        }
    ]

    const blogRightArray = [
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
    ]


    const blogLeftMap = blogLeftArray.map((val, i) => {
        return(
            <div className="blog_wrp blog_wrp_list" key={i}> 
                <div className="blog_info"> 
                    <Link to={`${val.link}`}>
                        <h4>{val.title}</h4> 
                    </Link>
                    <div className="blog_date"> 
                        <span> <i className="fa fa-calendar"></i>{val.date}</span>
                    </div>   
                    <span className="blog_read">
                        <Link to={`${val.link}`}>Read more</Link><i className="icon-right-open"></i>  
                    </span>
                </div>
            </div>

        )
    });

    const blogRightMap = blogRightArray.map((valu, i) => {
        return(
            <div className="col-md-6 col-sm-12" key={i}> 
                <div className="blog_wrp">
                    <Link to={`${valu.link}`} className="blog_img"> 
                        <img src={`assets/images/${valu.image}`} alt="" />
                    </Link>
                    <div className="blog_info">
                        <Link to={`${valu.link}`}>
                            <h4>How to Find and Afford Organic Food in Your Area</h4> 
                        </Link> 
                        <div className="blog_date"> 
                            <span> <i className="fa fa-calendar"></i>6 Nov 2019</span>
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
 
       <section className="blog-section">
            <div className="container">
                <div className="row"> 
                    <div className="col-sm-12 col-md-4"> 
                        <div className="base-header base_header_left">
                            <small>{this.state.subHeading} </small>  
                            <h3>{this.state.heading}</h3> 
                        </div>

                        {blogLeftMap}
     
                    </div>    
                    <div className="col-md-8 col-sm-12">
                        <div className="row">

                            {blogRightMap}

                        </div> 
                    </div> 
                </div> 
            </div> 
        </section>

        )

    }
}

 
export default BlogList;