import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Typewriter from 'typewriter-effect';
// import logo from '../assets/images/logo.webp'
import { Link, useHistory } from "react-router-dom";
import agent from "../agent";
import Alert from "../Utils/Alert";
import { setItemToStore } from "../Utils/utils";

const SignUp = () => {
    let history = useHistory();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [mobileNum, setMobileNum] = React.useState('');
    const [created, setCreated] = React.useState(false);
    const [OTP, setOTP] = React.useState('');

    function GetOtp() {
        let formIsComplete = true;
        if (name === '') {
            Alert.showToastAlert('warning', 'Name is required');
            formIsComplete = false;
        }
        if (mobileNum === '') {
            Alert.showToastAlert('warning', 'Mobile No. is required');
            formIsComplete = false;
        }
        if (mobileNum !== '') {
            if (mobileNum.length < 10) {
                Alert.showToastAlert('warning', 'Incorrect Mobile No.');
                formIsComplete = false;
            }
        }
        if (email !== '') {
            // eslint-disable-next-line
            if (!RegExp(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/).test(email)) {
                Alert.showToastAlert('warning', 'Incorrect Email ID');
                formIsComplete = false;
            }
        }
        if (address === '') {
            Alert.showToastAlert('warning', 'Address is required');
            formIsComplete = false;
        }

        if (formIsComplete) {
            const data = {
                name: name,
                email: email,
                mobile_no: mobileNum,
                address: address
            }
            agent.Register.register(data).then((res) => {
                if (!res.status) {
                    Alert.showToastAlert('error', res.message);
                }
                else {
                    Alert.showToastAlert('success', res.message);
                    setCreated(true);
                }
            }).catch((err) => console.error(err))
        }
    }
    function Register() {
        let formIsComplete = true;
        if (OTP === '') {
            Alert.showToastAlert('warning', 'OTP is required');
            formIsComplete = false;
        }
        if (formIsComplete) {
            const data = {
                customer_otp: OTP,
                mobile_no: mobileNum,
            }
            agent.Register.registerOtp(data).then((res) => {
                if (!res.status) {
                    Alert.showToastAlert('error', res.message);
                    setCreated(true);
                }
                else {
                    Alert.showToastAlert('success', res.message);
                    setItemToStore("token", res.user.token);
                    history.push('/user-dashboard/my-subscriptions');
                }
            }).catch((err) => console.error(err))
        }
    }
    return (
        <Fragment>
            <MetaTags>
                <title>Dhaam Organic |
                    Register</title>
                <meta
                    name="description"
                    content="Register"
                />
            </MetaTags>
            <LayoutOne>
                <div className="container pt-2">
                    <div className="row ">
                        <div className="col-md-7 col-xs-12 d-none d-md-block">
                            <div id="login-intro">
                                <div className="logo_login">
                                    {/* <img src={logo} alt="Dhaam Organic" /> */}
                                </div>
                                <div className="title">
                                    Welcome to Dhaam Organic!
                                </div>
                                <div className="description">
                                    <Typewriter
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                        }}
                                        onInit={(typewriter) => {
                                            typewriter.typeString('Dhaam Organic is committed to deliver  Organic Products in its natural form.')
                                                .deleteAll()
                                                .start();
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-xs-12 register_form">
                            <div id="register-form-wrapper" className="scrollbar">
                                <div id="register-form">
                                    <div className="title form-title">Register</div>
                                    <div className="coupon_info">
                                        <div className="register ">
                                            <Link to="/login" className="text-primary"> Already have an account?</Link>
                                        </div>
                                        {!created ? <form>
                                            <p className="input_fields input_name">
                                                <label>Name<span className="required">*</span></label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    onChange={({ target }) => {
                                                        setName(target.value);
                                                    }} value={name}
                                                />
                                            </p>
                                            <p className="input_fields input_name">
                                                <label>Email<span className="required">*</span></label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter Email"
                                                    onChange={({ target }) => {
                                                        setEmail(target.value);
                                                    }} value={email}
                                                />
                                            </p>
                                            <p className="input_fields input_name">
                                                <label>Mobile Number<span className="required">*</span></label>
                                                <input
                                                    type="number"
                                                    onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                                                    placeholder="Enter Mobile Number"
                                                    onChange={({ target }) => {
                                                        setMobileNum(target.value);
                                                    }} value={mobileNum}
                                                />
                                            </p>
                                            <p className="input_fields input_name">
                                                <label>Address<span className="required">*</span></label>
                                                <input
                                                    type="text"
                                                    onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                                                    placeholder="Enter Address"
                                                    onChange={({ target }) => {
                                                        setAddress(target.value);
                                                    }} value={address}
                                                />
                                            </p>
                                            <div className="d-flex mt-3 justify-content-center">
                                                <input type="button" name="send" onClick={() => GetOtp()}
                                                    className="submit-contact submitBnt mx-2" value="Get OTP" />
                                            </div>
                                        </form>
                                            : <form>
                                                <p className="input_fields input_name">
                                                    <label>Mobile Number<span className="required">*</span></label>
                                                    <input
                                                        type="number"
                                                        placeholder="Enter Mobile Number"
                                                        value={mobileNum}
                                                        disabled={true}
                                                    />
                                                </p>
                                                <p className="input_fields input_name">
                                                    <label>OTP<span className="required">*</span></label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter OTP"
                                                        onChange={({ target }) => {
                                                            setOTP(target.value);
                                                        }} value={OTP}
                                                    />
                                                </p>
                                                <div className="d-flex mt-3 mb-3 justify-content-center">
                                                    <input type="button" name="send" onClick={() => Register()}
                                                        className="submit-contact submitBnt mx-2" value="Register" />

                                                </div>
                                            </form>
                                        }
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