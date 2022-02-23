import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "../containers/Header";
import Menu from "../containers/Menu";
import Footer from "../containers/Footer"; 

const LayoutOne = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Menu />
      {children}
      <Footer />
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
};

export default LayoutOne;
