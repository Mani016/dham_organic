import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop';
import Home from './components/Home/Home';
import About from './components/AboutUs/About';
import Contact from './components/ContactUs/Contact';
import Team from './pages/Team';
import Cart from './components/User/Cart';
import NotFound from './pages/NotFound';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import Profile from './components/User/Profile';
import Product from './components/Products';
import ProductDetails from './components/Products/ProductDetails';
import Category from './components/Categories/Categories';
import DhaamStory from './components/OurConcepts/DhaamStory';
import Need from './components/OrganicFood/Need';
import Stages from './components/OrganicFood/Stages';
import FarmGallery from './components/Gallery/FarmGallery';
import EventGallery from './components/Gallery/EventGallery';
import ProductsGallery from './components/Gallery/ProductsGallery';
import TestimonialsGallery from './components/Gallery/TestimonialsGallery/index';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + '/'}`}
            component={Home}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/home'}`}
            component={Home}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/our-concepts/about-us'}`}
            component={About}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/farm-gallery'}`}
            component={FarmGallery}
          />
           <Route
            path={`${process.env.PUBLIC_URL + '/event-gallery'}`}
            component={EventGallery}
          />
             <Route
            path={`${process.env.PUBLIC_URL + '/testimonials-gallery'}`}
            component={TestimonialsGallery}
          />
            <Route
            path={`${process.env.PUBLIC_URL + '/products-gallery'}`}
            component={ProductsGallery}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/our-concepts/dhaam-story'}`}
            component={DhaamStory}
          />

          <Route
            path={`${process.env.PUBLIC_URL + '/contact'}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/our-concepts/team'}`}
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/organic-food/need'}`}
            component={Need}
          />
           <Route
            path={`${process.env.PUBLIC_URL + '/organic-food/stages'}`}
            component={Stages}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/categories'}`}
            component={Category}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/category/:id'}`}
            component={Product}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/product/:id'}`}
            component={ProductDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/checkout'}`}
            component={Cart}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/my-account'}`}
            component={Profile}
          />

          <Route
            path={`${process.env.PUBLIC_URL + '/login'}`}
            component={Login}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/sign-up'}`}
            component={SignUp}
          />
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
