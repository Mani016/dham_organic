/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {GALLERY_TYPES} from "../../constant";

const MobileMenu = () => {
  useEffect(() => {
    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(`.subMenu`);
    const anchorLinks = offCanvasNav.querySelectorAll('a');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        'beforebegin',
        `<span className="menuExpand"><i></i></span>`
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menuExpand');
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener('click', (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener('click', () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle('active');
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      '#offcanvas-mobile-menu'
    );
    offcanvasMobileMenu.classList.remove('active');
  };
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [showSubMenu3, setShowSubMenu3] = useState(false);
  return (
    <div className='offcanvasMobileMenu' id='offcanvas-mobile-menu'>
      <button
        className='offcanvasMenuClose'
        id='mobile-menu-close-trigger'
        onClick={() => closeMobileMenu()}
      >
        <i className='icon-glyph-146'></i>
      </button>

      <div className='offcanvasWrapper'>
        <div className='offcanvasInnerContent'>
          <nav className='offcanvasNavigation' id='offcanvas-navigation'>
            <ul>
              <li
                className='has-sub'
                onClick={() => setShowSubMenu(!showSubMenu)}
              >
                <div className='d-flex justify-content-between align-items-center'>
                  About Us <i className='fa fa-caret-down' />
                </div>
                <ul className={showSubMenu ? 'active' : ''}>
                  <li>
                    <Link to='/about-us/dhaam-story'>Dhaam Story</Link>
                  </li>
                  <li>
                    <Link to='/about-us/people-behind-dhaam'>PEOPLE BEHIND DHAAM</Link>
                  </li>
                  <li>
                    <Link to='/about-us/certifications'>CERTIFICATION</Link>
                  </li>
                  <li>
                    <Link to='/about-us/experts'>EXPERTS</Link>
                  </li>
                  <li>
                    <Link to='/about-us/customer-reviews'>CUSTOMER REVIEWS</Link>
                  </li>
                  {/*<li>*/}
                  {/*<Link to='/our-concepts/dhaam-story'>Dhaam Story</Link>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Link to='/our-concepts/about-us'>About Us</Link>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Link to='/our-concepts/team'>Team</Link>*/}
                  {/*</li>*/}
                </ul>
              </li>
              <li
                className='has-sub'
                onClick={() => setShowSubMenu1(!showSubMenu1)}
              >
                <div className='d-flex justify-content-between align-items-center'>
                  Organic Nutrition <i className='fa fa-caret-down' />
                </div>
                <ul className={showSubMenu1 ? 'active' : ''}>
                  <li>
                    <Link to='/organic-food/need'>Need</Link>
                  </li>
                  <li>
                    <Link to='/organic-food/selection-of-farmer'>SELECTION OF FARMER</Link>
                  </li>
                  <li>
                    <Link to='/organic-food/phases-in-farming'>PHASES IN FAMRING</Link>
                  </li>
                  <li>
                    <Link to='/organic-food/faq'>FAQ’s</Link>
                  </li>
                </ul>
              </li>
              <li
                className='has-sub'
                onClick={() => setShowSubMenu2(!showSubMenu2)}
              >
                <div className='d-flex justify-content-between align-items-center'>
                  Gallery
                  <i className='fa fa-caret-down' />
                </div>
                <ul className={showSubMenu2 ? 'active' : ''}>
                  {GALLERY_TYPES.map((item , index) => {
                    return (
                        <li key={index}>
                          <Link  to={`/gallery/${item.key}`}>{item.label}</Link>
                        </li>
                    )
                  })}
                </ul>
                {/*<ul  className={showSubMenu2 ? 'active' : ''}>*/}
                {/*  <li>*/}
                {/*    <Link to='/farm-gallery'>FARM LANDSCAPE</Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link to='/event-gallery'>EVENTS</Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link to='/products-gallery'>EXHIBITIONS</Link>*/}
                {/*  </li>*/}
                {/*</ul>*/}
              </li>
              <li>
                <Link to='/our-products'>OUR PRODUCTS</Link>
              </li>
              <li className='has-sub'
                  onClick={() => setShowSubMenu3(!showSubMenu3)}>
                <div className='d-flex justify-content-between align-items-center'>
                  Support
                  <i className='fa fa-caret-down' />
                </div>
                {/*<Link to='/contact'>Support <i className='fa fa-caret-down' /></Link>*/}
                <ul className={showSubMenu3 ? 'active' : ''}>
                  <li>
                    <Link to ='/contact'>
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link to ='/return-refund-policy'>
                      Refund and Return Policy
                    </Link>
                  </li>
                  <li>
                    <Link to ='/farm-Location'>
                      Farm location
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* Contact Info  */}

          <div className='header_top_right list-unstyled'>
            <ul>
              <li>
                <i className='fa fa-phone'></i>{' '}
                <a href='tel:9266027544'> 9266027544</a>
              </li>
              <li className='d-flex'>
                <i className='fa fa-envelope'></i>
                <a href='mailto:dhaamorganic@gmail.com'>
                  dhaamorganic@gmail.com
                </a>
              </li>
              <li>
                <i className='fa fa-globe'></i> Village Chhudani Dhaam, Haryana
                124504
              </li>
            </ul>
          </div>

          {/* Social Icon*/}
          <div className='header_top_left'>
            <ul className='header_socil list-inline'>
              <li>
                <a
                  href='https://www.facebook.com/groups/303331530978336/?ref=share'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='fa fa-facebook'
                ></a>
              </li>
              <li>
                <Link to='#/' className='fa fa-twitter'></Link>
              </li>
              <li>
                <Link to='#/' className='fa fa-linkedin'></Link>
              </li>
              <li>
                <Link to='#/' className='fa fa-google-plus'></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
