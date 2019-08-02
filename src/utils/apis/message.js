import axios from 'axios';
import { DEV_PROTECTED_URL } from 'react-native-dotenv'
export const getMessages = (body) => {
    
    return new Promise((resolve, reject) => {
        return axios.post(`${DEV_PROTECTED_URL}/apps/ptb/api/gql/messages/v1`, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}
