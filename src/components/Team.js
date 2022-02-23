import React,{Component} from 'react'; 
import { ExternalLink } from 'react-external-link';

 
class Team extends Component{


	state = {
		heading: 'Meet Our Farmers',
		subHeading: 'Our Team Mamber',
	}

    render(){

    const teamlistArray = [
        {
            image:'team1.jpg',
            name:'Ben Stcoks',
            designation:'Food Farmer', 
        },
         {
            image:'team3.jpg',
            name:'Adam Crew',
            designation:'Crop Farmer', 
        },
        {
            image:'team2.jpg',
            name:'Moris Jon',
            designation:'Fruit Farmer', 
        },
    ]
 

    const teamlistMap = teamlistArray.map((valu, i) => {
        return(

            <div className="col-md-4 col-sm-12" key={i}> 
                <div className="team_wrp">
                    <div className="team_img"> 
                        <img src={`assets/images/${valu.image}`} alt="team" />
                    </div>
                    <div className="team_info">  
                        <h4>{valu.name}</h4>
                        <p>{valu.designation}</p>
                        <ul className="social list-inline">
                            <li>
                                <ExternalLink href="https://facebook.com"><i className="fa fa-facebook"></i></ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href="https://twitter.com"><i className="fa fa-twitter"></i></ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href="https://linkedin.com"><i className="fa fa-linkedin"></i></ExternalLink> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        )
    });

    return(
 
    <section className="team-section" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/bg_3.jpg"})` }}>
        <div className="container">
            <div className="base-header">
                <small>{this.state.subHeading} </small>  
                <h3>{this.state.heading}</h3> 
            </div>
            <div className="row">

				{teamlistMap}

            </div>
        </div>
    </section>

        )

    }
}

 
export default Team;