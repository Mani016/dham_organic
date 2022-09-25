import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../layouts/LayoutOne';
import AboutContent from '../AboutUs/AboutContent';
import OurCategories from '../Categories/OurCategories';
import Funfact from './Funfact';
import Testimonials from './Testimonials';
const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Home</title>
        <meta name='description' content='Organic Food' />
      </MetaTags>
      <LayoutOne>
        <AboutContent />
        <Funfact />
        <OurCategories />
        <Testimonials />
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
