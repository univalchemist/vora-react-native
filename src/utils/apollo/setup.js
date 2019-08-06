import ApolloClient from 'apollo-boost';
import { PROFILE_BASE_URL } from 'react-native-dotenv'

const uri = `${PROFILE_BASE_URL}/apps/ptb/api/gql/profile/v1`;
const client = new ApolloClient({uri: uri});
export default client;
