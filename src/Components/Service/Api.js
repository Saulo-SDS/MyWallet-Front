import axios from "axios";

const URL_SERVER = "http://localhost:4000";

function postUser(body) {
    return axios.post(`${URL_SERVER}/sign-up`, body);
}

function getUser(body) {
    return axios.post(`${URL_SERVER}/sign-in`, body);
}

export {
    postUser,
    getUser,
}