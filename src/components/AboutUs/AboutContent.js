import React from 'react';
import Slides from './Slides';

const AboutContent = () => {
  return (
    <section className='about-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <div className='about_img'>
              <Slides />
              {/* <img src="/assets/images/dhaam_images/group1.webp" alt="about" />  */}
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='about_item_tb'>
              <div className='about_item_tbcell'>
                <div className='base-header base_header_left'>
                  <small>Welcome To Our Dhaam Organic</small>
                  <h3>WELCOME TO DHAAM ORGANIC</h3>
                </div>
                <div className='about_item'>
                  <h4>Foundation of Dhaam</h4>
                  <p>
                    Term ‘Dhaam’ relates to a dwelling, the divine abode,
                    supreme dwelling.
                  </p>
                  <p>
                    Eight generation of Dhankhar and Dagar family from Haryana
                    exists to bring natural products to not just Indian but
                    worldwide. We believe in bringing back the traditional food
                    and care products for consumers. We are here to fulfil the
                    demand of products that you need to live and enjoy a healthy
                    lifestyle.{' '}
                  </p>
                </div>
                <div className='about_item'>
                  <h4>Chhudani village of Jhajjar district</h4>
                  <p>
                    Site of Dhaam Organics is so divine and charismatic that it
                    can be called a paradise. It is located in Chhudani village
                    of Jhajjar district.{' '}
                  </p>
                  <p>
                    Chhudani is the land of great Saints, spiritual leaders that
                    showed the way of spiritual beliefs to the rest of the world
                    through simple words and vivid stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*about_wrp*/}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default AboutContent;
