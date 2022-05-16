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
			name:"Sumit Dagar",
			work:"Web Dev", 
			image:'assets/images/team1.jpg',
			desc:'A passionate farmer and an indulgent, generous person, he is the brain behind ‘DHAAM Organics’'
		},
		{
			id:2,
			name:"ANITA DHANKAR DAGAR ",
			work:"De Dev",
			image:'assets/images/team2.jpg',
			desc:'The heart and soul of the DHAAM Family'
		},
	]
 

    const teamlistmap = teamlistarray.map((valu, i) => {
        return(
			<div className="col-md-4 col-sm-12 h-100" key={i}>
				<div className="team_wrp">
	                <div className="team_img"> 
	                    <img src={`${valu.image}`} alt="team" />
	                </div>
	                <div className="team_info">
	                    <h4>{valu.name}</h4>
	                    <p>{valu.work}</p> 
						<p className="f-12">{valu.desc}</p>
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
            content="Organic Food"
          />
        </MetaTags>
        <LayoutOne>

		<div className="team-page">
 
			{/*====================  breadcrumb area ====================*/}

			<Breadcrumb title="KNOW YOUR DHAAM FAMILY" />
		
			{/*====================  End of breadcrumb area  ====================*/} 

			<section className="team_section">	
				<div className="container">	
					<div className="base-header"> 
						<h3>DHAAM FAMILY</h3>
					</div>
					<div className="row justify-content-center">
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