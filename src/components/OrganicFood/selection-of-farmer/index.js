import React, { Fragment } from "react";
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../../layouts/LayoutOne';
import Breadcrumb from '../../reusables/Breadcrumb';

const selectionOfFarmer = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Dhaam Organic| Selection Of Farmer</title>
                <meta name='description' content='Organic Food'/>
            </MetaTags>
            <LayoutOne>
                {/*====================  breadcrumb area ====================*/}

                <Breadcrumb title='Selection Of Farmer' />

                {/*====================  End of breadcrumb area  ====================*/}
                <div className='single_service'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 col-sm-12 '>
                                <div className='about_item_tb'>
                                    <div className='about_item_tbcell'>
                                        <div className='base-header base_header_left'>
                                            <small></small>
                                            <h3>Farmers with Resolve of Organic</h3>
                                        </div>

                                        <div className='about_item'>
                                            <p>
                                                We as your ‘Friendly Neighbourhood Farmers’ would love to serve
                                                you with finest quality food that surpasses all yardsticks.
                                            </p>
                                            <p>
                                                We bring the products on your tables which are from our very own
                                                farms and we also serve our own families with these food products.
                                                It is our consideration to all the aspects of even the smallest detail
                                                of farming. We love to share each and every element of growing crops
                                                and getting the finished product to your plates that makes us stand
                                                out from the rest.
                                            </p>
                                            <p>
                                                You want optimal outcomes. We have realised that the best way to
                                                get there is with up front research where we try to understand all
                                                the requirements our customers have and how those can be fulfilled.
                                            </p>
                                            <p>
                                                The products which we grow in our own farms with the help of other
                                                farmers and with methods that keep the nutrient content balanced.
                                                There is no use of chemicals so there are no side effects on health
                                                of people consuming our food. This is the most important role we want
                                                to play in your life – Farmers with Resolve of Organic.
                                            </p>
                                            <p>
                                                We always meet the deadlines of delivering you happiness on
                                                time which is our first and foremost priority. Our team of
                                                dedicated delivery persons are always on time with your deliveries.
                                                We are vigilant of deadlines, and committed to exceeding client expectations
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default selectionOfFarmer