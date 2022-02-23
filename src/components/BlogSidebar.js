import React,{Component} from 'react';
import {Link} from 'react-router-dom'; 

class BlogSidebar extends Component{
	render(){

    /*  Recent Post */
	const reacentPost = [
		{
            image:"blog1.jpg",
			date:"1st Dec 2015",
			title:"How to Eat Foods",
            link: "single-blog",  
		},
        {
            image:"blog2.jpg",
            date:"1st Dec 2015",
            title:"How to Eat Foods",
            link: "single-blog",  
        },
        {
            image:"blog2.jpg",
            date:"1st Dec 2015",
            title:"How to Eat Foods",
            link: "single-blog",  
        },
	]

    /*  Post Categories  */
    const postCategories = [
        {
            title:"Juicy Grapes",
            link: "single-blog",  
        },
        {
            title:"Red Watermelon",
            link: "single-blog",  
        },
        {
            title:"Native Orange",
            link: "single-blog",  
        },
        {
            title:"Juicy Grapes",
            link: "single-blog",  
        },
        {
            title:"Fresh Banana",
            link: "single-blog",  
        },
    ]

    /*  Post Tag  */
    const postTag = [
        {
            name:"Food",
            link: "single-blog",  
        },
        {
            name:"Red",
            link: "single-blog",  
        },
        {
            name:"Grapes",
            link: "single-blog",  
        },
        {
            name:"Fresh",
            link: "single-blog",  
        },
        {
            name:"Banana",
            link: "single-blog",  
        },
    ]

    /*  Recent Post */
    const reacentPostMap = reacentPost.map((val, i) => {
        return( 
            <div className="recent-post-box" key={i}>
                <div className="recnt_pst_imge"> 
                    <img src={`assets/images/${val.image}`} alt="" />
                </div> 
                <div className="recent-title">
                     <span><i className="fa fa-calendar"></i>{val.date}</span>
                    <Link to={`${val.link}`}>{val.title}</Link>
                </div>
            </div>
        )
    });

    /*  Post Categories */
    const postCategoriesMap = postCategories.map((val, i) => {
        return( 
            <li key={i}>
                <Link to={`${val.link}`}> {val.title}</Link>
            </li>
        )
    });

    /*  Post Tag */
    const postTagMap = postTag.map((val, i) => {
        return( 
            <Link to={`${val.link}`} key={i}> {val.name}</Link>
        )
    });


	return(
        <div className="col-md-3 col-sm-12 widget-area">
        {/* Widget Search */} 
        <aside className="widget widget-search">
            {/* input-group */} 
            <div className="input-group">
                <input className="form-control" placeholder="Search" type="text"/>
                <span className="input-group-btn">
                    <button type="button"><i className="fa fa-search"></i></button>
                </span>
            </div>
            {/* input-group */} 
        </aside>
        {/* Widget Search */} 

        {/* Recent Post */} 
        <aside className="widget wiget-recent-post">
            <h3 className="widget-title">Recent Post</h3>

            {reacentPostMap}

        </aside>
        {/* Recent Post */} 
        
        {/* Post Categories */} 
        <aside className="widget widget-post-categories">
            <h3 className="widget-title">Post Categories</h3>
            <ul className="categories-type">
                {postCategoriesMap}
            </ul>
        </aside>
        {/* Post Categories */} 

        {/* Widget Tags */} 
        <aside className="widget widget-tags">
            <h3 className="widget-title">Top Tags</h3>
            {postTagMap}
        </aside>
        {/* Widget Tags */} 

        </div>
 	)

	}
}

 
export default BlogSidebar;