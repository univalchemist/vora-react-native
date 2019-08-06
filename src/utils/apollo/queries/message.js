import gql from 'graphql-tag';
export const GET_MESSAGE_QUERY = gql`query getMessages($criteria: String!) {
    getMessages(messagesInput: {criteria: $criteria, messageType: "General", channel: "mobile"}) {
        messages{ title description }
    }
}`;