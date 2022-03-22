import React from 'react'
import Sidebar from './Sidebar'

const EditProfie = (props) => {
  return (
    <Sidebar onClose={props.onClose} isOpen={props.isOpen}>
        <h3>Edit Profile</h3>
        <p className='input_fields input_name'>
            <label>
            Upload Profile Pic<span className='required'>*</span>
            </label>
            <input type='file' />
        </p>
        <p className='input_fields input_name'>
            <label>
            Name<span className='required'>*</span>
            </label>
            <input
            type='text'
            placeholder='Enter Name'
            />
        </p>
        <p className='input_fields input_name'>
            <label>
            Email<span className='required'>*</span>
            </label>
            <input
            type='email'
            placeholder='Enter Email'
            />
        </p>
        <p className='input_fields input_name'>
            <label>
            Password<span className='required'>*</span>
            </label>
            <input
            type='password'
            placeholder='Enter Password'
            />
        </p>
        <button className='update_btn'>Update Profile</button>
    </Sidebar>
  )
}

export default EditProfie