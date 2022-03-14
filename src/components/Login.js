import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Typewriter from "typewriter-effect";
// import logo from "../assets/images/logo.webp";
import { Link, useHistory } from "react-router-dom";
import agent from "../agent";
import Alert from "../Utils/Alert";
import jwt_decode from "jwt-decode";
import user from "../assets/images/user.png";
const Login = () => {
	const [isLogin, setIsLogin] = React.useState(false);
	const [mobileNum, setMobileNum] = React.useState("");
	const [created, setCreated] = React.useState(false);
	const [password, setPassword] = React.useState("");
	const token = localStorage.getItem("token");
	const [decoded, setDecoded] = React.useState({});
	let history = useHistory();

	React.useEffect(() => {
		let isActive = true;
		if (isActive) {
			if (token) {
				setIsLogin(true);
				setDecoded(jwt_decode(token));
			}
		}
		return () => {
			isActive = false;
		};
	}, [token]);
	
	function LogIn() {
		let formIsComplete = true;
		if (mobileNum === "" || password === "") {
			Alert.showToastAlert("warning", "Required fields can not be empty.");
			formIsComplete = false;
		}
		if (mobileNum !== "") {
			if (mobileNum.length < 10) {
				Alert.showToastAlert("warning", "Incorrect Mobile No.");
				formIsComplete = false;
			}
		}
		if (formIsComplete) {
			const data = {
				password: password,
				mobile: Number(mobileNum),
			};

			agent.Login.login(data)
				.then((res) => {
					if (!res.success) {
						Alert.showToastAlert("error", res.message);
					} else {
						localStorage.setItem("token", res.data.token);
            sessionStorage.setItem('user' , res.data.user);
						Alert.showToastAlert("success", res.message);
						// window.location = "/dashboard/my-profile";
					}
				})
				.catch((err) => console.error(err));
		}
	}
	return (
		<Fragment>
			<MetaTags>
				<title>Dhaam Organic | Login</title>
				<meta name="description" content="Login" />
			</MetaTags>
			<LayoutOne>
				<div className="container pt-2">
					<div className="row ">
						<div className="col-md-7 col-xs-12 d-none d-md-block">
							<div id="login-intro">
								<div className="logo_login">
									{/* <img src={logo} alt="Dhaam Organic" /> */}
								</div>
								<div className="title">Welcome to Dhaam Organic!</div>
								<div className="description">
									<Typewriter
										options={{
											autoStart: true,
											loop: true,
										}}
										onInit={(typewriter) => {
											typewriter
												.typeString(
													"Dhaam Organic is committed to deliver  organic products in its natural form."
												)
												.deleteAll()
												.start();
										}}
									/>
								</div>
							</div>
						</div>
						<div className="col-md-5 col-xs-12 login">
							<div id="login-form-wrapper">
								<div id="login-form">
									{/**/}
									{!isLogin ? (
										<div className="coupon_info">
											<div className="register mb-5">
												<div className="title form-title">
													LOGIN TO YOUR ACCOUNT
												</div>
												<Link to="/sign-up" className="text-primary">
													{" "}
													Need an account?
												</Link>
											</div>

											<div>
												<p className="input_fields input_name">
													<label>
														Mobile<span className="required">*</span>
													</label>
													<input
														type="number"
														onInput={(e) =>
															(e.target.value = e.target.value.slice(0, 10))
														}
														placeholder="Mobile Number"
														onChange={({ target }) => {
															setMobileNum(target.value);
														}}
														value={mobileNum}
														disabled={created}
													/>
												</p>
												<p className="input_fields input_name">
													<label>
														Password<span className="required">*</span>
													</label>
													<input
														type="password"
														placeholder="Enter Password"
														onChange={({ target }) => {
															setPassword(target.value);
														}}
														value={password}
													/>
												</p>

												{/* {created && (
                          <p className="input_fields input_name">
                            <label>
                              OTP<span className="required">*</span>
                            </label>
                            <input
                              type="number"
                              placeholder="Enter OTP"
                              onChange={({ target }) => {
                                setOTP(target.value);
                              }}
                              value={OTP}
                            />
                          </p>
                        )} */}

												<div className="d-flex my-3 justify-content-center">
													<input
														type="button"
														name="send"
														onClick={() => {
															LogIn();
														}}
														className="submit-contact submitBnt "
														value="Login"
													/>
												</div>
											</div>
										</div>
									) : (
										<>
											<div className="register">
												<img src={user} alt="" className="user_login_img" />
												<div className="sub-title login_screen">
													Welcome {decoded.name}
												</div>
												<div className="sub-title login_screen my-3">
													{decoded.email}
												</div>
											</div>
											<div className="d-flex mt-5 justify-content-center">
												<input
													type="button"
													id="submit"
													name="send"
													onClick={() =>
														history.push("/user-dashboard/my-subscriptions")
													}
													className="submit-contact submitBnt mx-2"
													value="Portal"
												/>
												<input
													type="button"
													id="submit"
													name="send"
													onClick={() => {
														setIsLogin(false);
														localStorage.clear();
														window.location = "/";
													}}
													className="cancel-contact submitBnt"
													value="Log Out"
												/>
											</div>
										</>
									)}
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

export default Login;
