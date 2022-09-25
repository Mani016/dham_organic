import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../../reusables/Breadcrumb";
import LayoutOne from "../../../layouts/LayoutOne";

const returnRefund = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Refund and Return Policy</title>
        <meta name="description" content="Refund and Return Policy" />
      </MetaTags>
      <LayoutOne>
        <div className="Refund and Return Policy">
          <Breadcrumb title="Refund and Return Policy" />
          <section className="contact-section">
            <div className="container">
              <div className="mt-5">
                <div className="row">
                  <div className="col-sm-12 col-lg-12">
                    <h4>RETURN AND REFUND POLICY</h4>
                    <p className="text-justify">
                      As a Farming enterprise, we want all of our customers to
                      be delighted with their purchases. However, there will
                      inevitably be instances when a customer will wish to
                      return a product if he is not content with it. We are
                      delighted to say that we have very Clear and Concise
                      Return and Refund Policy.
                      <br />
                      We offer a 100% Money-Back Guarantee to our valued
                      customers if they have any issues with the merchandise
                      delivered to them. The customers can return items within
                      15 days from the purchase date.
                      <br />
                      The Refund will be processed when the product reaches us.
                      While returning please mention your name and quote the
                      purpose for returning the goods.
                    </p>
                  </div>
                  <div className="col-sm-12 col-lg-12 mt-3 mb-5">
                    <h4>REPLACEMENT POLICY</h4>
                    <p>
                      In some cases, we offer replacement of merchandise to the
                      customer who wants to have replacement in place of total
                      refund. We will ship the Replacement with the delivery
                      partner who will come to pick the Return Order.
                      Replacement is subject to availability of specific
                      products at our end. In case replacement is not available
                      we will give 100% refund for the returned item.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default returnRefund;
