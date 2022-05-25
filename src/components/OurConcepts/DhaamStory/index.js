import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../../layouts/LayoutOne';
import Slides from './Slides';
import Breadcrumb from '../../reusables/Breadcrumb';

const DhaamStory = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Organic Farming</title>
        <meta name='description' content='Organic Food' />
      </MetaTags>
      <LayoutOne>
        <div className='about-page'>
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title='Welcome To Dhaam Organics' />

          {/*====================  End of breadcrumb area  ====================*/}

          {/* Organic Farming Content */}
          <div className='organic_farming_content'>
            <div className='container '>
              <div className='row'>
                <div className='col-12'>
                <h4>
                    <b>OUR CONCEPTS</b>
                  </h4>
                  <p>
                    We at ‘Dhaam Organics’ nurture and cultivate plants without
                    the use of any chemical fertilisers , pesticides or GMOs. We
                    bring you these Food Products that are unsurpassed in
                    Quality and excellence, and one of the finest products in
                    the arena of Organic Farming. All the products that we
                    deliver will always be Fresh, Healthy, Eco-friendly and
                    Premium in their taste.
                  </p>
                  <img src='http://jvesri.org/images/activites.webp' alt='' />

                </div>
                <div className='col-sm-12 col-lg-12'>
                

                  <h4>
                    <b>DHAAM STORY</b>
                  </h4>
                  <p className="text-justify">
                    ‘Dhaam Organics’ is a joint initiative by the 8th generation
                    of our family tree. Our goal is to become a leading player
                    in the field of biological agriculture.
                    <br /> We wish to be known as Organic Farmers and Food
                    Providers worldwide and not only in Indian Households. The
                    products are grown without the use of synthetic chemicals,
                    such as human-made pesticides and fertilizers, and do not
                    contain genetically modified organisms (GMOs). <br />
                    ‘Eating organic isn't a trend, it's a return to tradition.’
                    Working towards this vision of providing pesticide free,
                    chemical free, unadulterated organic food products to our
                    supporters.
                    <br />
                    Our Mission is to be an authentic FOOD brand which provides
                    genuine unadulterated organic food products for fulfilling
                    day-to-day requirements. We want to inspire and endorse the
                    tradition of over-all wellbeing by consuming our organic
                    healthy products.
                    <br />
                    At the onset we would like to assure you about the quality
                    and taste of our products which we can easily say is our
                    USP.
                    <br />
                    This can be testified by your own taste buds when you feel
                    the goodness of Mother Earth and rich flavours in ‘Dhaam
                    Organics’ Produce. <br />
                    The nutritional value of the food stuffs is unsurpassed. The
                    traditional methods that we use to prepare these products
                    allow maximum nutrition to be retained and these nutrients
                    are released by the food products when you consume them.{' '}
                    <br />
                  </p>
                </div>
                <div className="col-lg-12">
              <Slides />

                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default DhaamStory;
