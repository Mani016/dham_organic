import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Gallery from "./pages/Gallery"; 
import Contact from "./pages/Contact"; 
import Team from "./pages/Team";  
import Cart from "./pages/Cart"; 
import NotFound from "./pages/NotFound"; 
import OrganicFarming from "./pages/OrganicFarming";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/dashboard/Profile";
import Category from "./pages/Categories";
import Product from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
// import UserDashboard from "./pages/ProductDetails";

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
            component={ProductDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/cart"}`}
            component={Cart}
          />
           <Route
            path={`${process.env.PUBLIC_URL + "/my-account"}`}
            component={Profile}
          />
          
           <Route
            path={`${process.env.PUBLIC_URL + "/login"}`}
            component={Login}
          />
           <Route
            path={`${process.env.PUBLIC_URL + "/sign-up"}`}
            component={SignUp}
          />
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
