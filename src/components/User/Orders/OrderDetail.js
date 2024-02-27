import React from "react";
import moment from "moment";
import Sidebar from "../../reusables/Sidebar";

const OrderDetail = (props) => {
  const { data, onClose, isOpen } = props;
  return (
    <Sidebar onClose={onClose} isOpen={isOpen}>
      <h3>Order Id #{data.orderId}</h3>
      <p>
        {` ${data.orderStatus} on ${moment(data.orderUpdatedAt).format(
          "llll"
        )} ${
          data.orderStatus === "DELIVERED" ? `by ${data.deliveryBoyName}` : ""
        }`}
      </p>
      <h4 className="item_count">{data.orderItem?.length} Items</h4>
      {data.orderItem &&
        data.orderItem.map((subItem, index) => (
          <div
            className="item_box d-flex justify-content-between align-items-center"
            key={index}
          >
            <span className="item_details">
              <img
                src={subItem.image}
                alt="items_in_cart"
                style={{ height: "90px", width: "90px" }}
              />
              <div>
                <p>{subItem.name}</p>
                <div className="price_tag">
                  {subItem.discount > 0 && (
                    <span style={{ textDecoration: "line-through" }}>
                      ₹{subItem.price}/{subItem.unit}
                    </span>
                  )}
                  <span>
                    <b>
                      {subItem.details?.qty}
                      {subItem.unit?.name} x {subItem.quantity}
                    </b>{" "}
                    |<b className="mx-2">₹{subItem.subTotal}</b>
                  </span>
                </div>
              </div>
            </span>
            <span>₹{subItem.subTotal}</span>
          </div>
        ))}
      <div className="bill d-flex justify-content-between align-items-center">
        <h5>Item Total</h5>
        <span>₹{data.orderAmount}</span>
      </div>
      <div className="bill d-flex justify-content-between align-items-center">
        <h5>Delivery partner fee</h5>
        <span>
          ₹{data.orderAmount !== data.finalAmount ? data.deliveryCharge : 0}
        </span>
      </div>
      <div className="bill d-flex justify-content-between align-items-center">
        <h5>Bill Total </h5>
        <span>₹{data.finalAmount}</span>
      </div>
    </Sidebar>
  );
};

export default OrderDetail;
