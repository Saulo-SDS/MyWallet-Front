import axios from "axios";

const URL_SERVER = "http://localhost:4000";
const BEARER = 'Bearer';

function postUser(body) {
    return axios.post(`${URL_SERVER}/sign-up`, body);
}

function getUser(body) {
    return axios.post(`${URL_SERVER}/sign-in`, body);
}

function deleteSession(authorization) {
    return axios.delete(`${URL_SERVER}/user/logout`, authorization);
}

export {
    postUser,
    getUser,
    deleteSession,
}