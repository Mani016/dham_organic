import React from 'react';
import moment from 'moment';
import Sidebar from '../../reusables/Sidebar';

const OrderDetail = (props) => {
  const { data, onClose, isOpen } = props;
  return (
    <Sidebar onClose={onClose} isOpen={isOpen}>
      <h3>Order Id #{data.orderId}</h3>
      <p>
        {data.orderStatus} on {moment(data.orderUpdatedAt).format('llll')} by{' '}
        {data.deliveryBoyName}
      </p>
      <h4 className='item_count'>{data.orderItem?.length} Items</h4>
      {data.orderItem &&
        data.orderItem.map((subItem, index) => (
          <div
            className='item_box d-flex justify-content-between align-items-center'
            key={index}
          >
            <span>
              {subItem.name}, {subItem.quantity}
              {subItem.unit}
            </span>
            <span>₹{subItem.subTotal}</span>
          </div>
        ))}
      ----------------------
      <div className='bill d-flex justify-content-between align-items-center'>
        <h5>Item Total</h5>
        <span>₹{data.orderAmount}</span>
      </div>
      <div className='bill d-flex justify-content-between align-items-center'>
        <h5>Delivery partner fee</h5>
        <span>
          ₹{data.orderAmount !== data.finalAmount ? data.deliveryCharge : 0}
        </span>
      </div>
      <div className='bill d-flex justify-content-between align-items-center'>
        <h5>Bill Total </h5>
        <span>₹{data.finalAmount}</span>
      </div>
    </Sidebar>
  );
};

export default OrderDetail;
