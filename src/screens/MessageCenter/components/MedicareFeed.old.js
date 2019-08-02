import React, { Component } from "react";
import { ActivityIndicator,ScrollView, StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import { Query } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from "apollo-boost";

import gql from "graphql-tag";




const GET_APPLICATIONS_QUERY = gql`
query{  
  getApplications(appsInput: {
    userId:"ehealthsit02",
    encryptedTaxId: "MLMPGQJPTY",
    status:"inprogress"
  }){
        
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
}
  `;
    const cache = new InMemoryCache();

    const medicareClient = new ApolloClient({
        uri: "http://va33dlvmap303.wellpoint.com:7089/apps/ptb/api/gql/applications/v1",
        cache
      });

      export default class MedicareFeed extends Component {
        render() {

          return (
            <View style={styles.container}>
              <Query  query={GET_APPLICATIONS_QUERY}  client={medicareClient}>
                    {({ loading, error, data, refetch, networkStatus }) => {
                        if (loading) 
                              return (
                                <View style={styles.loadingWrap}>
                                  {/* <ActivityIndicator size="large" color="#0000ff" /> */}
                                </View>
                              );
                        if (error)  
                              return (
                                <View>
                                  <Text>Error Fetching Data</Text>
                                </View>
                              );
                        if (data) {
                          
                          const applications = data.getApplications.data
                          console.log('applications data', applications);
                          console.log('cache data', cache);
                        
                        return (
                          <View style={styles.container}>
                            {applications.map
                                ( app =>  
                                  ( 
                                    <TouchableOpacity 
                                      style={styles.cardWrap}
                                          
                                    >
                                      <Text>{app.name}</Text>
                                          {/* <Text>{message.description}</Text> */}
                                    </TouchableOpacity>
                
                                  )
                                )
                            } 
                          </View>
                        );
                      }
                    }
                  }
              </Query>
              
            </View>
          );
        }
      }
      const styles = StyleSheet.create({
        container: {
          //flex: 1,
          
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(246,248,249,0.98)',   
        },
        cardWrap: {
          backgroundColor: '#fff',
          width: 300,
          height: 250,
          //flex: 1,
          marginBottom: 10,
          marginRight: 10,
          marginLeft: 10,
          paddingTop: 20,
          paddingBottom: 20,
          paddingHorizontal: 20,
          borderRadius: 10,
          shadowOffset: { width: 0, height: 1, },
          shadowColor: 'rgba(0,0,0,0.07)',
          shadowOpacity: 14.0,
      },
      loadingWrap: {
        backgroundColor: '#dadad9',
        width: 300,
        height: 250,
        //flex: 1,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 1, },
        shadowColor: 'rgba(0,0,0,0.07)',
        shadowOpacity: 14.0,
    },
      });