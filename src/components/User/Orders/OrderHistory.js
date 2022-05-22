/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import logo from '../../../assets/images/dhaam_logo.png';
import { API_STATUS, MESSAGES } from '../../../constant';
import OrderDetail from './OrderDetail';
import agent from '../../../agent';
import moment from 'moment';
import DownloadInvoice from './DownloadInvoice';
import usePagination from '../../../Utils/hooks/usePagination';
import NoItemsInCart from '../../reusables/NoItemsInCart';
import Loader from '../../reusables/Loader';
import { HANDLE_ERROR } from '../../../Utils/utils';
const OrderHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { paginationLayout, page } = usePagination(data);
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
  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  const handleCancel = async (orderId) => {
    agent.Orders.cancelOrder({ orderId }) // Get the details of the customer
      .then((res) => {
        // If the response is successful
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          setRefresh(!refresh);
          // If the status is success
        } else {
          HANDLE_ERROR(MESSAGES, setLoading); // Handle the error
        }
      })
      .catch((err) => {
        // If there is an error
        HANDLE_ERROR(err.message, setLoading); // Handle the error
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
  }, [page, refresh]);
  return (
    <div className='past_order'>
      <div className='order-heading-container'>
        <div>
          <h3 className='mb-0'>Order History</h3>
          <small>
            Last Updated at :- {moment().format('DD-MM-YYYY hh:mm a')}
          </small>
        </div>
        <button className='refresh_btn' onClick={() => handleRefresh()}>
          <i className='fa fa-refresh mx-2' />
          Refresh
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {paginationLayout()}
          <div>
            {data.data ? (
              data.data.map((item, index) => (
                <div className='order_box' key={index}>
                  <span
                    className={`order_status ${item.orderStatus.toLowerCase()}`}
                  >
                    {item.orderCancelledBy
                      ? item.orderStatus + ' by you'
                      : item.orderStatus}
                  </span>
                  <div className='left'>
                    <img src={logo} alt='logo' />
                  </div>
                  <div className='txtb'>
                    <p>{item.orderId}</p>
                    <div className='one_box'>
                      <div>
                        <div>
                          <span>{item.locality}</span>
                          <span className='d-flex'>
                            {item.orderItem.map((item, index) => (
                              <div key={index}>
                                {`${item.name} x ${item.quantity}`}&nbsp;
                              </div>
                            ))}
                          </span>
                          <span>
                            {moment(item.orderPlacedAt).format('llll')}
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
                        {item.orderStatus.includes(['DELIVERED']) && (
                          <DownloadInvoice
                            showTxt={false}
                            orderId={item.orderId}
                          />
                        )}
                        {item.orderStatus.includes(['RECEIVED']) && (
                          <button
                            className='download_invoice cancel mx-2'
                            onClick={() => handleCancel(item.orderId)}
                          >
                            Cancel Order
                          </button>
                        )}
                      </div>
                      <div className='deliever'>
                        {item.orderStatus} on{' '}
                        {moment(item.orderUpdatedAt).format('llll')}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <NoItemsInCart title='No Orders' />
            )}
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
