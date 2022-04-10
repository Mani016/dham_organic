/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/dhaam_logo.png";
import { API_STATUS } from "../../../constant";
import { HANDLE_ERROR } from "../../../Utils/utils";
import OrderDetail from "./OrderDetail";
import agent from "../../../agent";
import moment from "moment";
import Loader from "../../Loader";
import DownloadInvoice from "./DownloadInvoice";
import NoItemsInCart from '../../NoItemsInCart';
const OrderHistory = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [details, setDetails] = useState({});
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const getOrderHistory = () => {
		setLoading(true);
		const payload = {
			page: page,
			limit: 10,
		};
		agent.Orders.getAll(payload)
			.then((res) => {
				if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
					setData(res.data);
					setLoading(false);
				} else {
					HANDLE_ERROR(res.message, setLoading);
				}
			})
			.catch((err) => {
				HANDLE_ERROR(err.message, setLoading);
			});
	};
	useEffect(() => {
		let isActive = true;
		if (isActive) {
			getOrderHistory();
		}
		return () => {
			isActive = false;
		};
	}, [page]);
	return (
		<div className="past_order">
			<h3>Order History</h3>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className="prodt_pagination mb-4">
						<ul className="order_paginate">
							<li>
								<span
									onClick={() => setPage(page - 1)}
									className={page === 1 ? "disable" : ""}
								>
									{"< "}
								</span>
							</li>
							{page}
							<li>
								<span
									onClick={() => setPage(page + 1)}
									className={data.page === data.total_pages ? "disable" : ""}
								>
									{">"}
								</span>
							</li>
						</ul>
					</div>
					{console.log(data.data)}
					<div>
						{data.data.length ?
							data.data.map((item, index) => (
								<div className="order_box" key={index}>
									<span className={`order_status ${item.orderStatus.toLowerCase() }`}>{item.orderStatus}</span>
									<div className="left">
										<img src={logo} alt="" />
									</div>
									<div className="txtb">
										<p>{item.orderId}</p>
										<div className="one_box">
											<div>
												<div>
													<span>{item.locality}</span>
													<span className="d-flex">
														{item.orderItem.map((item, index) => (
															<div key={index}>
																{`${item.name} x ${item.quantity}`}&nbsp;
															</div>
														))}
													</span>
													<span>
														{moment(item.orderPlacedAt).format("llll")}
													</span>
												</div>
												<button
													className="get_details mx-2"
													onClick={() => {
														setIsOpen(true);
														setDetails(item);
													}}
												>
													{" "}
													Get Details
												</button>
												<DownloadInvoice
													showTxt={false}
													orderId={item.orderId}
												/>
											</div>
											<div className="deliever">
												{item.orderStatus} on{" "}
												{moment(item.orderUpdatedAt).format("llll")}
											</div>
										</div>
									</div>
								</div>
							)):<NoItemsInCart title="No Orders"/>}
					</div>
				</>
			)}

			<OrderDetail
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				data={details}
			/>
		</div>
	);
};

export default OrderHistory;
