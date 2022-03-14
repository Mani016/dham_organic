import React from "react";
import DashboardWrapper from "./DashboardWrapper";

const Profile = () => {

	return (
		<DashboardWrapper topBtnTxt="Go to Cart" btnAction={()=>window.location="/my-cart"}>
			<div className="info_box">
				<p>
					{" "}
					<strong> Name:</strong> Akash Upadhyay
				</p>
				<p>
					{" "}
					<strong> Mobile No:</strong> 7011886275
				</p>
				<p>
					{" "}
					<strong> Address:</strong> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Dolorum, eligendi!
				</p>

				<div className="bottom_options">
					<div className={"account"}>Change Password</div>
					{/* <div
                                className={"account"}
                                onClick={() => {
                                    localStorage.clear();
                                    window.location = "/login";
                                }}
                            >
                                Update Profile
                            </div> */}
				</div>
			</div>
		</DashboardWrapper>
	);
};

export default Profile;
