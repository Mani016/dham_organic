import React, { Fragment, useState } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../layouts/LayoutOne';
import Breadcrumb from '../components/Breadcrumb';
import ContactMap from '../components/ContactMap';
import agent from '../agent';
import Alert from '../Utils/Alert';
import { API_STATUS } from '../constant';

const Contact = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  function handleSubmit() {
    let formValid = true;
    if (name === '' || mobile === '' || address === '' || message === '') {
      Alert.showToastAlert('warning', 'Required fields cannot be empty');
      formValid = false;
    }
    if (mobile !== '') {
      if (mobile.length !== 10) {
        Alert.showToastAlert('warning', 'Incorrect Mobile No.');
        formValid = false;
      }
    }
    if (formValid) {
      const data = {
        name: name,
        mobile: Number(mobile),
        address: address,
        message: message,
        status: false,
      };
      agent.Contact.send(data)
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            Alert.showToastAlert('success', res.message);
            setName('');
            setMobile('');
            setAddress('');
            setMessage('');
          } else {
            Alert.showToastAlert('error', res.message);
          }
        })
        .catch((err) => {
          console.log(err);
          Alert.showToastAlert('error', err.message);
        });
    }
  }

  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic| Contact Us</title>
        <meta name='description' content='Organic Food React JS Template.' />
      </MetaTags>
      <LayoutOne>
        <div className='contact-page'>
          {/*====================  breadcrumb area ====================*/}

          <Breadcrumb title='Contact Us' />

          {/*====================  End of breadcrumb area  ================*/}

          {/*====================  Contact Form  area  ====================*/}
          <section className='contact-section'>
            <div className='container'>
              <div className='base-header'>
                <small>Get in touch</small>
                <h3>Send Us Message</h3>
              </div>
              <div className='contact_wrp'>
                <div className='row'>
                  <div className='col-sm-12 map-container'>
                    {/* contact map */}
                    <ContactMap latitude='19.313299' longitude='-81.254601' />
                  </div>
                  <div className='col-md-8 col-sm-12 inner-contact'>
                    <div className='contact-form'>
                      {/* <div id="message">
				                                {this.state.flag ? 
				                                     <div className="alert alert-success">
				                                     <strong>{this.state.return_msg}</strong>
				                                     </div>
				                                 : null}
				                            </div>  */}
                      <form method='post' name='contact-form' id='contact-form'>
                        <div className='row'>
                          <div className='col-lg-6 col-sm-12'>
                            <input
                              type='text'
                              id='name'
                              value={name}
                              onChange={({ target }) => setName(target.value)}
                              className='con-field form-control'
                              placeholder='Name*'
                            />
                          </div>
                          <div className='col-lg-6 col-sm-12'>
                            <input
                              type='text'
                              className='con-field form-control'
                              value={mobile}
                              onChange={({ target }) => setMobile(target.value)}
                              id='exampleInputEmail1'
                              placeholder='Mobile*'
                            />
                          </div>
                          <div className='col-lg-12 col-sm-12'>
                            <input
                              type='text'
                              id='subject'
                              value={address}
                              onChange={({ target }) =>
                                setAddress(target.value)
                              }
                              className='form-control con-field'
                              placeholder='Your Address*'
                            />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-12 col-sm-12'>
                            <textarea
                              name='comments'
                              id='comments'
                              value={message}
                              onChange={({ target }) =>
                                setMessage(target.value)
                              }
                              rows='6'
                              className='form-control con-field'
                              placeholder='Your Message*'
                            ></textarea>
                            <div className='submit-area'>
                              <input
                                type='button'
                                id='submit'
                                name='send'
                                onClick={handleSubmit}
                                className='submit-contact submitBnt'
                                value='Send Message'
                              />
                              <div id='simple-msg'></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/*===  Contact Details  ===*/}
                  <div className='col-md-4 col-sm-12'>
                    <div className='contact_pg_address'>
                      <h3>
                        Hello there <br />
                        got a project?
                      </h3>
                      <div className='single_con_add'>
                        <a href='#/'>
                          <i className='icon-glyph-226'></i>
                        </a>
                        <p>
                          <span>Company Address :</span>
                        </p>
                        <p>
                          <span>3567 New Alaska, us</span>
                        </p>
                      </div>
                      <div className='single_con_add'>
                        <a href='#/'>
                          <i className='icon-glyph-334'></i>
                        </a>
                        <p>
                          <span>Email Address :</span>
                        </p>
                        <p>
                          <span>example@email .com</span>
                        </p>
                      </div>
                      <div className='single_con_add'>
                        <a href='#/'>
                          <i className='icon-glyph-33'></i>
                        </a>
                        <p>
                          <span>Contact Us :</span>
                        </p>
                        <p>
                          <span>+77-00-222-1111</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*===  end: Contact Details  ===*/}
                </div>
              </div>
            </div>
          </section>
          {/*====================  End: Contact Form area  ====================*/}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
