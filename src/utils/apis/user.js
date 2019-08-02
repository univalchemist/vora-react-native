import axios from 'axios';
import { DEV_PROTECTED_URL, TEST_PROFILE_ENDPOINT } from 'react-native-dotenv'
export const getCookie = (form) => {
    return new Promise((resolve, reject) => {
        return axios.post(`${DEV_PROTECTED_URL}/siteminderagent/forms/login.fcc`, form, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            console.log('response:::', response);
            resolve(response);
        }).catch((error) => {
            console.log('response:error->', error);
            reject(error);
        })
    })
};


export const testGetProfile = (body) => {
    return new Promise((resolve, reject) => {
        return axios.post(TEST_PROFILE_ENDPOINT, body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            resolve(res);
        }).catch((e) => {
            reject(e);
        })
    })
};