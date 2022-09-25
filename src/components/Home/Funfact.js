import React, { Component } from 'react';
import VideoPopup from './VideoPopup';

class Funfact extends Component {
  render() {
    const funfactArray = [
      {
        icon: 'icon-glyph-142',
        countNumber: 2,
        title: 'Certificates',
      },
      {
        icon: 'icon-glyph-226',
        countNumber: 42,
        title: 'Total Farms ',
      },
      {
        icon: 'icon-glyph-2',
        countNumber: '2500+',
        title: 'Orders Till Date',
      },
      {
        icon: 'icon-glyph-2',
        countNumber: '350+',
        title: 'Happy Customers ',
      }
    ];

    const funfactMap = funfactArray.map((valu, i) => {
      return (
        <div className='col-md-3 col-sm-12' key={i}>
          <div className='facts_wrapper'>
            <div className='icon-lay'>
              <i className={`${valu.icon}`}></i>
            </div>
            <h4 className='stat-count count'>{valu.countNumber}</h4>
            <h5>{valu.title}</h5>
          </div>
        </div>
      );
    });

    return (
      <section
        className='video-section'
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/assets/images/video_bg.webp'
          })`,
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='video_wrp'>
                <VideoPopup />
                <p>Watch Our organic food Video</p>
                <h3>
                  <q>I would rather be on my farm than be emperor of the world.</q>- George Washington
                </h3>
              </div>
              <div className='funfact_wapr row'>{funfactMap}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Funfact;
