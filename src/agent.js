import superagentPromise from "superagent-promise";
import _superagent from "superagent";
import request from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "https://api-dhaam.herokuapp.com/api/";
const responseBody = (res) => res.body;
const errorBody = (err) => err.response.body;

const token = localStorage.getItem("token");
const createdBy = "620aae3e90e0a582e3d93ee5";
const companyId = "6219f4a39ca8773564b6fac0";

const requests = {
	del: (url) =>
		superagent.del(`${API_ROOT}${url}`).then(responseBody).catch(errorBody),
	get: (url) =>
		superagent
			.get(`${API_ROOT}${url}`)
			.set("Authorization", `Bearer ${token}`)
			.then(responseBody)
			.catch(errorBody),
	put: (url, body) =>
		superagent
			.put(`${API_ROOT}${url}`, body)
			.set("Authorization", `Bearer ${token}`)
			.then(responseBody)
			.catch(errorBody),

	post: (url, body) =>
		superagent
			.post(`${API_ROOT}${url}`, body)
			.set("Authorization", `Bearer ${token}`)
			.then(responseBody)
			.catch(errorBody),
};

const Register = {
	register: (data) => requests.post("client/auth/register", data),
	registerOtp: (data) => requests.post("client/auth/verifyOTP", data),
};
const Login = {
	login: (data) => requests.post("client/auth/login", data),
};
const Category = {
	get: (data) =>
		requests.post("admin/category", { ...data, companyId, createdBy }),
};
const Product = {
	get: (data) =>
		requests.post('admin/product/getAllProducts', { ...data , companyId, createdBy}),
	getById: (id) =>
	requests.get(`admin/product/${id}`),
};
const Testimonial ={
	get:(data)=>
		requests.post('admin/testimonial' , {...data , companyId}),
}
const Contact={
	send: (data)=>
		requests.post('client/contact-us/add' , {...data })
}
const AddToCart ={
	add: (data)=>
	requests.post('client/cart/addToCart' , {...data }),
	remove:(data)=>
	requests.post ('client/cart/subtractFromCart' , {...data})
}
const Services = {
	Register,
	Login,
	Category,
	Product,
	Testimonial,
	Contact,
	AddToCart
	
};
export default Services;
