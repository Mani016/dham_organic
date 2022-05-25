import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Breadcrumb from '../../reusables/Breadcrumb';
import LayoutOne from '../../../layouts/LayoutOne';
import ServiceSidebar from '../../reusables/ServiceSidebar';

class AboutUs extends Component {
  render() {
    const serviceTopArray = [
      {
        image:
          '/assets/images/dhaam_images/group1.webp',
        title: 'ORGANIC FOOD – WHAT WE ALL NEED TO KNOW',
        desc: [
          'If we talk about Organic farming system in India, we know that it is not novel and is being followed from ancient times by our fore-fathers. ',
          'Organic Farming is a method of farming system which primarily aims at cultivating the land and nurturing the crops in such a way, as to keep the soil alive and in good health by use of organic wastes and other biological materials along with beneficial microbes (biofertilizers). These release nutrients for crops so that there is sustainable production and it is an eco-friendly pollution free environment.',
        ],
      },
      {
        image: '',
        title: 'NEED',
        desc: [
          'It’s the need of the hour to consume products which are free of Chemicals and Pesticides. These chemicals are sprayed on the crops to increase the yield of crop as well also at the time of storage of grains. ',
          'These harm not only the pests but also to the persons consuming this chemical infested food products. We see many allergies cropping up by consuming the food grown in chemical environment. These chemicals are impairing us as well as our future generations. ',
          'As these chemicals enter the food chain they lead to ‘Biological Magnification’ at the topmost level of consumers, i.e., the humans. Thus, the side effects of consuming the chemical laden food are by far and forth many.',
        ],
      },
      {
        image: '',
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
        icon: 'process_3.webp',
        title: 'Fresh Vegetable',
        des: 'Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you',
      },
      {
        icon: 'process_4.webp',
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

            <Breadcrumb title='ORGANIC FOOD' />

            {/*====================  End of breadcrumb area  ====================*/}

            {/*====================  Single Services area ====================*/}
            <div className='single_service'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8 col-sm-12'>{serviceToptMap}</div>
                  <div className='row single_service_left_botom'>
                      {serviceBottomtMap}
                    </div>
                  <div className='col-md-4 col-sm-12'>
                    <ServiceSidebar/>
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

export default AboutUs;
