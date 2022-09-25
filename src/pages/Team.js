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
			desc:'A passionate organic farmer and an indulgent, generous person, he is the brain behind ‘DHAAM Organic’. He has been very passionate about his life as an organic farmer who is trying to revive the farming methods which were used since ancient times. He wants to help other farmers to realise the importance of growing crops organically without the use of any chemicals. He follows the adage “Grow Healthy, Eat Healthy, Live Healthy”.'
		},
		{
			id:2,
			name:"Anita Dhankhar Dagar",
			work:"Heart And Soul",
			image:'/assets/images/dhaam_images/anita.webp',
			desc:'The heart and soul of the DHAAM Family. A Proud and ambitious daughter of Indian Air Force Veteran. This has instilled a strong sense of discipline and iron will in her to excel at any and everything she gets her hand on. She along with her soulmate has had a cherished dream of serving people with healthy, nutritious and organic food products. She is the brain behind sales and marketing strategies of these products which Dhaam grows. Currently she is working with Ganga Group of Institutions and also working to achieve the dreams of Dhaam.'
		},
		{
			id:3,
			name:"Sapna Sehrawat",
			work:"Pro Active Social Worker",
			image:'/assets/images/dhaam_images/Sapna sehrawat.webp',
			desc:'Sapna Sehrawat is a pro-active Social worker with the sole aim of touching lives with an optimistic joyful persona. She is a caring and compassionate person who is the Founder/Chairperson of Nishwarth Sewa foundation. This foundation is enthusiastically involved in supporting under privileged weaker section of the society. She has been associated with DHAAM since its nascent phase of conception and has given her valuable inputs to help us reach the pinnacle.'
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
	                    <p className='text-center font-weight-bolder'>{valu.work}</p> 
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

			<Breadcrumb title="People Behind Dhaam" />
		
			{/*====================  End of breadcrumb area  ====================*/} 

			<section className="team_section">	
				<div className="container">	
					{/*<div className="base-header"> */}
					{/*	<h3>DHAAM FAMILY</h3>*/}
					{/*</div>*/}
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