import ApolloClient from 'apollo-boost';
import { DEV_UNPROTECTED_APPS_URL } from 'react-native-dotenv'

const uri = `${DEV_UNPROTECTED_APPS_URL}/apps/ptb/api/gql/profile/v1`;
const client = new ApolloClient({uri: uri});
export default client;
