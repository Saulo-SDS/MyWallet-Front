import axios from "axios";

const URL_SERVER = "http://localhost:4000";

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
  return axios.post(
    `${URL_SERVER}/client/transactions/new`,
    body,
    authorization
  );
}

function getPayments(authorization) {
  return axios.get(`${URL_SERVER}/client/transactions`, authorization);
}

export { postUser, getUser, deleteSession, postPayment, getPayments };
