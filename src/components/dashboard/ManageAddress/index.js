import React, { useState, useContext } from 'react';
import AddEditAddress from './AddEdit';
import Swal from 'sweetalert2';
import agent from '../../../agent';
import Alert from '../../../Utils/Alert';
import { API_STATUS } from '../../../constant';
import AppContext from '../../../Context';
import { HANDLE_ERROR } from '../../../Utils/utils';
const ManageAddress = (props) => {
  const { title, subTitle, isChooseAddress } = props;
  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    handleRefresh,
    setLoading,
    handleSelectedAddress,
    selectedAddress,
  } = useContext(AppContext);
  const [address, setAddress] = useState({});
  function handleDelete(addressId) {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        agent.Address.delete({ addressId })
          .then((res) => {
            if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
              Alert.showToastAlert('success', res.message);
              handleRefresh();
            } else {
              HANDLE_ERROR(res.message, setLoading);
            }
          })
          .catch((err) => {
            HANDLE_ERROR(err.message, setLoading);
          });
      }
    });
  }
  return (
    <div className='manage_address'>
      <div className='address_wrapper'>
        {isChooseAddress && selectedAddress  ?(
          <div>
            <h3>
              {' '}
              Delivery address <i className='fa fa-check' />
            </h3>
            <p>Title: {selectedAddress.title}</p>
            <p> Address: {selectedAddress.address}</p>
            <p> Landmark: {selectedAddress.landmark}</p>
            <p> Locality: {selectedAddress.locality?.name}</p>
            <button onClick={() => handleSelectedAddress({})}>Change</button>
          </div>
        ) : (
          <>
            <h3>{title || 'Manage  Addresses'}</h3>
            <p>{subTitle || ' '}</p>{' '}
            <div className='d-flex address_listing'>
              {user.address &&
                user.address.map((item, index) => (
                  <div className='address_box d-flex' key={`item${index}`}>
                    <div className='address d-flex'>
                      <i className='fa fa-home' aria-hidden='true'></i>
                      <div>
                        <h4>{item.title}</h4>
                        <p>
                          {item.address}, {item.landmark} ,{item.locality?.name}
                        </p>
                        {!isChooseAddress && (
                          <div className='options'>
                            <button
                              onClick={() => {
                                setIsOpen(true);
                                setAddress(item);
                              }}
                            >
                              Edit
                            </button>
                            <button onClick={() => handleDelete(item._id)}>
                              Delete
                            </button>
                          </div>
                        )}
                        {isChooseAddress && (
                          <div className='options'>
                            <button
                              onClick={() => {
                                handleSelectedAddress(item);
                              }}
                              disabled={!item.locality}
                              className={!item.locality ?'text-muted':''}
                            >
                             {!item.locality && ' tooltip lga :- Unable to deliver here'}
                              Deliver Here
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div
              className='address_box add_more d-flex'
              onClick={() => setIsOpen(true)}
            >
              <div className='text-center'>
                <i className='fa fa-plus' aria-hidden='true'></i>
                <h3>Add New Address</h3>
              </div>
            </div>
          </>
        )}
      </div>
      <AddEditAddress
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={address}
      />
    </div>
  );
};

export default ManageAddress;
