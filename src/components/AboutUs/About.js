import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../layouts/LayoutOne';
import AboutContent from './AboutContent';
import Breadcrumb from '../reusables/Breadcrumb';

const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| About</title>
        <meta name='description' content='Organic Food' />
      </MetaTags>
      <LayoutOne>
        <div className='about-page'>
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title='About Us' />

          {/*====================  End of breadcrumb area  ====================*/}

          {/*====================  About area ====================*/}

          <AboutContent />

          {/*==================== End:  About area ====================*/}

          {/* About Other Details */}
          <div
            className='container '
            style={{ marginTop: '-80px', marginBottom: '100px' }}
          >
            <div className='row'>
              <div className='col-sm-12'>
                {/* <h4>Lorem, ipsum.</h4> */}
                <p>
                  One such soul, Great Guru Shri Satguru Garib Dass Ji took
                  birth at Karountha village in Distt. Rohtak in Haryana (India)
                  in 1717 A.D. but lived at Chhudani village. He was a deeply
                  religious person concerned about the welfare of ignorant
                  people. He preached that God has many names. He gave an order
                  Gurbani which laid stress on rightful living, compiled as Guru
                  Granth which has become a beacon of light for the direction
                  less society today. All these religious beliefs laid the
                  foundation for birth of DHAAM.
                </p>
           
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default About;
