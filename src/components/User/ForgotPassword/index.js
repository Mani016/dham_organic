import React, { Fragment } from "react";
import LayoutOne from "../../../layouts/LayoutOne";
import { Link } from "react-router-dom";
import agent from "../../../agent";
import Alert from "../../../Utils/Alert";
import { API_STATUS } from "../../../constant";
import { HANDLE_ERROR } from "../../../Utils/utils";
import loadImg from "../../../assets/images/loading.gif";

const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function handleSubmit() {
    let formIsComplete = true;
    if (email === "") {
      Alert.showToastAlert("warning", "Email is required");
      formIsComplete = false;
    }
    if (formIsComplete) {
      const data = {
        email
      };
      setLoading(true);
      agent.Auth.forgotPassword(data)
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res?.status)) {
            Alert.showToastAlert("success", res?.message, false);
            setLoading(false);
          } else {
            HANDLE_ERROR(res?.message, setLoading);
          }
        })
        .catch((err) => HANDLE_ERROR(err.message, setLoading));
    }
  }

  return (
    <Fragment>
      <LayoutOne>
        <div className="container pt-2">
          <div className="row justify-content-center">
            <div className="col-md-5 col-xs-12 ForgotPassword">
              <div id="ForgotPassword-form-wrapper">
                <div id="ForgotPassword-form">
                  <div className="coupon_info">
                    <div className="register mb-2">
                      <div className="title form-title">Forgot Password ? </div>
                      <br/>
                      Enter your email and we'll send you instructions to reset your password
                      <br/>
                      <Link to="/login" className="text-primary float-right mb-2">
                        {" "}
                     <i className="fa fa-arrow-left"/>   Back To Login
                      </Link>
                    </div>
                    <div>
                    <input
                          type={"email"}
                          placeholder="Enter registered email address"
                          onChange={({ target }) => {
                            setEmail(target.value);
                          }}
                          value={email}
                        />
                      <div className="d-flex my-3 justify-content-center">
                        {loading ? (
                          <img src={loadImg} className="white_load" alt="" />
                        ) : (
                          <input
                            type="button"
                            name="send"
                            onClick={() => {
                              handleSubmit();
                            }}
                            disabled={loading}
                            className="submit-contact submitBnt"
                            value="Send reset instructions"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ForgotPassword;
