import React, {Component, Fragment} from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../../layouts/LayoutOne";
import Breadcrumb from "../../reusables/Breadcrumb";
import {ExternalLink} from "react-external-link";

class  Certification extends Component {
    render()
    {
        const certificationArray = [
            {
                id: 1,
                name: "PGS India Organic",
                work: " PGS Certification General Manager",
                image: '/assets/images/dhaam_images/psg-logo.jpeg',
                desc: 'PGS-India (Participatory Guarantee System of India) is a quality assurance initiative that is locally relevant, emphasize the participation of stakeholders, including producers and consumers and operate outside the frame of third party certification. National Project on Organic Farming (NPOF) is a continuing central sector scheme since 10th Five Year Plan.'
            },
            {
                id: 2,
                name: "Jaivik Bharat",
                work: "Organic Farming Expert",
                image: '/assets/images/dhaam_images/jaivik bharat.png',
                desc: 'The unified logo is an identity mark to distinguish organic food products from non-organic ones supported with the tagline “Jaivik Bharat” at the bottom, which signifies Organic Food from India. Effectively intertwining all the elements of environment, the logo communicates adherence to the National Organic Standards.\n' +
                    '\n' +
                    'The new green logo bears a circle, leaf and a tick mark. The circle represents global holistic wellness, the leaf represents nature, and the tick mark denotes the product as FSSAI certified.\n' +
                    '\n'
            }
        ]
        const Certification = certificationArray.map((valu, i) => {
            return (
                <div className="col-md-6 col-sm-12 h-100" key={i}>
                    <div className="team_wrp height_custom">
                        <div className="team_img">
                            <img src={`${valu.image}`} alt="team"/>
                        </div>
                        <div className="team_info">
                            <h4>{valu.name}</h4>
                            <p>{valu.work}</p>
                            <p className="f-12">{valu.desc}</p>
                        </div>
                    </div>
                </div>
            )
        });
        return(
            <Fragment>
                <MetaTags>
                    <title>Dhaam Organic| Certications</title>
                    <meta
                        name="description"
                        content="Certications"
                    />
                </MetaTags>
                <LayoutOne>

                    <div className="certifications">

                        {/*====================  breadcrumb area ====================*/}

                        <Breadcrumb title="certifications" />

                        {/*====================  End of breadcrumb area  ====================*/}

                        <section className="Certications_section">
                            <div className="container">
                                <div className="row justify-content-center">
                                    {Certification}
                                </div>
                            </div>
                        </section>
                    </div>
                </LayoutOne>
            </Fragment>
        )
    }
}
export default Certification