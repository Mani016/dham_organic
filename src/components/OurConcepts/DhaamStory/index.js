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
        <div className=''>
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title='Dhaam Organic' />

          {/*====================  End of breadcrumb area  ====================*/}

          {/* Organic Farming Content */}
          <div className='organic_farming_content'>
            <div className='container '>
              <div className='row'>
                <div className='col-sm-12 col-lg-12'>
                  <h1>
                    <b>DHAAM STORY</b>
                  </h1>
                  <p className="text-justify">
                    ‘Dhaam Organic’ is a joint initiative by the 8<sup>th</sup> generation
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
                  </p>
                  <p>
                    <h4 className= "mt-5">
                      <b>OUR CONCEPTS</b>
                    </h4>
                    We at ‘Dhaam Organic’ nurture and cultivate plants without
                    the use of any chemical fertilisers , pesticides or GMOs. We
                    bring you these Food Products that are unsurpassed in
                    Quality and excellence, and one of the finest products in
                    the arena of Organic Farming. All the products that we
                    deliver will always be Fresh, Healthy, Eco-friendly and
                    Premium in their taste.
                  </p>
                  <p>
                    <h4 className="mt-5">
                      <b>OUR MISSION</b>
                    </h4>
                    Our Mission is to be an authentic FOOD brand which provides genuine unadulterated organic food products for fulfilling day-to-day requirements. We want to inspire and endorse the tradition of over-all wellbeing by consuming our organic healthy products.<br/>

                    At the onset we would like to assure you about the quality and taste of our products which we can easily say is our USP.<br/>

                    This can be testified by your own taste buds when you feel the goodness of Mother Earth and rich flavours in ‘Dhaam Organic’ Produce.<br/>

                    The nutritional value of the food stuffs is unsurpassed. The traditional methods that we use to prepare these products allow maximum nutrition to be retained and these nutrients are released by the food products when you consume them.<br/>
                  </p>
                  <p className="mb-5">
                    <h4 className="mt-5">
                      <b>OUR VISION</b>
                    </h4>
                    As organic moves beyond a niche, DHAAM organic is very clear about what the future holds for us all. The movement needs to be prepared to cope with future environmental challenges and market trends.
                    Hence DHAAM Organic has led a participatory vision and strategy process to prepare the movement to proactively face the future with its step-be-step approach.
                    A holistic one-stop-edifice to switch to a sustainable way to life, with a diverse product portfolio that attends to a variety of needs for daily living.
                    A catalyst that promotes better health for farmers and their families, workers and consumers at large, at the same time increasing awareness and education encouraging more and more people to make this very important transition.
                    A unique and uncluttered segment focussed platform with right promotion support to help reach their products to the right consumers.
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
