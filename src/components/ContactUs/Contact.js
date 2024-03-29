import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../reusables/Breadcrumb";
import agent from "../../agent";
import Alert from "../../Utils/Alert";
import { API_STATUS } from "../../constant";
import { HANDLE_ERROR } from "../../Utils/utils";

const Contact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  function handleSubmit() {
    let formValid = true;
    if (name === "" || mobile === "" || address === "" || message === "") {
      Alert.showToastAlert("warning", "Required fields cannot be empty");
      formValid = false;
    }
    if (mobile !== "") {
      if (mobile.length !== 10) {
        Alert.showToastAlert("warning", "Incorrect Mobile No.");
        formValid = false;
      }
    }
    if (formValid) {
      setLoading(true);
      const data = {
        name: name,
        mobile: Number(mobile),
        address: address,
        message: message,
        status: false,
      };
      agent.Contact.send(data)
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            Alert.showToastAlert("success", res.message);
            setName("");
            setMobile("");
            setAddress("");
            setMessage("");
            setLoading(false);
          } else {
            HANDLE_ERROR(res.message, setLoading);
          }
        })
        .catch((err) => {
          HANDLE_ERROR(err.message, setLoading);
        });
    }
  }

  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Contact Us</title>
        <meta name="description" content="Organic Food" />
      </MetaTags>
      <LayoutOne>
        <div className="contact-page">
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title="Contact Us" />

          {/*====================  End of breadcrumb area  ================*/}

          {/*====================  Contact Form  area  ====================*/}
          <section className="contact-section">
            <div className="container">
              <div className="base-header">
                <small>Get in touch</small>
                <h3>Send Us A Message</h3>
              </div>
              <div className="contact_wrp">
                <div className="row">
                  <div className="col-md-8 col-sm-12 inner-contact">
                    <div className="contact-form">
                      <form method="post" name="contact-form" id="contact-form">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12">
                            <input
                              type="text"
                              id="name"
                              value={name}
                              onChange={({ target }) => setName(target.value)}
                              className="con-field form-control"
                              placeholder="Name*"
                            />
                          </div>
                          <div className="col-lg-6 col-sm-12">
                            <input
                              type="number"
                              className="con-field form-control"
                              value={mobile}
                              onChange={({ target }) => setMobile(target.value)}
                              // id='exampleInputEmail1'
                              placeholder="Mobile*"
                            />
                          </div>
                          <div className="col-lg-12 col-sm-12">
                            <input
                              type="text"
                              id="subject"
                              value={address}
                              onChange={({ target }) =>
                                setAddress(target.value)
                              }
                              className="form-control con-field"
                              placeholder="Your Address*"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-sm-12">
                            <textarea
                              name="comments"
                              id="comments"
                              value={message}
                              onChange={({ target }) =>
                                setMessage(target.value)
                              }
                              rows="6"
                              className="form-control con-field"
                              placeholder="Your Message*"
                            ></textarea>
                            <div className="submit-area">
                              <input
                                type="button"
                                id="submit"
                                name="send"
                                onClick={handleSubmit}
                                disabled={loading}
                                className="submit-contact submitBnt"
                                value="Send Message"
                              />
                              <div id="simple-msg"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/*===  Contact Details  ===*/}
                  <div className="col-md-4 col-sm-12">
                    <div className="contact_pg_address">
                      <h3>
                        Discover the nutritious food with DHAAM <br />
                      </h3>
                      <div className="single_con_add">
                        <a href="#/">
                          <i className="icon-glyph-226"></i>
                        </a>
                        <p>
                          <span>Farm Address :</span>
                        </p>
                        <address className="mb-0 mb-0 ml-5 pl-3">
                          Village Chhudani Dhaam, Haryana-124504
                        </address>
                      </div>
                      <div className="single_con_add">
                        <a href="#/">
                          <i className="icon-glyph-334"></i>
                        </a>
                        <p>
                          <span>Email Address :</span>
                        </p>
                        <a href="mailto:dhaamorganic@gmail.com">
                          dhaamorganic@gmail.com
                        </a>
                      </div>
                      <div className="single_con_add">
                        <a href="#/">
                          <i className="icon-glyph-33"></i>
                        </a>
                        <p>
                          <span>Contact Us :</span>
                        </p>
                        <p className="d-flex">
                          <a href="tel:9266027544"> 9266027544,</a>
                          <a href="tel:9810179526" className="ml-1">
                            {" "}
                            9810179526
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*===  end: Contact Details  ===*/}
                </div>
              </div>
            </div>
          </section>
          {/*====================  End: Contact Form area  ====================*/}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
