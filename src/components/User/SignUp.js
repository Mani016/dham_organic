/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Typewriter from "typewriter-effect";
import logo from "../../assets/images/dhaam_logo.webp";
import { Link } from "react-router-dom";
import agent from "../../agent";
import Alert from "../../Utils/Alert";
import { HANDLE_ERROR, setItemToSessionStore } from "../../Utils/utils";
import { API_STATUS } from "../../constant";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobileNum, setMobileNum] = React.useState("");
  // const [created, setCreated] = React.useState(false);
  const [password, setPassword] = React.useState("");
  // const [OTP, setOTP] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  function GetOtp() {
    let formIsComplete = true;
    if (name === "" || mobileNum === "" || password === "") {
      Alert.showToastAlert("warning", "Required fields cannot be empty");
      formIsComplete = false;
    }
    if (password !== "") {
      if (password.length < 6) {
        Alert.showToastAlert(
          "warning",
          "Password cannot be less than 6 letters"
        );
        formIsComplete = false;
      }
    }
    if (mobileNum !== "") {
      if (mobileNum.length < 10) {
        Alert.showToastAlert("warning", "Incorrect Mobile No.");
        formIsComplete = false;
      }
    }
    if (email !== "") {
      if (
        !RegExp(
          // eslint-disable-next-line
          /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/
        ).test(email)
      ) {
        Alert.showToastAlert("warning", "Incorrect Email ID");
        formIsComplete = false;
      }
    }
    if (formIsComplete) {
      setLoading(true);
      const data = {
        name: name,
        email: email,
        mobile: Number(mobileNum),
        // address: address,
        password: password,
        status: true,
        isOTPVerified: false,
      };
      agent.Auth.register(data)
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res?.status)) {
            //             setCreated(true);
            Alert.showToastAlert("success", res?.message);
            setItemToSessionStore("token", res.data.token);
            setItemToSessionStore("justOnce", true);
            setItemToSessionStore("clientId", res.data.user.id);
            setTimeout(function () {
              window.location = "/my-account";
            }, 1000);
            setLoading(false);
          } else {
            HANDLE_ERROR(res?.message, setLoading);
            //             setCreated(false);
          }
        })
        .catch((err) => {
          HANDLE_ERROR(err.message, setLoading);
        });
    }
  }

  //   function Register() {
  //     let formIsComplete = true;
  //     if (OTP === '') {
  //       Alert.showToastAlert('warning', 'OTP is required');
  //       formIsComplete = false;
  //     }
  //     if (formIsComplete) {
  //       setLoading(true);
  //       const data = {
  //         otp: Number(OTP),
  //         mobile: Number(mobileNum),
  //       };
  //       agent.Auth.otp(data)
  //         .then((res) => {
  //           if (API_STATUS.SUCCESS_CODE.includes(res?.status)) {
  //             setCreated(true);
  //             setItemToSessionStore('token', res.data.token);
  //             setItemToSessionStore('justOnce', true);
  //             setItemToSessionStore('clientId', res.data.user.id);
  //             setTimeout(function () {
  //               window.location = '/my-account';
  //             }, 1000);
  //             setLoading(false);
  //           } else {
  //             HANDLE_ERROR(res?.message, setLoading);
  //           }
  //         })
  //         .catch((err) => HANDLE_ERROR(err.message, setLoading));
  //     }
  //   }
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic | Register</title>
        <meta name="description" content="Register" />
      </MetaTags>
      <LayoutOne>
        <div className="container pt-2">
          <div className="row ">
            <div className="col-md-6 col-xs-12 d-none d-md-block">
              <div id="login-intro">
                <div className="logo_login">
                  <img src={logo} alt="Dhaam Organic" />
                </div>
                <div className="title mb-5">Welcome to Dhaam Organic!</div>
                <div className="description">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "Dhaam Organic is committed to deliver  Organic Products in its natural form."
                        )
                        .deleteAll()
                        .start();
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 register_form">
              <div id="register-form-wrapper" className="scrollbar">
                <div id="register-form">
                  <div className="title form-title">Register</div>
                  <div className="coupon_info">
                    <div className="register ">
                      <Link to="/login" className="text-primary">
                        {" "}
                        Already have an account?
                      </Link>
                    </div>
                    {/*  {!created ? ( */}
                    <form>
                      <p className="input_fields input_name">
                        <label>
                          Name<span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Name"
                          onChange={({ target }) => {
                            setName(target.value);
                          }}
                          value={name}
                        />
                      </p>
                      <p className="input_fields input_name">
                        <label>
                          Email<span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Enter Email"
                          onChange={({ target }) => {
                            setEmail(target.value);
                          }}
                          value={email}
                        />
                      </p>
                      <p className="input_fields input_name">
                        <span className="d-flex align-items-center cursor-pointer">
                          <label>
                            Password<span className="required">*</span>
                          </label>
                          {showPassword ? (
                            <i
                              className="fa fa-eye ml-3"
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          ) : (
                            <i
                              className="fa fa-eye-slash ml-3"
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          )}
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Password"
                          onChange={({ target }) => {
                            setPassword(target.value);
                          }}
                          value={password}
                        />
                      </p>
                      <p className="input_fields input_name">
                        <label>
                          Mobile Number<span className="required">*</span>
                        </label>
                        <input
                          type="number"
                          onInput={(e) =>
                            (e.target.value = e.target.value.slice(0, 10))
                          }
                          placeholder="Enter Mobile Number"
                          onChange={({ target }) => {
                            setMobileNum(target.value);
                          }}
                          value={mobileNum}
                        />
                      </p>
                      <div className="d-flex mt-3 justify-content-center">
                        <input
                          type="button"
                          name="send"
                          disabled={loading}
                          onClick={() => GetOtp()}
                          className="submit-contact submitBnt mx-2"
                          value={loading ? "..loading" : "Register"}
                        />
                      </div>
                    </form>
                    {/*                   ) : (
                      <form>
                        <p className='input_fields input_name'>
                          <label>
                            Mobile Number<span className='required'>*</span>
                          </label>
                          <input
                            type='number'
                            placeholder='Enter Mobile Number'
                            value={mobileNum}
                            disabled={true}
                          />
                        </p>
                        <p className='input_fields input_name'>
                          <label>
                            OTP<span className='required'>*</span>
                          </label>
                          <input
                            type='text'
                            placeholder='Enter OTP'
                            onChange={({ target }) => {
                              setOTP(target.value);
                            }}
                            value={OTP}
                            disabled={loading}
                          />
                        </p>
                        <div className='d-flex mt-3 mb-3 justify-content-center'>
                          <input
                            type='button'
                            name='send'
                            onClick={() => Register()}
                            className='submit-contact submitBnt mx-2'
                            value='Register'
                            disabled={loading}
                          />
                        </div>
                      </form>
                    )}*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* container */}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default SignUp;
