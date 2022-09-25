import React, { useContext, useState } from 'react';
import AppContext from '../../../Context';
import agent from '../../../agent';
import { API_STATUS } from '../../../constant';
import Alert from '../../../Utils/Alert';
const ChangePassword = () => {
const { user } = useContext(AppContext);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const mobile = user.mobile || '';
  const handleSubmit = () => {
    const payload = {
      oldPassword,
      newPassword,
      mobile,
    };
    
    agent.Client.changePassword(payload)
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          Alert.showToastAlert('success', res.message);
          setTimeout(function () {
            localStorage.clear()
            window.location = '/login';
          }, 1000);
        } else {
          Alert.showToastAlert('error', res.message);
        }
      })
      .catch((err) => {
        Alert.showToastAlert('error', err.message);
      });
  };
  return (
    <>
      <h3>Change Password</h3>
      <p className='input_fields input_name'>
        <label>
          Mobile<span className='required'>*</span>
        </label>
        <input type='text' value={mobile} disabled />
      </p>
      <p className='input_fields input_name'>
        <label>
          Old Password<span className='required'>*</span>
        </label>
        <input
          type='password'
          placeholder='Enter Old Password'
          value={oldPassword}
          onChange={({ target }) => setOldPassword(target.value)}
        />
      </p>

      <p className='input_fields input_name'>
        <label>
          New Password<span className='required'>*</span>
        </label>
        <input
          type='password'
          placeholder='Enter New Password'
          value={newPassword}
          onChange={({ target }) => setNewPassword(target.value)}
        />
      </p>
      <button className='update_btn' onClick={() => handleSubmit()}>
        Update Password
      </button>
    </>
  );
};

export default ChangePassword;
