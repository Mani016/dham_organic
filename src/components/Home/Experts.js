import React from 'react';
import Slider from 'react-slick';

const Experts = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let imageTestiData = [
    {
      content: `Getting the certification is one of the important steps in starting the organic farming. So, when we wanted to start organic farming to cater to the domestic need for organic produce, we contacted Dr. Rishi who provided us with PGS Certification for Organic Farming.
            PGS is a process of certifying organic products, which ensures that their production takes place in accordance with laid-down quality standards. The certification is in the form of a documented logo or a statement.`,
      name: 'Dr. Rishi',
      designation: 'PGS Certification General Manager',
    },
    {
      content: `Dr. Dharmesh Verma provides us with his valuable inputs in the day to day obstacles that arise in the fields with crops and other related issues.
            He is an experienced Agriculture Expert and our very own crop doctor with wide range of work concerned with the well-being and health of crops. 
            He thinks critically to solve problems concerning planting, cultivating, harvesting and protecting crops from pests, weeds and harsh climates. 
            `,
      name: 'Dr. Dharmesh Varma',
      designation: 'Organic Farming Expert',
    },
  ];

  let ImageeTestiDataList = imageTestiData.map((val, i) => {
    return (
      <div className='item p-5 pb-0' key={i}>
        {/* <div className='testi_wrp'> */}
          <div className='testi_info'>
            <p>{val.content}</p>
          </div>
          <div className='testi_img flex-end'>
            <h4>
              {val.name}
              <span>{val.designation}</span>
            </h4>
        </div>
      </div>
    );
  });

  return (
    <div className='project-section'>
      <div className='container'>
        <div className='base-header'>
          <small>Experts</small>
          <h3>Our Experts Views</h3>
        </div>

        <div className='row'>
          <div className='col-md-12 testi_sing_img'>
            <Slider {...settings}>{ImageeTestiDataList}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
