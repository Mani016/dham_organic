import React, { Fragment, useContext } from 'react';
import { MetaTags } from 'react-meta-tags';
import AppContext from '../../Context';
import LayoutOne from '../../layouts/LayoutOne';
import user_img from '../../../assets/images/user.webp';

const DashboardWrapper = (props) => {
  const { user } = useContext(AppContext);
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic | User Dashboard</title>
        <meta name='description' content='Login' />
      </MetaTags>
      <LayoutOne>
        <div className='container pt-2'>
          <div className='user_dashboard_title d-block d-md-flex justify-content-between mb-5 align-items-center'>
            <div className='left d-block d-md-flex'>
              <img
                src={user.image?.path || user_img}
                alt=''
                className='user_img'
              />
              <div>
                <p>
                  {' '}
                  Welcome <strong>{user.name} </strong>
                </p>
                <p>
                  {' '}
                  Email: <strong>{user.email}</strong>
                </p>
              </div>
            </div>
            <div className='d-md-flex d-block'>
              <div
                className={'acount_active_status mx-2 my-1'}
                style={{ cursor: 'pointer' }}
                onClick={() => props.btnAction()}
              >
                {props.topBtnTxt}
              </div>
              <div
                className={'acount_inactive_status mx-2 my-1 cursor-pointer'}
                onClick={() => {
                  sessionStorage.clear();
                  window.location = '/login';
                }}
              >
                <i className='fa fa-sign-out'></i> Log Out
              </div>
            </div>
          </div>
          {props.children}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default DashboardWrapper;
