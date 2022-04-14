import React,{Component} from 'react'; 


class WorkProcess extends Component{

    render(){

    const workProcesstArray = [
        {
            image:'process_1.png',
            number:'01',
            title:'Step 01',
            description: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . ',
            arrowIcon:'shape1.png',
        },
        {
            image:'process_2.png',
            number:'02',
            title:'Step 02',
            description: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . ',
            arrowIcon:'shape2.png',
        },
        {
            image:'process_3.png',
            number:'03',
            title:'Step 03',
            description: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . ',
            arrowIcon:'shape1.png',
        },
        {
            image:'process_4.png',
            number:'04',
            title:'Step 04',
            description: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . ',
            arrowIcon:'shape1.png',
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
                <small>Working Process</small>
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
