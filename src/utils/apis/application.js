import axios from 'axios';
import { TEST_APPLICATION_ENDPOINT } from 'react-native-dotenv'

export const testGetApplication = () => {
    return new Promise((resolve, reject) => {
        return axios.get(TEST_APPLICATION_ENDPOINT, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            resolve(res);
        }).catch((e) => {
            reject(e);
        })
    })
};