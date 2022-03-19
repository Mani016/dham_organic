import React from "react";
import Sidebar from "./Sidebar";

const AddAddress = (props) => {
	return (
		<Sidebar onClose={props.onClose} isOpen={props.isOpen}>
			<h3>Add Address</h3>
			<p className="input_fields input_name">
				<label>
					Address<span className="required">*</span>
				</label>
                <textarea  rows="5" placeholder="Enter Address" ></textarea>
			</p>
			<button className="update_btn">Save Address</button>
		</Sidebar>
	);
};

export default AddAddress;
