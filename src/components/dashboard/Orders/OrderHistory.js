import React, { useEffect, useState } from 'react';
import logo from '../../../assets/images/dhaam_logo.png';
import { API_STATUS } from '../../../constant';
import { HANDLE_ERROR } from '../../../Utils/utils';
import OrderDetail from './OrderDetail';
import agent from '../../../agent';
import moment from 'moment';
import Loader from '../../Loader';
import DownloadInvoice from './DownloadInvoice';
const OrderHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getOrderHistory = () => {
    setLoading(true);
    agent.Orders.getAll()
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
  }, []);
  return (
    <div className='past_order'>
      <h3>Order History</h3>
      {loading ? (
        <Loader />
      ) : (
        data.data &&
        data.data.map((item, index) => (
          <div className='order_box' key={index}>
            <div className='left'>
              <img src={logo} alt='' />
              <div className='txtb'>
                <p>{item.orderId}</p>
                <div>
                  <div>
                    <span> Status: {item.orderStatus}</span>
                    <span> Total Paid: ₹{item.finalAmount} </span>
                    <span>
                      Order Placed At:{' '}
                      {moment(item.orderPlacedAt).format('llll')}
                    </span>
                    <span>Locality:{item.locality}</span>
                    <span className='d-flex'>
                      {item.orderItem.map((item, index) => (
                        <div key={index}>
                          {`${item.name}x${item.quantity}`}&nbsp;
                        </div>
                      ))}
                    </span>
                  </div>
                  <button
                    className='get_details mx-2'
                    onClick={() => {
                      setIsOpen(true);
                      setDetails(item);
                    }}
                  >
                    {' '}
                    Get Details
                  </button>
                  <DownloadInvoice showTxt={false} orderId={item.orderId} />
                </div>
              </div>
            </div>
            <div className='deliever'>
              {item.orderStatus} on {moment(item.orderUpdatedAt).format('llll')}
            </div>
          </div>
        ))
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
