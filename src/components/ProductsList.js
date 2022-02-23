 
import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class ProductsList extends Component{

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

		<section className="product-section">
		    <div className="container">
		        <div className="base-header">
		            <small> Our Featured Products</small>  
		            <h3> Organic products</h3> 
		        </div>
		        <div className="row">

		            {productMap}

		        </div>
		    </div>
		</section>

        )

    }
}

 
export default ProductsList;