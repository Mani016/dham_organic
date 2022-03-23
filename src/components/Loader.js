import React from 'react'
import loading from "../assets/images/loading.gif";
const Loader = (props) => {
  return (
    <div className='loader_outer'>
        <img src={loading} alt="" />{props.msg}
    </div>
  )
}

export default Loader