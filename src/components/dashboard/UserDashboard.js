// import React, { Fragment } from "react";
// import { MetaTags } from "react-meta-tags";
// import { Link, useLocation } from "react-router-dom";
// import LayoutOne from "../../layouts/LayoutOne";
// import Cart from "./MyCart";

// const UserDashboard = () => {
//     const location = useLocation();
//     let split = location.pathname.split("/");

// const [page, setPage] = React.useState("profile");


// 	return (
// 		<Fragment>
// 			<MetaTags>
// 				<title>Dhaam Organic | User Dashboard</title>
// 				<meta name="description" content="Login" />
// 			</MetaTags>
// 			<LayoutOne>
// 				<div className="container pt-2">
// 					<div className="user_dashboard_title d-block d-md-flex justify-content-between mb-5 align-items-center">
// 						<div className="left d-block d-md-flex">
//                             <img src="" alt="" className="user_img" />
//                             <div> 
// 							    <p>
//                                     {" "}
//                                     Welcome <strong>Akash Upadhyay </strong>
//                                 </p>
//                                 <p>
//                                     {" "}
//                                     Email: <strong>akcse16@gmail.com</strong>
//                                 </p>
//                             </div>
// 						</div>
//                         <div className="d-flex">
// 							<div className={"acount_active_status mx-2"} style={{cursor:"pointer"}} onClick ={()=>window.location = "/my-cart"}>Go to Cart</div>
// 							<div
// 								className={"acount_inactive_status mx-2 cursor-pointer"}
// 								onClick={() => {
// 									localStorage.clear();
// 									window.location = "/login";
// 								}}
// 							>
// 								<i className="fa fa-sign-out"></i> Log Out
// 							</div>
// 						</div>
						
// 					</div>
//                 {
//                     page==="profile" ?
              
//                     <div className="info_box">
//                             <p> <strong> Name:</strong> Akash Upadhyay</p>
//                             <p> <strong> Mobile No:</strong> 7011886275</p>
//                             <p> <strong> Address:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi!</p>

//                             <div className="bottom_options">
//                             <div className={"account"}>Change Password</div>
//                             {/* <div
//                                 className={"account"}
//                                 onClick={() => {
//                                     localStorage.clear();
//                                     window.location = "/login";
//                                 }}
//                             >
//                                 Update Profile
//                             </div> */}
//                         </div> 
//                     </div>
//                     :
//                     page==="cart" ? "": ""
//                 }
// 				</div>
// 			</LayoutOne>
// 		</Fragment>
// 	);
// };

// export default UserDashboard;
