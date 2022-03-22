import React, { useState, useEffect } from "react";
import AddAddress from "./AddAddress";
import {
	getItemFromSessionStore,
	setItemToSessionStore,
} from "../../Utils/utils";
import Swal from "sweetalert2";
import agent from "../../agent";
import Alert from "../../Utils/Alert";
import { API_STATUS } from "../../constant";
import { Form } from "react-bootstrap";
const Address = () => {
	const [addressModal, setAddressModal] = useState(false);
	const [doRefresh, setDoRefresh] = useState(false);
	const [address, setAddress] = useState({});
	useEffect(() => {
		setAddress([]);
	}, [doRefresh]);

	function deleteAddress(addressId) {
		Swal.fire({
			title: "Are you sure you want to delete?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				agent.Address.delete(addressId)
					.then((res) => {
						if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
							Alert.showToastAlert("success", res.message);
							setDoRefresh(!doRefresh);
							// setCreated(true);
						} else {
							Alert.showToastAlert("error", res.message);
							// setCreated(false);
						}
					})
					.catch((err) => {
						Alert.showToastAlert("error", err.message);
					});
			}
		});
	}
	const handleDefault = (id) => {
		agent.Address.updateStatus({ addressId: id })
			.then((res) => {
				if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
					Alert.showToastAlert("success", res.message);
					setDoRefresh(!doRefresh);
					// setCreated(true);
				} else {
					Alert.showToastAlert("error", res.message);
					// setCreated(false);
				}
			})
			.catch((err) => {
				Alert.showToastAlert("error", err.message);
			});
	};
	return (
		<div className="manage_address">
			<h3>Manage Address</h3>
			<div className="address_wrapper">
				{address.length &&
					address.map((item, index) => (
						<div className="address_box d-flex" key={`item${index}`}>
							<p className="input_fields input_name d-flex">
								<Form.Check
									type="switch"
									id="custom-switch"
									onChange={() => {
										handleDefault(item._id);
									}}
									checked={item.isDefault}
								/>
							</p>
							<div className="address d-flex">
								<i class="fa fa-home" aria-hidden="true"></i>
								{item.isDefault && <span>Defaut</span>}
								<div>
									<h4>{item.title}</h4>
									<p>
										{item.address} {item.landmark && item.landmark}
									</p>
									<div className="options">
										<button>Edit</button>
										<button onClick={() => deleteAddress(item._id)}>
											Delete
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				<div
					className="address_box add_more d-flex"
					onClick={() => setAddressModal(true)}
				>
					<div className="text-center">
						<i class="fa fa-plus" aria-hidden="true"></i>
						<h3>Add New Address</h3>
					</div>
				</div>
			</div>
			<AddAddress
				isOpen={addressModal}
				onClose={() => setAddressModal(false)}
			/>
		</div>
	);
};

export default Address;
