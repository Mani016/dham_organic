import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import MobileMenu from '../components/mobile-menu/MobileMenu';
import MobileBtn from '../components/mobile-menu/MobileBtn';
import dhaam_logo from '../assets/images/dhaam_logo.png';
import { getItemFromSessionStore } from '../Utils/utils';
import AppContext from '../Context';
import CartSidebar from '../components/User/CartSidebar';

const Menu = () => {
  const token = getItemFromSessionStore('token');
  const { itemsInCart, GetCart } = React.useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  React.useEffect(() => {
    let isActive = true;
    if (isActive) {
      GetCart();
    }
    return () => {
      isActive = false;
    };
    // eslint-disable-next-line
  }, [token]);
  return (
    <div className='menu_area'>
      {/* Start: header navigation */}
      <div className='navigation'>
        <div className='container'>
          <div className='logo'>
            <Link to={process.env.PUBLIC_URL + '/'}>
              <img src={dhaam_logo} alt='' />
            </Link>
          </div>

          <div className='meun_wrp'>
            <Navbar expand='lg' sticky='top' id='navigation'>
              <Nav className='mr-auto'>
                <ul>
                  <li>
                    <Link to='about'>About Us</Link>
                  </li>
                  <li className='has-sub'>
                    <Link to='#/'>Our Company</Link>
                    <ul>
                      <li>
                        <a href='/#how-it-done'>How It Done</a>
                      </li>
                      <li>
                        <Link to='/organic-farming'>Organic Farming</Link>
                      </li>
                      <li>
                        <Link to='/gallery'>Farm Gallery</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to='/categories'>Categories</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              </Nav>
            </Navbar>
          </div>
          {/* Mobile Menu */}
          <MobileBtn />

          <MobileMenu />
          {/* End:  Mobile Menu */}
          {/* Start: Cart  */}
          <div className='header_cart'>
            <ul>
              <li className='header_cart_icon cursor-pointer' onClick={()=>setIsOpen(true)}>
                <i className='icon-glyph-13'></i>
                <span className='number_cart'>
                  {itemsInCart.cartDetails?.length || '-'} |{' '}
                  {itemsInCart.subTotal}
                </span>
              </li>
              <li className='header_cart_icon'>
                <Link to={token ? '/my-account' : '/login'}>
                  <i className='fa fa-user'></i>
                </Link>
              </li>
            </ul>
          </div>
          {/* End: Cart  */}
        </div>
   
        {/* container */}
      </div>
      <CartSidebar
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          data={itemsInCart}
        />
      {/* End: header navigation */}
    </div>
  );
};

export default Menu;
