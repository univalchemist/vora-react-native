import React, { Component } from "react";
import { StyleSheet,Text, TouchableOpacity, View} from 'react-native';
import { Query } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';

import ApolloClient from "apollo-boost";

import gql from "graphql-tag";


   

    const GET_MEDICARE_STATS = gql`
        query getMedicareAppsStats {
            getMedicareAppsStats(
                statsInput: {
                  statsBy: "status"
                  userId: "ehealthsit02"
                  encryptedTaxId: "MLMPGQJPTY"
                }
            ) 
            {
                total
                statGroups {
                  statsFor
                  count
                }
            }
        }
    `;

    const cache = new InMemoryCache();

    const medicareStatsClient = new ApolloClient({
        uri: "https://services-broker.qa.va.anthem.com/apps/ptb/api/gql/applications/v1",
        cache
      });

      export default class ApplicationStatus extends Component {
        render() {
          return (
            <View style={styles.container}>
             
              <Query  query={GET_MEDICARE_STATS}  client={medicareStatsClient}>
                    {({ loading, error, data }) => {
                        if (loading) return null;
                        if (error) return 
                            <View>
                                <Text>Error</Text>
                            </View>
                        
                        
                        console.log(error);
                        if (data) {

                            const approvedCount = data.getMedicareAppsStats.statGroups[0]
                            const inProgressCount = data.getMedicareAppsStats.statGroups[1]

                            console.log(data);
                            console.log('cache data', cache);
                            return (

                                <View 
                                    style={styles.container}
                                >
                                    <TouchableOpacity 
                                        onPress={this._onPendingApplicationsPress}
                                        style={styles.pendingContainer}
                                    >
                                            <Text style={styles.pendingNumberText}>10</Text>
                                            <Text style={styles.applicationStatusTitleText}>Pending</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        onPress={this._onInProgressApplicationsPress}
                                        style={styles.pendingContainer}
                                    >
                                            <Text style={styles.inProgressNumberText}>{inProgressCount.count}</Text>
                                            <Text style={styles.applicationStatusTitleText}>In Progress</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        onPress={this._onApprovedApplicationsPress}
                                        style={styles.pendingContainer}
                                    >
                                            <Text style={styles.approvedNumberText}>{approvedCount.count}</Text>
                                            <Text style={styles.applicationStatusTitleText}>Approved</Text>
                                    </TouchableOpacity>
                                </View>      
                            );
                        }
                    }}
              </Query>
              
            </View>
          );
        }
      }
      const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            marginTop: 5,   
            backgroundColor: 'rgba(246,248,249,0.98)',
        },
        welcome: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
        },
        instructions: {
          textAlign: 'center',
          color: '#333333',
          marginBottom: 5,
        },
        applicationStatusContainer: {
            flexDirection: 'row',
            marginTop: 5,      
        },
        pendingContainer:{
            backgroundColor: "#fff",
            width: 100,
            height: 68,
            borderRadius: 10,
            marginLeft: 16,
            shadowOffset:{  width: 0,  height: 1,  },
            shadowColor: 'rgba(0,0,0,0.07)',
            shadowOpacity: 14.0,
        },
        pendingNumberText: {
            fontFamily: 'SourceSansPro-Regular',
            fontSize: 25,
            color: "#f9A21F",
            paddingLeft: 9,
            paddingTop: 10    
        }, 
        inProgressNumberText: {
            fontFamily: 'SourceSansPro-Regular',
            fontSize: 25,
            color: "#8091EC",
            paddingLeft: 9,
            paddingTop: 10    
        }, 
        approvedNumberText: {
            fontFamily: 'SourceSansPro-Regular',
            fontSize: 25,
            color: "#75C77D",
            paddingLeft: 9,
            paddingTop: 10    
        }, 
        applicationStatusTitleText: {
            fontFamily: 'SourceSansPro-Regular',
            fontSize: 13,
            color: "#000000",
            paddingLeft: 9,
            paddingBottom: 6
        },
      });
