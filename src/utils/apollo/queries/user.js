import gql from 'graphql-tag';
export const USER_PROFILE_QUERY = gql`query getProfile($userId: String!) {
    getProfile(userId: $userId) {
        profile{emailAddress,userType, producer{encryptedTaxId affiliatedMarkets {state markets } }}
    }
}`;


