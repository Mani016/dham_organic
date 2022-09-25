import React, { Component, Fragment } from "react";
import { ExternalLink } from "react-external-link";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../../layouts/LayoutOne";
import Breadcrumb from "../../../components/reusables/Breadcrumb";

class OurExperts extends Component {
  render() {
    const teamlistarray = [
      {
        id: 1,
        name: "Dr. Rishi",
        work: " PGS Certification General Manager",
        image: "/assets/images/dhaam_images/Dr Rishi.webp",
        desc:
          "Getting the certification is one of the important steps in starting the organic farming. So, when we wanted to start organic farming to cater to the domestic need for organic produce, we contacted Dr. Rishi who provided us with PGS Certification for Organic Farming." +
          "PGS is a process of certifying organic products, which ensures that their production takes place in accordance with laid-down quality standards. The certification is in the form of a documented logo or a statement." +
          "Dr. Rishi also provides us with his expertise in soil testing, crop quality testing and biological fertilisers. His aim is to unify India under Organic Food umbrella.",
      },
      {
        id: 2,
        name: "Dr. Dharmesh Varma",
        work: "Organic Farming Expert",
        image: "/assets/images/dhaam_images/dharmesh varma.webp",
        desc: (
          <>
            Dr. Dharmesh Verma provides us with his valuable inputs in the day
            to day obstacles that arise in the fields with crops and other
            related issues. He is an experienced Agriculture Expert and our very
            own crop doctor with wide range of work concerned with the
            well-being and health of crops. He thinks critically to solve
            problems concerning planting, cultivating, harvesting and protecting
            crops from pests, weeds and harsh climates. He has helped us in
            preparing two important lifelines of Organic Farming.
            <br />
            1) Jeevamrit, a microbial culture, prepared especially from dung and
            urine of Indian cow is generally advocated for use in organic
            farming to meet nutritional requirement of crops.
            <br />
            2) Panchagavya, an organic product that has the potential to play
            the role of promoting growth and providing immunity in plant system.{" "}
          </>
        ),
      },
    ];

    const teamlistmap = teamlistarray.map((valu, i) => {
      return (
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
                  <ExternalLink href="https://facebook.com">
                    <i className="fa fa-facebook"></i>
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://twitter.com">
                    <i className="fa fa-twitter"></i>
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://linkedin.com">
                    <i className="fa fa-linkedin"></i>
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <MetaTags>
          <title>Dhaam Organic| Team</title>
          <meta name="description" content="Organic Food" />
        </MetaTags>
        <LayoutOne>
          <div className="team-page">
            {/*====================  breadcrumb area ====================*/}

            <Breadcrumb title="Experts" />

            {/*====================  End of breadcrumb area  ====================*/}

            <section className="team_section">
              <div className="container">
                <div className="row justify-content-center">{teamlistmap}</div>
              </div>
            </section>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}

export default OurExperts;
