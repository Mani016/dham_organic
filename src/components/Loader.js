import React from 'react'
import loading from "../assets/images/loading.gif";
const Loader = () => {
  return (
    <div className='loader_outer'>
        <img src={loading} alt="" />
    </div>
  )
}

export default Loader