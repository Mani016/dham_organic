import React, { Fragment } from "react";
import { MetaTags } from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";

const DashboardWrapper = (props) => {
	return (
		<Fragment>
			<MetaTags>
				<title>Dhaam Organic | User Dashboard</title>
				<meta name="description" content="Login" />
			</MetaTags>
			<LayoutOne>
				<div className="container pt-2">
					<div className="user_dashboard_title d-block d-md-flex justify-content-between mb-5 align-items-center">
						<div className="left d-block d-md-flex">
                            <img src="" alt="" className="user_img" />
                            <div> 
							    <p>
                                    {" "}
                                    Welcome <strong>Akash Upadhyay </strong>
                                </p>
                                <p>
                                    {" "}
                                    Email: <strong>akcse16@gmail.com</strong>
                                </p>
                            </div>
						</div>
                        <div className="d-md-flex d-block">
							<div className={"acount_active_status mx-2 my-1"} style={{cursor:"pointer"}} onClick ={()=> props.btnAction()}>{props.topBtnTxt}</div>
							<div
								className={"acount_inactive_status mx-2 my-1 cursor-pointer"}
								onClick={() => {
									localStorage.clear();
									window.location = "/login";
								}}
							>
								<i className="fa fa-sign-out"></i> Log Out
							</div>
						</div>
						
					</div>
                    {props.children}
              
                    
				</div>
			</LayoutOne>
		</Fragment>
	);
};

export default DashboardWrapper;
