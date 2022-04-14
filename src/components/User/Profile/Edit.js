/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../Context';
import user_default_img from '../../../assets/images/user.png';
import agent from '../../../agent';
import { API_STATUS } from '../../../constant';
import Alert from '../../../Utils/Alert';
const EditProfile = (props) => {
  const { handleClose,isOpen } = props;
  const { user, handleRefresh } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [showImg, setShowImg] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user.name) {
      setName(user.name);
      setEmail(user.email);
      setShowImg(user.image?.path);
      setProfileImage(user.image);
    }
  }, [isOpen]);
  const uploadFile = (inputElement) => {
    const file = inputElement.files[0];
    setProfileImage(file);
    setShowImg(URL.createObjectURL(file));
  };
  // const file = document.getElementById('file');
  const handleUpdate = (data) => {
    const payload = {
      ...data,
      clientId: user.id,
    };
    agent.Client.update(payload)
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          Alert.showToastAlert('success', res.message);
          handleRefresh();
          setLoading(false);
          handleClose();
        } else {
          Alert.showToastAlert('error', res.message);
          setLoading(false);
          handleClose();
        }
      })
      .catch((err) => {
        Alert.showToastAlert('error', err.message);
        setLoading(false);
        handleClose();
      });
  };
  const handleSubmit = () => {
    setLoading(true);
    const payload = {
      name,
      email,
      mobile: user.mobile,
    };
    const formData = new FormData();
    formData.append('image', profileImage);
    if (profileImage.name && profileImage?.name !== user.image?.filename && user.image) {
      const deletePayload = { filename: user.image.filename };
      agent.Client.deleteProfilePic(deletePayload)
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            agent.Client.uploadProfilePic(formData)
              .then((res) => {
                if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
                  payload.image = res.data;
                  handleUpdate(payload);
                } else {
                  Alert.showToastAlert('error', res.message);
                  setLoading(false);
                  handleClose();
                }
              })
              .catch((err) => {
                Alert.showToastAlert('error', err.message);
                setLoading(false);
                handleClose();
              });
          } else {
            Alert.showToastAlert('error', res.message);
            setLoading(false);
            handleClose();
          }
        })
        .catch((err) => {
          Alert.showToastAlert('error', err.message);
          setLoading(false);
          handleClose();
        });
    } else {
      agent.Client.uploadProfilePic(formData)
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          payload.image = res.data;
          handleUpdate(payload);
        } else {
          Alert.showToastAlert('error', res.message);
          setLoading(false);
          handleClose();
        }
      })
      .catch((err) => {
        Alert.showToastAlert('error', err.message);
        setLoading(false);
        handleClose();
      });
    }
  };
  return (
    <>
      <h3>Edit Profile</h3>
      <label htmlFor='file' 
          className="profile_upload">
        <img
          src={showImg || user_default_img}
          alt='profileImage'
        />
      </label>
      <p className='input_fields input_name'>
        {/* <label>
          Upload Profile Pic<span className='required'>*</span>
        </label> */}
        <input
        style={{display:"none"}}
          type='file'
          onChange={({ target }) => uploadFile(target)}
          id='file'
        />
      </p>
      <p className='input_fields input_name'>
        <label>
          Name<span className='required'>*</span>
        </label>
        <input
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </p>
      <p className='input_fields input_name'>
        <label>
          Mobile<span className='required'>*</span>
        </label>
        <input type='text' value={user.mobile || ''} disabled />
      </p>
      <p className='input_fields input_name'>
        <label>
          Email<span className='required'>*</span>
        </label>
        <input
          type='email'
          placeholder='Enter Email'
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />
      </p>
      <button
        className='update_btn'
        onClick={() => handleSubmit()}
        disabled={loading}
      >
        {!loading ? 'Update Profile' : 'Loading....'}
      </button>
    </>
  );
};

export default EditProfile;
