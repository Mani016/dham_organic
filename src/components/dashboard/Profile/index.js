import React, { Fragment, useContext, useState } from 'react';
import { MetaTags } from 'react-meta-tags';
import LayoutOne from '../../../layouts/LayoutOne';
import ManageAddress from '../ManageAddress';
import OrderHistory from '../Orders/OrderHistory';
import user_img from '../../../assets/images/user.png';
import AppContext from '../../../Context';
import Loader from '../../../components/Loader';
import {
  getItemFromSessionStore,
  setItemToSessionStore,
} from '../../../Utils/utils';
import Sidebar from '../Sidebar';
import EditProfile from './Edit';
import ChangePassword from './ChangePassword';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(
    getItemFromSessionStore('activeTab')
  );
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState('');
  const { user, loading } = useContext(AppContext);
  const handleActiveTab = (tab) => {
    setItemToSessionStore('activeTab', tab);
    setActiveTab(tab);
  };
  const handleModal = (value) => {
    setComponent(value);
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic | My Account</title>
        <meta name='description' content='Login' />
      </MetaTags>
      <LayoutOne>
        <div className='dashboard'>
          <div className='container '>
            <div className='top py-4'>
              <div className='detail_box d-flex align-items-center'>
                <img src={user.image?.path || user_img} alt='' width='90' />
                <div>
                  <p>{user.name}</p>
                  <div className='other_details py-1'>
                    <span>{user.mobile}</span>
                    <span>{user.email || ''}</span>
                  </div>
                  <div>
                    <button
                      className='edit_profile_btn mb-2 mb-md-0 mr-3'
                      onClick={() => handleModal('edit')}
                    >
                      Edit Profile
                    </button>
                    <button
                      className='edit_profile_btn mb-2 mb-md-0'
                      onClick={() => handleModal('change_password')}
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className='edit_profile_btn mb-2 mb-md-0 mr-3'
                  onClick={() => {
                    sessionStorage.clear();
                    window.location = '/login';
                  }}
                >
                  <i className='fa fa-sign-out' /> Log Out
                </button>
              </div>
            </div>
          </div>
          <div className='container my-3'>
            <div className='tab_box'>
              <div className='row'>
                <div className='col-md-3'>
                  <ul>
                    <li
                      onClick={() => handleActiveTab('orders')}
                      className={activeTab === 'orders' ? 'active' : ''}
                    >
                      Orders
                    </li>
                    <li
                      onClick={() => handleActiveTab('address')}
                      className={activeTab === 'address' ? 'active' : ''}
                    >
                      Manage Address
                    </li>
                  </ul>
                </div>
                <div className='col-md-9'>
                  {loading ? (
                    <Loader />
                  ) : activeTab === 'orders' ? (
                    <OrderHistory />
                  ) : (
                    <ManageAddress />
                  )}
                </div>
              </div>
            </div>
          </div>{' '}
          <Sidebar onClose={() => handleClose()} isOpen={isOpen}>
            {component === 'edit' && (
              <EditProfile handleClose={handleClose} isOpen={isOpen} />
            )}
            {component === 'change_password' && <ChangePassword />}
          </Sidebar>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Profile;
