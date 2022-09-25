import React, { Component } from 'react';
import { ExternalLink } from 'react-external-link';

class Team extends Component {
  state = {
    heading: 'People Behind Dhaam',
    // subHeading: 'People Behind Dhaam',
  };

  render() {
    const teamlistArray = [
      {
        name: 'Sumit Dagar',
        designation: 'Brain',
        image: '/assets/images/dhaam_images/sumit.webp',
      },
      {
        name: 'Anita Dhankhar Dagar',
        designation: 'Heart And Soul',
        image: '/assets/images/dhaam_images/anita.webp',
      },
      {
        image: '/assets/images/dhaam_images/santosh_dagar.webp',
        name:"Santosh Dagar",
        designation: 'Iron Lady',
      },
      {
        image:'/assets/images/dhaam_images/Sapna sehrawat.webp',
        name: 'Sapna Sehrawat',
        designation:"Pro Active Social Worker",
    },
    ];
    const teamlistMap = teamlistArray.map((valu, i) => {
      return (
        <div className='col-md-3 col-sm-12' key={i}>
          <div className='team_wrp'>
            <div className='team_img'>
              <img src={valu.image} alt='team' />
            </div>
            <div className='team_info'>
              <h4>{valu.name}</h4>
              <p>{valu.designation}</p>
              <ul className='social list-inline'>
                <li>
                  <ExternalLink href='https://facebook.com'>
                    <i className='fa fa-facebook'></i>
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href='https://twitter.com'>
                    <i className='fa fa-twitter'></i>
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href='https://linkedin.com'>
                    <i className='fa fa-linkedin'></i>
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section
        className='team-section'
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/assets/images/bg_3.webp'
          })`,
        }}
      >
        <div className='container'>
          <div className='base-header'>
            <small>{this.state.subHeading} </small>
            <h3>{this.state.heading}</h3>
          </div>
          <div className='row'>{teamlistMap}</div>
        </div>
      </section>
    );
  }
}

export default Team;
