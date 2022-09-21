import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Breadcrumb from '../../reusables/Breadcrumb';
import LayoutOne from '../../../layouts/LayoutOne';

class Need extends Component {
  render() {
    const serviceTopArray = [
      {
        image:
          'slider14.webp',
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
      }
    ];

    const serviceBottomArray = [
      {
        icon: 'slider17.webp',
        title: 'What all is Organic?',
        des: 'Any food products produced or involving production without the use of chemical fertilizers, pesticides, or other artificial chemicals.',
      },
      {
        icon: 'step-1.png',
        title: 'It is the way of life.',
        des: 'Staples produced by organic farming will not only satiate your hunger but also provide you with a sense of well being.',
      },
    ];

    const serviceToptMap = serviceTopArray.map((val, i) => {
      return (
        <div className='single_service_left' key={i}>
          {val.image && <img src={`/assets/images/dhaam_images/${val.image}`} alt='needs' />}
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
              <img src={`/assets/images/dhaam_images/${val.icon}`} alt='' />
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

            <Breadcrumb title='Need' />

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

export default Need;
