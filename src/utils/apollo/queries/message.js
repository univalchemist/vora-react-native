import gql from 'graphql-tag';
export const GET_MESSAGE_QUERY = gql`query getMessages {
    getMessages(messagesInput: {criteria: "lineOfBusiness:state|SNR,IND:NY,KY", messageType: "General", channel: "mobile"}) {
        messages{ title description }
    }
}`;