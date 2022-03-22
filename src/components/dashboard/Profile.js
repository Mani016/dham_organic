import React, { Fragment , useContext, useEffect, useState } from "react";
import { MetaTags } from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Address from "./Address";
import EditProfie from "./EditProfie";
import PastOrder from "./PastOrder";
import user_img from "../../assets/images/user.png";
import AppContext from '../../Context';

const Profile = () => {
	const [activeTab, setActiveTab] = useState("orders");
	const [onEdit, setOnEdit] = useState(false);
	const {user} =  useContext(AppContext)

	return (
		<Fragment>
			<MetaTags>
				<title>Dhaam Organic | My Account</title>
				<meta name="description" content="Login" />
			</MetaTags>
			<LayoutOne>
				<div className="dashboard">
					<div className="container ">
						<div className="top py-4">
							<div className="detail_box d-flex align-items-center">
								<img src={user_img} alt="" width="90" />
								<div>
									<p>{user.name}</p>
									<div className="other_details py-1">
										<span>{user.mobile}</span>
										<span>{user.email || ""}</span>
									</div>
								</div>
							</div>
							<button
								className="edit_profile_btn"
								onClick={() => setOnEdit(true)}
							>
								Edit Profile
							</button>
						</div>
					</div>
					<div className="container my-3">
						<div className="tab_box">
							<div className="row">
								<div className="col-md-3">
									<ul>
										<li
											onClick={() => setActiveTab("orders")}
											className={activeTab === "orders" && "active"}
										>
											Orders
										</li>
										<li
											onClick={() => setActiveTab("address")}
											lassName={activeTab === "address" && "active"}
										>
											Address
										</li>
									</ul>
								</div>
								<div className="col-md-9">
									{activeTab === "orders" ? <PastOrder /> : <Address />}
								</div>
							</div>
						</div>
					</div>{" "}
					<EditProfie isOpen={onEdit} onClose={() => setOnEdit(false)} />
				</div>
			</LayoutOne>
		</Fragment>
	);
};

export default Profile;
