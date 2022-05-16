import React from 'react';

const Header = () => {
  return (
    <div className='header_topbar'>
      {/* Logo */}
      <div className='container'>
        <div className='header_top_right list-unstyled'>
          <ul>
            <li>
              <i className='fa fa-phone'></i><a href='tel:9266027544'> 9266027544</a>
            </li>
            <li>
              <i className='fa fa-globe'></i>Village Chhudani Dhaam, Haryana
              124504
            </li>
          </ul>
        </div>
        <div className='header_top_left'>
          <ul className='header_socil list-inline pull-left'>
            <li>
              <i className='fa fa-envelope'></i><a href="mailto:dhaamorganic@gmail.com">dhaamorganic@gmail.com</a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/groups/303331530978336/?ref=share'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href='//twitter.com' target='_blank' rel='noopener noreferrer'>
                <i className='fa fa-twitter'></i>
              </a>
            </li>
            <li>
              <a
                href='//instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-instagram'></i>
              </a>
            </li>
            <li>
              <a
                href='//pinterest.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-pinterest'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
