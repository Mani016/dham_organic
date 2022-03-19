import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../layouts/LayoutOne';
import Typewriter from 'typewriter-effect';
import logo from '../assets/images/dhaam_logo.png';
import { Link, useHistory } from 'react-router-dom';
import agent from '../agent';
import Alert from '../Utils/Alert';
import { API_STATUS } from '../constant';
import { setItemToSessionStore, HANDLE_ERROR,getItemFromSessionStore } from '../Utils/utils';
const Login = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [mobileNum, setMobileNum] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  let history = useHistory();
  const user = getItemFromSessionStore('user');

  React.useEffect(() => {
    let isActive = true;
    if (isActive) {
      if (getItemFromSessionStore('token')) {
        setIsLogin(true);
      }
    }
    return () => {
      isActive = false;
    };
  }, []);

  function LogIn() {
    let formIsComplete = true;
    if (mobileNum === '' || password === '') {
      Alert.showToastAlert('warning', 'Required fields can not be empty.');
      formIsComplete = false;
    }
    if (mobileNum !== '') {
      if (mobileNum.length < 10) {
        Alert.showToastAlert('warning', 'Incorrect Mobile No.');
        formIsComplete = false;
      }
    }
    if (formIsComplete) {
      const data = {
        password: password,
        mobile: Number(mobileNum),
      };
      setLoading(true);
      agent.Login.login(data)
        .then((res) => {
          if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
            Alert.showToastAlert('success', res.message);
            setItemToSessionStore('token', res.data.token);
            setItemToSessionStore('justOnce', true);
            setItemToSessionStore('user', res.data.user);
            setTimeout(function () {
              window.location = '/my-account';
              setLoading(false);
            }, 1000);
          } else {
            HANDLE_ERROR(res.message, setLoading);
            // window.location = "/dashboard/my-profile";
          }
        })
        .catch((err) => HANDLE_ERROR(err.message, setLoading));
    }
  }
  return (
    <Fragment>
      <MetaTags>
        <title>Dhaam Organic | Login</title>
        <meta name='description' content='Login' />
      </MetaTags>
      <LayoutOne>
        <div className='container pt-2'>
          <div className='row '>
            <div className='col-md-7 col-xs-12 d-none d-md-block my-3'>
              <div id='login-intro'>
                <div className='logo_login'>
                  <img src={logo} alt='Dhaam Organic' />
                </div>
                <div className='title'>Welcome to Dhaam Organic!</div>
                <div className='description'>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          'Know your farmer, know your food'
                        )
                        .deleteAll()
                        .start();
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-5 col-xs-12 login'>
              <div id='login-form-wrapper'>
                <div id='login-form'>
                  {/**/}
                  {!isLogin ? (
                    <div className='coupon_info'>
                      <div className='register mb-5'>
                        <div className='title form-title'>
                          LOGIN TO YOUR ACCOUNT
                        </div>
                        <Link to='/sign-up' className='text-primary'>
                          {' '}
                          Need an account?
                        </Link>
                      </div>

                      <div>
                        <p className='input_fields input_name'>
                          <label>
                            Mobile<span className='required'>*</span>
                          </label>
                          <input
                            type='number'
                            onInput={(e) =>
                              (e.target.value = e.target.value.slice(0, 10))
                            }
                            placeholder='Mobile Number'
                            onChange={({ target }) => {
                              setMobileNum(target.value);
                            }}
                            value={mobileNum}
                          />
                        </p>
                        <p className='input_fields input_name'>
                          <label>
                            Password<span className='required'>*</span>
                          </label>
                          <input
                            type='password'
                            placeholder='Enter Password'
                            onChange={({ target }) => {
                              setPassword(target.value);
                            }}
                            value={password}
                          />
                        </p>
                        <div className='d-flex my-3 justify-content-center'>
                          <input
                            type='button'
                            name='send'
                            onClick={() => {
                              LogIn();
                            }}
                            disabled={loading}
                            className='submit-contact submitBnt '
                            value='Login'
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className='register'>
                        <img src={user} alt='' className='user_login_img' />
                        <div className='sub-title login_screen'>
                          Welcome {user.name}
                        </div>
                        <div className='sub-title login_screen my-3'>
                          {user.email}
                        </div>
                      </div>
                      <div className='d-flex mt-5 justify-content-center'>
                        <input
                          type='button'
                          id='submit'
                          name='send'
                          onClick={() =>
                            history.push('/user-dashboard/my-subscriptions')
                          }
                          className='submit-contact submitBnt mx-2'
                          value='Portal'
                        />
                        <input
                          type='button'
                          id='submit'
                          name='send'
                          onClick={() => {
                            setIsLogin(false);
                            sessionStorage.clear();
                            window.location = '/login';
                          }}
                          className='cancel-contact submitBnt'
                          value='Log Out'
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* container */}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Login;
