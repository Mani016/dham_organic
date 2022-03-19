import React , {useState} from "react";
import AddAddress from "./AddAddress";

const Address = () => {
    const [address , setAddress]=useState(false)
	return (
		<div className="manage_address">
			<h3>Manage Address</h3>
            <div className="address_wrapper">
			<div className="address_box d-flex">
				<i class="fa fa-home" aria-hidden="true"></i>
				<div className="address">
					<h4>Home</h4>
					<p>
						WZ 45 B Adarsh Gali Palam New Delhi, Palam Village, Palam, New
						Delhi, Delhi, India
					</p>
					<div className="options">
						<button>Edit</button>
						<button>Delete</button>
					</div>
				</div>
			</div>
            <div className="address_box add_more d-flex" onClick={()=>setAddress(true)}>
                <div className="text-center">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <h3>Add New Address</h3>
                </div>
			</div>
            </div>
            <AddAddress isOpen={address} onClose={()=>setAddress(false)} />
		</div>
	);
};

export default Address;
