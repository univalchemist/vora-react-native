import gql from 'graphql-tag';
export const GET_APPLICATION_QUERY = gql`query getApplications($userId: String!, $encryptedTaxId: String!) {
    getApplications(appsInput: {userId: $userId, encryptedTaxId: $encryptedTaxId}) {
        data{
          acn
          name
          marketSegment
          product
          state
          status
          hcid
          phoneNumber
          agents{
            paidTin
            parentTin
            writingTin
          }
          requestEffectiveDate
          appCreationDate
          submittedDate
          exchangeType
    
        }
        metadata{
          pageSize
          pageNumber
          totalElements
          totalPages
        }
    
      }
}`;