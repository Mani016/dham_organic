import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../reusables/Breadcrumb";
import Slides from "../Gallery/TestimonialsGallery/Slides";

const customerReview = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Customer Reviews</title>
        <meta name="description" content="Organic Food" />
      </MetaTags>
      <LayoutOne>
        {/*====================  breadcrumb area ====================*/}

        <Breadcrumb title="Customer Reviews" />

        {/*====================  End of breadcrumb area  ====================*/}
        <div className="single_service">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12 ">
                <div className="about_item_tb">
                  <div className="about_item_tbcell">
                    <div className="base-header base_header_left">
                      <small></small>
                      <h3>Testimonials To Prove Our Acumen</h3>
                    </div>

                    <div className="about_item">
                      <h4>Vigilant Of Deadlines, and Committed</h4>
                      <p>
                        We have won continuously countless accolades for our
                        efforts. We have numerous testimonials to prove our
                        acumen. We don’t create this concept of Organic Farming
                        in a vacuum but try to fit our visions into the
                        standards of your requirements.
                      </p>
                      <p>
                        Our expertise in the wide and varied field of Organic
                        Farming comes from validations given by specialists.
                        These are individuals that hail from assorted
                        backgrounds with vast experience in the field.
                      </p>
                      <p>
                        Our valued patrons find the prices of our products to be
                        competitive and fair. Any unexpected or additional
                        expenses must be pre-approved by you.
                      </p>
                      <p>
                        We are momentously grateful to have patrons and clients
                        who treat us with friendliness and affection which gives
                        us motivation to excel in our field and provide you
                        products that are unsurpassed in quality and nutrition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <Slides />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default customerReview;
