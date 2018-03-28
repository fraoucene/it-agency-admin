import { AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT, AUTH_CHECK } from 'admin-on-rest';
import axios from 'axios'
import {LOGIN_URL, SERVER_BACK} from "./index";
export default (type, params) => {

    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        return axios.post(SERVER_BACK + LOGIN_URL
                .replace('{username}', username)
                .replace('{password}', password))
            .then( reps  => {
                localStorage.setItem('token', reps.data.token);
            });
    }

    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }

    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }


    return Promise.resolve();
}