import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import agent from "../../agent";
import { API_STATUS } from "../../constant";
import Alert from "../../Utils/Alert";
import { Form } from "react-bootstrap";
const AddAddress = (props) => {
	const [localities, setLocalities] = React.useState([]);
	const [title, setTitle] = useState("");
	const [address, setAddress] = useState("");
	const [landmark, setLandmark] = useState("");
	const [locality, setLocality] = useState("");
	const [isDefault, setIsDefault] = useState(false);
	function getaAllLocalities() {
		const payload = {
			statue: true,
		};
		agent.Localities.getAll(payload)
			.then((res) => {
				if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
					setLocalities(res.data);
				} else {
					setLocalities([]);
					Alert.showToastAlert("error", res.message);
				}
			})
			.catch((err) => {
				Alert.showToastAlert("error", err.message);
			});
	}
	useEffect(() => {
		getaAllLocalities();
	}, []);
	const handleClose = () => {
		setTitle("");
		setAddress("");
		setLocality("");
		setLandmark("");
		setIsDefault(false);
		props.onClose();
	};
	function SaveAddress() {
		const formIsComplete = true;
		if (
			title === " " ||
			address === "" ||
			locality === "" ||
			landmark === "" ||
			!isDefault
		) {
			Alert.showToastAlert("warning", "Required fields cannot be empty");
			formIsComplete = false;
		}
		if (formIsComplete) {
			const data = {
				title,
				address,
				locality,
				landmark,
				isDefault,
			};
			agent.Address.add({address:data})
				.then((res) => {
					if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
						Alert.showToastAlert("success", res.message);
						handleClose()
						// setCreated(true);
					} else {
						Alert.showToastAlert("error", res.message);
						// setCreated(false);
					}
				})
				.catch((err) => {
					Alert.showToastAlert("error", err.message);
					handleClose()
				});
		}
	}
	
	return (
		<Sidebar onClose={handleClose} isOpen={props.isOpen}>
			<h3>Add Address</h3>
			<p className="input_fields input_name">
				<label>
					Address Title<span className="required">*</span>
				</label>
				<input
					type="text"
					placeholder="Enter Address Title"
					onChange={({ target }) => {
						setTitle(target.value);
					}}
					value={title}
				/>
			</p>
			<p className="input_fields input_name">
				<label>
					Locality<span className="required">*</span>
				</label>
				<select
					value={locality}
					onChange={({ target }) => {
						setLocality(target.value);
					}}
					className="form-control"
					name="status"
					id="status"
				>
					<option value="">Select Locality</option>
					{localities.map((item, index) => (
						<option value={item._id} key={index}>
							{item.name}
						</option>
					))}
				</select>
			</p>

			<p className="input_fields input_name">
				<label>
					Address<span className="required">*</span>
				</label>
				<textarea
					rows="5"
					placeholder="Enter Address"
					value={address}
					onChange={({ target }) => {
						setAddress(target.value);
					}}
				></textarea>
			</p>
			<p className="input_fields input_name">
				<label>
					Landmark<span className="required">*</span>
				</label>
				<input
					type="text"
					placeholder="Enter Landmark"
					onChange={({ target }) => {
						setLandmark(target.value);
					}}
					value={landmark}
				/>
			</p>
			<p className="input_fields input_name d-flex">
				<label>
					Set As Default Address<span className="required">*</span> &nbsp;
					&nbsp;
				</label>
				<Form.Check
					type="switch"
					id="custom-switch"
					onChange={() => {
						setIsDefault(!isDefault);
					}}
					value={isDefault}
				/>
			</p>
			<button className="update_btn" onClick={() => SaveAddress()}>
				Save Address
			</button>
		</Sidebar>
	);
};

export default AddAddress;
