import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { getItemFromSessionStore } from './Utils/utils';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://dhaam-api.vercel.app/api';
// const API_ROOT = 'http://localhost:8000/api/';

const responseBody = (res) => res.body;
const errorBody = (err) => {
  if(err.response.body?.status === 403){
    localStorage.clear();
    setTimeout(() => (window.location = '/login'), 2000);
  }
    return err.response.body;
};
const token = getItemFromSessionStore('token');
const createdBy = '620aae3e90e0a582e3d93ee5';
const companyId = '6219f4a39ca8773564b6fac0';
const clientId = getItemFromSessionStore('clientId') || localStorage.getItem("clientId");

const requests = {
  del: (url) =>
    superagent
      .del(`${API_ROOT}${url}`)
      .set('x-access-token', `Bearer ${token}`)
      .set('user_id', clientId)
      .then(responseBody)
      .catch(errorBody),
  customPost: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .set('x-access-token', `Bearer ${token}`)
      .set('user_id', createdBy)
      .then(responseBody)
      .catch(errorBody),
  get: (url) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .set('x-access-token', `Bearer ${token}`)
      .set('user_id', clientId)
      .then(responseBody)
      .catch(errorBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .set('x-access-token', `Bearer ${token}`)
      .set('user_id', clientId)
      .then(responseBody)
      .catch(errorBody),

  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .set('x-access-token', `Bearer ${token}`)
      .set('user_id', clientId)
      .then(responseBody)
      .catch(errorBody),
};

const Auth = {
  register: (data) =>
    requests.post('client/auth/register', { ...data, createdBy, companyId }),
  otp: (data) => requests.post('client/auth/verifyOTP', { ...data }),
  login: (data) => requests.post('client/auth/login', { ...data }),
  forgotPassword: (data) => requests.post('client/auth/forgotPassword', { ...data }),
  resetPassword: (data) => requests.post('client/auth/resetPassword', { ...data }),
};

const Client = {
  getById: () => requests.customPost('client/auth/getClientById', { clientId }),
  uploadProfilePic: (payload) =>
    requests.post('client/auth/uploadProfilePic', payload),
  deleteProfilePic: (payload) =>
    requests.post('client/auth/deleteProfilePic', { ...payload }),
  update: (payload) => requests.post('client/auth/update', { ...payload }),
  changePassword: (payload) =>
    requests.post('client/auth/changePassword', {
      ...payload,
      companyId,
      createdBy,
    }),
};
const Category = {
  get: (payload) =>
    requests.post('admin/category', { ...payload, companyId, createdBy }),
};
const Product = {
  get: (payload) =>
    requests.post('admin/product/getAllProducts', {
      ...payload,
      companyId,
      createdBy,
    }),
  getById: (id) => requests.get(`admin/product/${id}`),
};
const Testimonial = {
  get: (payload) =>
    requests.post('admin/testimonial', { ...payload, companyId }),
};
const Contact = {
  send: (payload) =>
    requests.post('client/contact-us/add', { ...payload, companyId }),
};
const Cart = {
  add: (payload) =>
    requests.post('client/cart/addToCart', { ...payload, companyId, clientId }),
  remove: (payload) =>
    requests.post('client/cart/subtractFromCart', {
      ...payload,
      companyId,
      clientId,
    }),
  get: () => requests.post('client/cart/getCart', { clientId }),
  checkout: (payload) =>
    requests.post('client/order/placeOrder', {
      ...payload,
      clientId,
      companyId,
    }),
  deleteFromCart: (payload) =>
    requests.post('client/cart/deleteFromCart', {
      ...payload,
      clientId,
    }),
};

const Localities = {
  getAll: (payload) =>
    requests.post('admin/locality', { ...payload, companyId, createdBy }),
};
const Gallery = {
  getAll: (payload) => requests.post('admin/gallery/getImages', { companyId, ...payload }),
};
const Address = {
  add: (payload) =>
    requests.post('client/auth/addNewAddress', { ...payload, clientId }),
  delete: (id) =>
    requests.post('client/auth/deleteAddress', { clientId, ...id }),
  update: (payload) =>
    requests.post('client/auth/updateAddress', { clientId, ...payload }),
  setDefaultAddress: (id) =>
    requests.post('client/auth/setDefaultAddress', { clientId, ...id }),
};
const Orders = {
  getAll: (payload) =>
    requests.post('client/order/getOrdersForUser', {
      ...payload,
      clientId,
    }),
  getById: (payload) => requests.post(`client/order/getOrderById`, payload),
  cancelOrder: (payload) =>
    requests.post('client/order/cancelOrder', { clientId, ...payload }),
};
const Services = {
  Auth,
  Client,
  Category,
  Product,
  Testimonial,
  Contact,
  Cart,
  Localities,
  Gallery,
  Address,
  Orders,
};
export default Services;
