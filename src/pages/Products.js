import React , {Component, Fragment } from 'react'; 
import {Link} from 'react-router-dom'; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";

class About extends Component{
    
    render(){
        const productArray = [
            {
                image:'product_1.png',
                title:' Juicy Grapes ',
                price:'$46.00',
                sales:'6%',
            },
             {
                image:'product_2.png',
                title:' Red Watermelon ',
                price:'$56.00',
                sales:'',
            },
            {
                image:'product_3.png',
                title:' Juicy Orange ',
                price:'$46.00',
                sales:'',
            },
            {
                image:'product_4.png',
                title:' Fresh Banana ',
                price:'$46.00',
                sales:'5%',
            },
            {
                image:'product_1.png',
                title:' Juicy Grapes ',
                price:'$46.00',
                sales:'6%',
            },
             {
                image:'product_2.png',
                title:' Red Watermelon ',
                price:'$56.00',
                sales:'',
            },
            {
                image:'product_3.png',
                title:' Juicy Orange ',
                price:'$46.00',
                sales:'',
            },
            {
                image:'product_4.png',
                title:' Fresh Banana ',
                price:'$46.00',
                sales:'5%',
            },
        ]
     
        const productMap = productArray.map((valu, i) => {
            return(

                <div className="col-md-3 col-sm-12" key={i}> 
                    <div className="product_wrp">
                        <div className="product_img"> 
                            <img src={`assets/images/${valu.image}`} alt="product" />
                            <div className="on_sale">
                                <span>{valu.sales}</span>
                            </div>
                        </div>
                        <div className="product_info">
                            <h4>{valu.title}</h4> 
                            <ul className="product_rating">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li> 
                                <li><i className="fa fa-star"></i></li> 
                                <li><i className="fa fa-star"></i></li> 
                                <li><i className="fa fa-star"></i></li> 
                            </ul>
                            <span className="product_price">{valu.price}</span>
                        </div>
                        <div className="project_view">
                            <Link to="#/"><i className="icon-glyph-13"></i></Link>
                            <Link to="#/" className="project-link"><i className="icon-glyph-52"></i></Link>
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

           <div className="shop-page">

                {/*====================  breadcrumb area ====================*/}

                <Breadcrumb title="Our Products" />
                
                {/*====================  End of breadcrumb area  ====================*/} 


  
                {/*==================== Team Mamber area  ====================*/} 

                <section className="product-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 product_orderby">
                                <p className="product_count">Showing 1–8 of 12 results</p>
                                <form className="product_ordering">
                                    <select name="orderby" className="orderby">
                                        <option value="menu_order">Default sorting</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by newness</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className="row">

                            {productMap}

                            <div className="prodt_pagination">
                                <ul>
                                    <li><Link to={process.env.PUBLIC_URL + "/shop"} className="page_number current">1</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/shop"} className="page_number">2</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/shop"} className="page_number">→</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====================  End Team Mamber area  ====================*/}  

            </div>
            
            </LayoutOne>
        </Fragment>

        );
    }
}

export default About;   