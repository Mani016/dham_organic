import superagentPromise from "superagent-promise";
import _superagent from "superagent";
import { getItemFromSessionStore } from "./Utils/utils";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "https://api-dhaam.herokuapp.com/api/";
const responseBody = (res) => res.body;
const errorBody = (err) => err.response.body;

const token = getItemFromSessionStore("token");
const createdBy = "620aae3e90e0a582e3d93ee5";
const companyId = "6219f4a39ca8773564b6fac0";
const clientId = getItemFromSessionStore("clientId");

const requests = {
	del: (url) =>
		superagent.del(`${API_ROOT}${url}`).then(responseBody).catch(errorBody),
	get: (url) =>
		superagent
			.get(`${API_ROOT}${url}`)
			.set("x-access-token", `Bearer ${token}`)
			.set("user_id" , clientId )
			.then(responseBody)
			.catch(errorBody),
	put: (url, body) =>
		superagent
			.put(`${API_ROOT}${url}`, body)
			.set("x-access-token", `Bearer ${token}`)
			.set("user_id" , clientId )
			.then(responseBody)
			.catch(errorBody),

	post: (url, body) =>
		superagent
			.post(`${API_ROOT}${url}`, body)
			.set("x-access-token", `Bearer ${token}`)
			.set("user_id" , clientId )
			.then(responseBody)
			.catch(errorBody),
};

const Register = {
	register: (data) =>
		requests.post("client/auth/register", { ...data, createdBy, companyId }),
	otp: (data) => requests.post("client/auth/verifyOTP", { ...data }),
};
const Login = {
	login: (data) => requests.post("client/auth/login", { ...data }),
};
const Client ={
	getById: () => requests.post("client/auth/getClientById", { clientId }),
}
const Category = {
	get: (data) =>
		requests.post("admin/category", { ...data, companyId, createdBy }),
};
const Product = {
	get: (data) =>
		requests.post("admin/product/getAllProducts", {
			...data,
			companyId,
			createdBy,
		}),
	getById: (id) => requests.get(`admin/product/${id}`),
};
const Testimonial = {
	get: (data) => requests.post("admin/testimonial", { ...data, companyId }),
};
const Contact = {
	send: (data) =>
		requests.post("client/contact-us/add", { ...data, companyId }),
};
const Cart = {
	add: (data) =>
		requests.post("client/cart/addToCart", { ...data, companyId, clientId }),
	remove: (data) =>
		requests.post("client/cart/subtractFromCart", {
			...data,
			companyId,
			clientId,
		}),
	get: () => requests.post("client/cart/getCart", { clientId }),
	checkout: (data) =>
		requests.post("client/order/placeOrder", { ...data, clientId, companyId }),
};

const Localities = {
	getAll: (data) =>
		requests.post("admin/locality", { ...data, companyId, createdBy }),
};
const Gallery = {
	getAll: () => requests.post("admin/gallery/getImages", { companyId }),
};
const Address ={
	add:(data)=>
	requests.post('client/auth/addNewAddress' , {...data , clientId }),
	delete:(id)=>
	requests.post('client/auth/deleteAddress' , {clientId , id}),
	update:(data)=>
	requests.post('client/auth/updateAddress' , {clientId , ...data}),
	updateStatus:(id)=>
	requests.post('client/auth/setDefaultAddress' , {clientId , ...id}),
}
const Services = {
	Register,
	Login,
	Client,
	Category,
	Product,
	Testimonial,
	Contact,
	Cart,
	Localities,
	Gallery,
	Address,
};
export default Services;
