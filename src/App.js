import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Services from "./pages/Services";  
import Gallery from "./pages/Gallery"; 
import Contact from "./pages/Contact"; 
import SingleService from "./pages/SingleService"; 
import Team from "./pages/Team";  
import SingleShop from "./pages/SingleShop"; 
import BlogPageTwo from "./pages/BlogPageTwo"; 
import BlogPageOne from "./pages/BlogPageOne"; 
import SingleBlog from "./pages/SingleBlog"; 
import Cart from "./pages/Cart"; 
import Checkout from "./pages/Checkout"; 
import NotFound from "./pages/NotFound"; 
import OrganicFarming from "./pages/OrganicFarming";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/dashboard/UserDashboard";
import MyCart from "./components/dashboard/MyCart";
import Profile from "./components/dashboard/Profile";
import Category from "./pages/Categorys";
import Product from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={Home}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home"}`}
            component={Home}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/services"}`}
            component={Services}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/gallery"}`}
            component={Gallery}
          />
           <Route
            path={`${process.env.PUBLIC_URL + "/organic-farming"}`}
            component={OrganicFarming}
          />
          
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/single-services"}`}
            component={SingleService}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/categories"}`}
            component={Category}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/category/:id"}`}
            component={Product}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/product/:id"}`}
            component={SingleProduct}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={BlogPageOne}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-two"}`}
            component={BlogPageTwo}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/single-blog"}`}
            component={SingleBlog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/single-blog"}`}
            component={SingleService}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/cart"}`}
            component={Cart}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/my-cart"}`}
            component={MyCart}
          />
           <Route
            path={`${process.env.PUBLIC_URL + "/dashboard/my-profile"}`}
            component={Profile}
          />
          
          <Route
            path={`${process.env.PUBLIC_URL + "/checkout"}`}
            component={Checkout}
          />
           <Route
            path={`${process.env.PUBLIC_URL + "/login"}`}
            component={Login}
          />
           <Route
            path={`${process.env.PUBLIC_URL + "/sign-up"}`}
            component={SignUp}
          />
           {/* <Route
            path={`${process.env.PUBLIC_URL + "/dashboard"}`}
            component={UserDashboard}
          /> */}
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
