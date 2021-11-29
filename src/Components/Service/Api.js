import axios from "axios";

const URL_SERVER = "https://back-mywallet-1.herokuapp.com";

function postUser(body) {
  return axios.post(`${URL_SERVER}/sign-up`, body);
}

function getUser(body) {
  return axios.post(`${URL_SERVER}/sign-in`, body);
}

function deleteSession(authorization) {
  return axios.delete(`${URL_SERVER}/user/logout`, authorization);
}

function postPayment(body, authorization) {
  return axios.post(`${URL_SERVER}/user/payments/new`, body, authorization);
}

function getTransactions(authorization) {
  return axios.get(`${URL_SERVER}/user/payments`, authorization);
}

export { postUser, getUser, deleteSession, postPayment, getTransactions };
