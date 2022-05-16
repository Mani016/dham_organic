import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Breadcrumb from '../../reusables/Breadcrumb';
import LayoutOne from '../../../layouts/LayoutOne';

class Stages extends Component {
  render() {
    const serviceTopArray = [
      {
        image:'https://santhemes.com/blackgallery/FuodBorne-react/assets/images/blog5.jpg',
        title: 'STAGES IN ORGANIC FARMING',
        desc: [
          'We are the “Friendly Neighbourhood Farmers” who have been involved in agriculture since many generations and we are well aware of the soil and its requirements in our region.',
          'Our land is already suitable for organic Farming.',
          'Seed Selection is done to ensure better yield and proper nutrients in the plants.',
          'Ploughing of field is done before sowing the seed so that there are optimum nutrients and water available to the seed and the soil is well aerated for germination of the seed.',
          'Farmland is well irrigated by the water sources available all around us. We irrigate the fields by the surface water so that ground water is preserved for future use.',
          'Crop production with the use of alternative sources of nutrients such as crop rotation, residue management, organic manures and biological inputs.',
          'Management of weeds and pests by better management practices, physical and cultural means and by biological control system is the main objective behind our approach.',
          'We also have Maintained live-stock in tandem with organic concept of farming for availability of manure and they are an integral part of the entire system.',
          'After harvesting, the grains are stored by spraying them with biological liquid fumigants.',
        ],
      },
    ];

    const serviceBottomArray = [
      {
        icon: 'process_3.png',
        title: 'Fresh Vegetable',
        des: 'Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you',
      },
      {
        icon: 'process_4.png',
        title: 'Fresh Fruits',
        des: 'Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you',
      },
    ];

    const serviceToptMap = serviceTopArray.map((val, i) => {
      return (
        <div className='single_service_left' key={i}>
          {val.image && <img src={val.image} alt='needs' />}
          <h4>{val.title}</h4>
          {val.desc.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      );
    });

    const serviceBottomtMap = serviceBottomArray.map((val, i) => {
      return (
        <div className='col-md-12 col-sm-12' key={i}>
          <div className='sing_service_item'>
            <div className='icon-serv'>
              <img src={`assets/images/${val.icon}`} alt='' />
            </div>
            <h4>{val.title}</h4>
            <p>{val.des}</p>
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <MetaTags>
          <title>Dhaam Organic| Organic Farming</title>
          <meta name='description' content='Organic Food' />
        </MetaTags>
        <LayoutOne>
          <div className='single-services-page'>
            {/*====================  breadcrumb area ====================*/}

            <Breadcrumb title='ORGANIC FOOD: STAGES' />

            {/*====================  End of breadcrumb area  ====================*/}

            {/*====================  Single Services area ====================*/}
            <div className='single_service'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8 col-sm-12'>{serviceToptMap}</div>

                  <div className='col-md-4 col-sm-12'>
                    <div className='row single_service_left_botom'>
                      {serviceBottomtMap}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====================  End Single Services area ====================*/}
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}

export default Stages;
