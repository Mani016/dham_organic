import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../layouts/LayoutOne';
import Team from './Team';
import AboutContent from '../AboutUs/AboutContent';
import OurCategories from '../Categories/OurCategories';
import GalleryContent from '../Gallery/GalleryContent';
import Funfact from './Funfact';
import Slides from './Slides';
import WorkProcess from './WorkProcess';
import ChooseUs from './ChooseUs';
import Experts from './Experts';
import Testimonials from './Testimonials';
const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Home</title>
        <meta name='description' content='Organic Food' />
      </MetaTags>
      <LayoutOne>
        <Slides />
        <AboutContent />
        <Funfact />
        <WorkProcess/>
        <GalleryContent type="EVENT"/>
        <OurCategories />
        <Experts/>
        <ChooseUs />
        <Team />
        <Testimonials />
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
