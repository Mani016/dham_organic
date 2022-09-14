import React, { Fragment } from "react";
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../reusables/Breadcrumb';
import Slides from "../Gallery/TestimonialsGallery/Slides";

const customerReview = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Dhaam Organic| Customer Reviews</title>
                <meta name='description' content='Organic Food'/>
            </MetaTags>
            <LayoutOne>
                {/*====================  breadcrumb area ====================*/}

                <Breadcrumb title='Customer Reviews' />

                {/*====================  End of breadcrumb area  ====================*/}
                <div className='single_service'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8 col-sm-12 '>
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
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <Slides />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default customerReview