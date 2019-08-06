import axios from 'axios';
import { LOGIN_BASE_URL } from 'react-native-dotenv'
export const getCookie = (form) => {
    return new Promise((resolve, reject) => {
        return axios.post(`${LOGIN_BASE_URL}/siteminderagent/forms/login.fcc`, form, {
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
}
export const testGetProfile = (body) => {
    return new Promise((resolve, reject) => {
        return axios.post("http://demo4590125.mockable.io/apps/ptb/api/gql/profile/v1", body, {
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