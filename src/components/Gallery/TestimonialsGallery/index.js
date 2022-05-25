import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Breadcrumb from '../../reusables/Breadcrumb';
import LayoutOne from '../../../layouts/LayoutOne';
import Slides from './Slides';
const TestimonialsGallery = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Organic Farming</title>
        <meta name='description' content='Organic Food' />
      </MetaTags>
      <LayoutOne>
        <div className='single-services-page'>
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title='Testimonials Gallery' />

          {/*====================  End of breadcrumb area  ====================*/}

          {/*====================  Single Services area ====================*/}
          <div className='single_service'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-sm-12 m-auto'>
                  <div className='about_item_tb'>
                    <div className='about_item_tbcell'>
                      <div className='base-header base_header_left'>
                        <small></small>
                        <h3>Testimonials To Prove Our Acumen</h3>
                      </div>

                      <div className='about_item'>
                        <h4>Vigilant Of Deadlines, and Committed</h4>
                        <p>
                          Yes, we have won accolades for our work. We also have
                          many testimonials to prove our acumen. But we don’t
                          create this concept of Organic Farming in a vacuum but
                          try to fit into the standards of your requirements.
                        </p>
                        <p>
                          First Impressions is comprised of specialists with
                          Organic Farming experience that hail from various
                          backgrounds. Our prices are competitive and fair.
                          There are no surprise elements. Any unexpected or
                          additional expenses must be pre-approved by you.
                          That’s how we would like to be treated, and that is
                          how our clients are treated.
                        </p>
                      </div>
                      <div className='about_item'>
                        <h4>Farmers with Purpose of Organic </h4>
                        <p>
                          We as your Farmers would love to serve you with finest
                          quality food that surpasses all yardsticks. We serve
                          our own families with the food products which are from
                          our very own farms. It’s our attention to even the
                          smallest stuff and sharing each and every detail of
                          growing crops and getting the finished product to your
                          plates that makes us stand out from the rest. You want
                          results. We have found that the best way to get them
                          is with up front research where we try to understand
                          all the requirements our customers have ad how we can
                          fulfil them. We are getting you products which we grow
                          in our own farms with the help from other farmers and
                          with methods which keep the nutrient content balanced.
                          There is no use of chemicals so there are no side
                          effects on health of people consuming our food. This
                          is the most important role we want to play in your
                          life – Farmers with Purpose of Organic
                        </p>
                        <p>
                          We always meet the deadlines of delivering you
                          happiness on time which is our first and foremost
                          priority. Our team of dedicated delivery persons are
                          always on time with your deliveries. We are vigilant
                          of deadlines, and committed to exceeding client
                          expectations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                  <Slides />
                </div>
              </div>
            </div>
          </div>
          {/*====================  End Single Services area ====================*/}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default TestimonialsGallery;
