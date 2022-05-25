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
			work:"Brain", 
			image:'/assets/images/dhaam_images/sumit.webp',
			desc:'A passionate organic farmer and an indulgent, generous person, he is the brain behind ‘DHAAM Organics’. He has been very passionate about his life as an organic farmer who is trying to revive the farming methods which were used since ancient times. He wants to help other farmers to realise the importance of growing crops organically without the use of any chemicals. He follows the adage “Grow Healthy, Eat Healthy, Live Healthy”.'
		},
		{
			id:2,
			name:"Anita Dhankar Dagar",
			work:"Heart And Soul",
			image:'/assets/images/dhaam_images/anita.webp',
			desc:'The heart and soul of the DHAAM Family. A Proud and ambitious daughter of Indian Air Force Veteran. This has instilled a strong sense of discipline and iron will in her to excel at any and everything she gets her hand on. She along with her soulmate has had a cherished dream of serving people with healthy, nutritious and organic food products. She is the brain behind sales and marketing strategies of these products which Dhaam grows. Currently she is working with Ganga Group of Institutions and also working to achieve the dreams of Dhaam.'
		},
		{
			id:3,
			name:"Rama Rani Rathee",
			work:"Patron And Supporter",
			image:'/assets/images/dhaam_images/rama_rathee_ji.webp',
			desc:'Our patron and supporter at Dhaam is the Councilor Shrimati Rama Rani Ratheeji who has always been a source of inspiration to all. She is a versatile person with a touch of compassion. She has been actively involved in pushing us and advising us at all the stages of delivering our products. Her blessings have given us the impetus to grow our production and delivery services.'
		},
		{
			id:4,
			name:"Santosh Dagar",
			work:"Iron Lady",
			image:'/assets/images/dhaam_images/santosh_dagar.webp',
			desc:'She is an iron lady who has broken all the norms and notions of people in village. She is a hard-working person who has made her own perceptions about farming organic products and taking care of our cattle and giving us products like Dhaam Pickles with their characteristic aroma and taste.'
		},
	]
 

    const teamlistmap = teamlistarray.map((valu, i) => {
        return(
			<div className="col-md-6 col-sm-12 h-100" key={i}>
				<div className="team_wrp height_custom">
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