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
import Gallery from './components/Gallery';
import CustomerReviews from './components/customer-reviews/index'
import selectionOfFarmer from "./components/OrganicFood/selection-of-farmer";
import faq from "./components/OrganicFood/faq";
import OurExperts from "./components/OurConcepts/Experts";
import farmLocation from "./components/ContactUs/farm-location/farm-location";
import returnRefund from "./components/ContactUs/return-refund";
import Certification from "./components/OurConcepts/certifications";

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
            path={`${process.env.PUBLIC_URL + '/about-us/customer-reviews'}`}
            component={CustomerReviews}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/gallery/:type'}`}
            component={Gallery}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/about-us/dhaam-story'}`}
            component={DhaamStory}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/about-us/certications'}`}
            component={Certification}
          />

          <Route
            path={`${process.env.PUBLIC_URL + '/contact'}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/return-refund-policy'}`}
            component={returnRefund}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/farm-Location'}`}
            component={farmLocation}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/about-us/people-behind-dhaam'}`}
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/organic-food/need'}`}
            component={Need}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/organic-food/phases-in-farming'}`}
            component={Stages}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/organic-food/selection-of-farmer'}`}
            component={selectionOfFarmer}
          />
          <Route
              path={`${process.env.PUBLIC_URL + '/organic-food/faq'}`}
              component={faq}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/our-products'}`}
            component={Category}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/category/:id'}`}
            component={Product}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/about-us/experts'}`}
            component={OurExperts}
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
