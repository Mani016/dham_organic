import React, { Fragment } from "react";
import LayoutOne from "../../../layouts/LayoutOne";
import { Link, useParams } from "react-router-dom";
import agent from "../../../agent";
import Alert from "../../../Utils/Alert";
import { API_STATUS } from "../../../constant";
import { HANDLE_ERROR } from "../../../Utils/utils";
import loadImg from "../../../assets/images/loading.gif";

const ResetPassword = () => {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const params = useParams();
  function ResetPassword() {
    let formIsComplete = true;
    if (password === "" || confirmPassword === "") {
      Alert.showToastAlert("warning", "Required fields can not be empty.");
      formIsComplete = false;
    }
    if (password !== confirmPassword ) {
      if (confirmPassword.length !== "") {
        Alert.showToastAlert("warning", "Passwords did not match");
        formIsComplete = false;
      }
    }
    if (formIsComplete) {
      const data = {
        password: password,
        userId: params.userId,
        token: params.token
      };
      setLoading(true);
      agent.Auth.resetPassword(data)
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            Alert.showToastAlert("success", res.message, false);
            setLoading(false);
            setTimeout(()=>{
              window.location = "/login";
            },1000)
          } else {
            HANDLE_ERROR(res.message, setLoading);
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
            <div className="col-md-5 col-xs-12 ResetPassword">
              <div id="ResetPassword-form-wrapper">
                <div id="ResetPassword-form">
                  <div className="coupon_info">
                    <div className="register mb-2">
                      <div className="title form-title">Reset Password</div>
                      <Link to="/login" className="text-primary">
                        {" "}
                        <i className="fa fa-arrow-left"/> Back To Login
                      </Link>
                    </div>
                      <div className="input_fields input_name">
                        <div className="d-flex justify-content-between align-items-center w-100">
                          <label>
                            Password
                            <span className="required text-danger">*</span>
                          </label>
                          {showPassword ? (
                            <i
                              className="fa fa-eye mr-2"
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          ) : (
                            <i
                              className="fa fa-eye-slash mr-2"
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          )}
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Password"
                          onChange={({ target }) => {
                            setPassword(target.value);
                          }}
                          value={password}
                        />
                      </div>
                      <div className="input_fields input_name">
                        <span className="d-flex align-items-center cursor-pointer">
                          <label>
                            Confirm Password
                            <span className="required text-danger">*</span>
                          </label>
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Confirm Password"
                          onChange={({ target }) => {
                            setConfirmPassword(target.value);
                          }}
                          value={confirmPassword}
                        />
                      </div>
                      <div className="d-flex my-5 justify-content-center">
                        {loading ? (
                          <img src={loadImg} className="white_load" alt="" />
                        ) : (
                          <input
                            type="button"
                            name="send"
                            onClick={() => {
                              ResetPassword();
                            }}
                            disabled={loading}
                            className="submit-contact submitBnt"
                            value="Reset Password"
                          />
                        )}
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

export default ResetPassword;
