import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Slides from '../components/Slides';
import AboutContent from '../components/AboutContent';
import Funfact from '../components/Funfact';
import WorkProcess from '../components/WorkProcess';
import ChooseUs from '../components/ChooseUs'; 
import OurCategories from '../components/OurCategories';   
import Team from '../components/Team';  
import Testimonial from '../components/Testimonial';  
import GalleryContent from '../components/GalleryContent';  

// import Gallery from '../pages/Gallery';
// import ClinetCarousel from '../components/ClinetCarousel';

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Home</title>
        <meta
          name="description"
          content="Organic Food React JS Template."
        />
      </MetaTags>
      <LayoutOne>
  
      <Slides />
      <AboutContent />
      {/* <ServiceContent /> */}
      <Funfact />
      <WorkProcess />
      <GalleryContent />
      <OurCategories />
      <ChooseUs /> 
      <Team /> 
      <Testimonial />
      {/* <ClinetCarousel /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
