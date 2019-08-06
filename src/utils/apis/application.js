import axios from 'axios';
export const getCookie = (form) => {
    return new Promise((resolve, reject) => {
        return axios.post("", form, {
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
export const testGetApplication = (body) => {
    return new Promise((resolve, reject) => {
        return axios.get("http://demo4590125.mockable.io/apps/ptb/api/gql/applications/v1", body, {
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
export const testSearchApplication = (body) => {
    return new Promise((resolve, reject) => {
        return axios.post("http://demo4590125.mockable.io/apps/ptb/api/gql/search", body, {
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