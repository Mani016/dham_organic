import React, { useContext, useState } from 'react';
import AppContext from '../../../Context';
import user_default_img from '../../../assets/images/user.png';
import agent from '../../../agent';
import { API_STATUS } from '../../../constant';
import Alert from '../../../Utils/Alert';
const EditProfile = (props) => {
  const { data = {} } = props;
  const { user, handleRefresh } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [showImg, setShowImg] = useState('');
  const mobile = user.mobile || '';

  const uploadFile = (inputElement) => {
    const file = inputElement.files[0];
    setProfileImage(file);
    setShowImg(URL.createObjectURL(file));
  };
  const file = document.getElementById('file');
  const handleUpdate = (payload) => {
    agent.Client.update(data.id, payload)
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          Alert.showToastAlert('success', res.message);
          handleRefresh();
        } else {
          Alert.showToastAlert('error', res.message);
        }
      })
      .catch((err) => {
        Alert.showToastAlert('error', err.message);
      });
  };
  const handleSubmit = () => {
    const payload = {
      name,
      email,
      mobile,
    };
    const formData = new FormData();
    formData.append('image', profileImage);
    console.log(profileImage, data.image?.filename);
    if (profileImage?.name !== data.image?.filename) {
      agent.Client.uploadProfilePic(formData)
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            payload.image = res.data;
            handleUpdate(payload);
          } else {
            Alert.showToastAlert('error', res.message);
          }
        })
        .catch((err) => {
          Alert.showToastAlert('error', err.message);
        });
    } else {
      payload.image = data.image;
      handleUpdate(payload);
    }
  };
  return (
    <>
      <h3>Edit Profile</h3>
      <button
        onClick={() => {
          setProfileImage('');
          file.value = '';
        }}
      >
        Cross
      </button>
      <img
        src={showImg || user_default_img}
        alt='profileImage'
        style={{ height: '25%' }}
      />
      <p className='input_fields input_name'>
        <label>
          Upload Profile Pic<span className='required'>*</span>
        </label>
        <input
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
        <input type='text' value={mobile} disabled />
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
      <button className='update_btn' onClick={() => handleSubmit()}>
        Update Profile
      </button>
    </>
  );
};

export default EditProfile;
