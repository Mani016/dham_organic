import React,{Component} from 'react'; 


class WorkProcess extends Component{

    render(){

    const workProcesstArray = [
        {
            image:'process_1.webp',
            number:'01',
            title:'Step 01',
            description: 'First and Foremost, we grow crops in our farms using holistic system of Organic Farming.',
            arrowIcon:'shape1.webp',
        },
        {
            image:'process_1.webp',
            number:'02',
            title:'Step 02',
            description: 'As the crops mature, they have to be harvested and cereals and grains are dried for storage. Fruits and vegetables are stored in a way to keep their freshness intact without use of chemicals.',
            arrowIcon:'shape1.webp',
        },
        {
            image:'process_2.webp',
            number:'02',
            title:'Step 02',
            description: 'These food stuffs are then sent over to be either ground to make flours or Whole grain products. Vegetables are used to make pickles which are packed. Fresh fruits and vegetables are packed to be delivered.',
            arrowIcon:'shape2.webp',
        },
        {
            image:'process_3.webp',
            number:'03',
            title:'Step 03',
            description: 'Delivery team members who are the connecting link between Farmers and Customers collect all the products.',
            arrowIcon:'shape1.webp',
        },
        {
            image:'process_4.webp',
            number:'04',
            title:'Step 04',
            description: 'These products are then delivered to our customers so that they can enjoy the freshness and health of Fresh Organic Products.',
            arrowIcon:'shape1.webp',
        },
    ]
 
    const workProcesstMap = workProcesstArray.map((valu, i) => {
        return(

            <div className="col-md-3 col-sm-12" key={i}> 
                <div className="process-item">
                    <div className="img_process"> 
                        <img src={`assets/images/${valu.image}`} alt="" />
                        <span>{valu.number}</span>
                        <div className="angle_icon"> 
                            <img src={`assets/images/${valu.arrowIcon}`} alt="" />
                        </div>
                    </div>
                    <div className="process_text">
                        <h4>{valu.title}</h4>
                        <p>{valu.description}</p> 
                    </div>  
                </div> 
            </div> 

        )
    });

    return(
    <section className="process-section" id="how-it-done">
        <div className="container">

             {/* Heading */}
             <div className="base-header">
                <small>MODES OF OPERATION</small>
                <h3>How does we work</h3>
             </div>  
        	{/* End: Heading */}

            <div className="row">

				{workProcesstMap}

            </div>
        </div>
    </section>
        )

    }
}

 
export default WorkProcess;
