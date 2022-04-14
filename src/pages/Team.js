import React,{Component, Fragment} from 'react';
import { ExternalLink } from 'react-external-link';
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/reusables/Breadcrumb";

class Team extends Component{
	render(){

	const teamlistarray = [
		{
			id:1,
			name:"Adama",
			work:"Web Dev", 
			image:'assets/images/team1.jpg'
		},
		{
			id:2,
			name:"Few",
			work:"De Dev",
			image:'assets/images/team2.jpg'
		},
		{
			id:3,
			name:"Crew",
			work:"Fe Dev",
			image:'assets/images/team3.jpg'
		},
		{
			id:4,
			name:"Few",
			work:"De Dev",
			image:'assets/images/team2.jpg'
		},
		{
			id:5,
			name:"Adama",
			work:"Web Dev", 
			image:'assets/images/team1.jpg'
		},
		{
			id:5,
			name:"Crew",
			work:"Fe Dev",
			image:'assets/images/team3.jpg'
		},
	]
 

    const teamlistmap = teamlistarray.map((valu, i) => {
        return(

			<div className="col-md-4 col-sm-12" key={i}>
				<div className="team_wrp">
	                <div className="team_img"> 
	                    <img src={`${valu.image}`} alt="team" />
	                </div>
	                <div className="team_info">
	                    <h4>{valu.name}</h4>
	                    <p>{valu.work}</p> 
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
        <Fragment>
        <MetaTags>
          <title>Dhaam Organic| Team</title>
          <meta
            name="description"
            content="Organic Food React JS Template."
          />
        </MetaTags>
        <LayoutOne>

		<div className="team-page">
 
			{/*====================  breadcrumb area ====================*/}

			<Breadcrumb title="Our Team" />
		
			{/*====================  End of breadcrumb area  ====================*/} 

			<section className="team_section">	
				<div className="container">	
					<div className="base-header"> 
						<h3>Our Team Member</h3>
					</div>
					<div className="row">
						{teamlistmap}
					</div>
				</div>
			</section>
		</div>

		</LayoutOne>
	</Fragment>

 	)

	}
}

 
export default Team;