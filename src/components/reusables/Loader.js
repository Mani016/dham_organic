import React from 'react';
import loading from '../../assets/images/loading.gif';
const Loader = (props) => {
  return (
    <div className='loader_outer'>
      <img src={loading} alt='' />
      <br />
      <h4>{props.msg || 'Loading'}....</h4>
    </div>
  );
};

export default Loader;
