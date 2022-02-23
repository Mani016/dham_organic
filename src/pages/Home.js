import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Slides from '../components/Slides';
import AboutContent from '../components/AboutContent';
import Funfact from '../components/Funfact';
import WorkProcess from '../components/WorkProcess';
import ChooseUs from '../components/ChooseUs'; 
import ProductsList from '../components/ProductsList';   
import Team from '../components/Team';  
import Testimonial from '../components/Testimonial';  
// import Gallery from '../pages/Gallery';
// import ClinetCarousel from '../components/ClinetCarousel';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>FuodBorne | Home</title>
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
      <ProductsList />
      <ChooseUs /> 
      <Team /> 
      <Testimonial />
      {/* <ClinetCarousel /> */}
      <ContactForm />
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
