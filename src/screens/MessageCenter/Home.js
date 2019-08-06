import React, { Component } from 'react';
import { Image, ImageBackground, View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'
import ApolloClient from 'apollo-boost';
import { APPS_BASE_URL } from 'react-native-dotenv'
import BackgroundTimer from '../../utils/timer';
import * as Progress from 'react-native-progress';
import { updateProgressFlag } from '../../utils/redux/actions/action';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
// Styles

import ApplicationStatus from './components/ApplicationStatus';

import ApplicationFeed from './components/ApplicationFeed';
import {testGetApplication} from "../../utils/apis/application";
import images from "../../assets";
import { GET_APPLICATION_QUERY } from '../../utils/apollo/queries/application';

const uri = `${APPS_BASE_URL}/apps/ptb/api/gql/applications/v1`;
const client = new ApolloClient({uri: uri});
class Home extends Component {

    //On Press Navigation
    _onPendingApplicationsPress = () => { this.props.navigation.navigate('Pending') }
    _onInProgressApplicationsPress = () => { this.props.navigation.navigate('InProgress') }
    _onApprovedApplicationsPress = () => { this.props.navigation.navigate('Approved') }
    _onApplicationDetailPress = () => { this.props.navigation.navigate('Details') }

    componentDidMount() {
        console.log('Applications didmount')
        // this.getMedicareApps();
        this.getApplications()
        //BackgroundTimer.startTimer(this.props.dispatch, this.props.navigation);
    }
     getApplications = () => {
        this.props.dispatch(updateProgressFlag(true));

        testGetApplication()
            .then((res) => {
                this.props.dispatch(updateProgressFlag(false));
                console.log({ getApplications: res })
                const response = res.data.data;
                const data = response.getApplications.data;
                this.setState({ data, filteredData: data, filteredDataByOption: data })
            })
            .catch((error) => {
                console.log({ profileError: error });
                this.props.dispatch(updateProgressFlag(false));
            })
    }

    getMedicareApps = async () => {
        const { auth } =this.props;
        const { profile, username } = auth;
        const encryptedTaxId = profile.producer.encryptedTaxId;
        const userId = username
        this.props.dispatch(updateProgressFlag(true));
        try {
            let res = await client.query({ query: GET_APPLICATION_QUERY, fetchPolicy: 'network-only', variables: { userId, encryptedTaxId } });
            this.props.dispatch(updateProgressFlag(false));
            console.log({ getApplications: res })
            const response = res.data;
            const data = response.getApplications.data;
            this.setState({ data, filteredData: data, filteredDataByOption: data })
        } catch(error) {
            console.log({ getApplications: error });
            this.props.dispatch(updateProgressFlag(false));
        }
    }
    selectStatus = (num) => {
      this.setState({
          selectedStatus: num,
          filteredData: this.filterDataByStatus(num)
      });
    };
    selectFilterOption = (num) => {
        this.setState({
            selectedFilterOption: num,
            selectedStatus: -1,
            filteredDataByOption: this.filterDataByFilterOption(num),
            filteredData: this.filterDataByFilterOption(num)
        });
    };
    filterDataByFilterOption = (selectedFilterOption) => {
        const{ data } = this.state;
        switch (selectedFilterOption) {
            case 1:
                return data.filter(d => d.marketSegment === "smallgroup");
            case 2:
                return data.filter(d => d.marketSegment === "senior");
            default:
                return data
        }
    };
    filterDataByStatus = (selectedStatus) => {
        const{ filteredDataByOption } = this.state;
        switch (selectedStatus) {
            case 0:
                return filteredDataByOption.filter(d => d.status === "actionreq");
            case 1:
                return filteredDataByOption.filter(d => d.status === "submitted");
            case 2:
                return filteredDataByOption.filter(d => d.status === "inprogress");
            case 3:
                return filteredDataByOption.filter(d => d.status === "completed");
            case 4:
                return filteredDataByOption.filter(d => d.status === "statusx");
            default:
                return filteredDataByOption
        }
    };
    renderNoResult = () => {
        return (
            <View style={styles.noResultContainer}>
                <View>
                    <Image source={images.noResultAll}/>
                </View>
                <View>
                    <Text style={styles.noResultMessage1}>Nothing Here...</Text>
                </View>
                <View>
                    <Text style={styles.noResultMessage2}>You don't have any applications yet.</Text>
                </View>

            </View>
        );
    };
    onFocusSearch = () => {
        console.log("onFocusSearch");
        this.props.navigation.navigate("Search");
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredDataByOption: [],
            filteredData: [],
            selectedFilterOption: 0,
            selectedStatus: -1
        }
    }
    render() {
        const { filteredDataByOption, filteredData, selectedFilterOption, selectedStatus } = this.state;
        return (
            <View style={styles.wrap}>
                    <ParallaxScrollView
                        backgroundColor="#F5F5F5"
                        contentBackgroundColor="#F5F5F5"
                        parallaxHeaderHeight={360}
                        stickyHeaderHeight={90}
                        renderForeground={() => (
                        <ImageBackground 
                            style={styles.backgroundImage} 
                            source={images.applicationImage}
                        >
                        <View 
                            style={styles.logoWrap}
                        >
                            <Image 
                                style={styles.Logo} 
                                source={images.logo_anthem_white}
                            />
                            <TouchableOpacity 
                                style={styles.profileAvatar}
                            >
                                {/* <Image style={styles.Logo} source={require('../../assets/images/profile.png')}/> */}
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.search}
                            >
                                <Image 
                                    style={styles.Logo} 
                                    source={images.menuVerticalDot}
                                />
                            </TouchableOpacity>
                        </View>
                        <View  
                            style={styles.headerWrap}
                        >
                            <Text style={styles.welcomeBackText}>Julia, Welcome Back To</Text>
                            <Text style={styles.text}>Broker Go</Text>
                        </View>
                        <View style={{ alignItems: 'center'}}>
                            <View
                                style={styles.backgroundStatusContainer}
                            >
                                <TouchableOpacity
                                    onPress={() => this.selectFilterOption(0)}
                                    style={selectedFilterOption === 0? styles.filterTabLeftActive: styles.filterTabLeft}
                                >
                                    <Text style={styles.filterOptionText}>All</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.selectFilterOption(1)}
                                    style={selectedFilterOption === 1? styles.filterTabMiddleActive: styles.filterTabMiddle}
                                >
                                    <Text style={styles.filterOptionText}>Small Groups</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.selectFilterOption(2)}
                                    style={selectedFilterOption === 2? styles.filterTabRightActive: styles.filterTabRight}
                                >
                                    <Text style={styles.filterOptionText}>Medicare</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        </ImageBackground>
                    )}>
                   
                   <View 
                        style={styles.container}
                    >
                    <ScrollView
                        style={styles.container}
                    >
                        <View 
                            style={styles.searchContainer}
                        >
                            <TextInput 
                                style={styles.inputText}
                                placeholder={'Search for Applications'}
                                placeholderTextColor={'#999'}
                                underlineColorAndroid={'#fff'}
                                autoCorrect={false}
                                onFocus={() => this.onFocusSearch()}
                            />
                        </View>
                        <Text style={styles.applicationText}>Application Status</Text>
                         <ApplicationStatus
                             data={filteredDataByOption}
                             selectedStatus={selectedStatus}
                             selectStatus={this.selectStatus}
                         />
                        <View 
                            style={styles.feedWrap}
                        >
                            {filteredData.length === 0?
                                this.renderNoResult()
                                :
                                <ApplicationFeed
                                    data={filteredData}
                                />
                            }
                        </View>
                    </ScrollView>
                    </View>
                </ParallaxScrollView> 
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.authReducer
})

const mapDispatchToProps = (dispatch) => ({

})

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'rgba(246,248,249,0.98)',
    },
    container: {
        flex: 1,
        marginTop: -15,
        marginBottom: 7,
        paddingTop: 10,
        backgroundColor: 'rgba(246,248,249,0.98)',     
        borderTopLeftRadius: 19, 
        borderTopRightRadius: 19,
        overflow: "hidden"
    },
    backgroundImage: {
        flex: 1,
        //resizeMode: 'cover',
        //position: 'absolute',
        width: null,
        height: null,
        
        justifyContent: 'center'
    },
    searchContainer: {
        //flexDirection: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 35,

        marginTop: 19,
        marginLeft: 16,
        marginRight: 16,
        shadowOffset:{  width: 0,  height: 1,  },
        shadowColor: 'rgba(0,0,0,0.05)',
        shadowOpacity: 14.0,
      },
      inputText: {
        marginTop: 9,
        
        marginLeft: 43,
        fontSize: 15,
        color: '#999'
    },
    backgroundStatusContainer: {
        flexDirection: 'row',
        width: '90%'
    },
    filterTabLeft: {
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderColor: 'rgba(0, 0, 0, 0.18)',
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterTabLeftActive: {
        borderRightWidth: 1,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderRightColor: 'rgba(0, 0, 0, 0.18)',
        backgroundColor: 'rgba(0, 0, 0, 0.18)',
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterTabMiddle: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopColor: 'rgba(0, 0, 0, 0.18)',
        borderBottomColor: 'rgba(0, 0, 0, 0.18)',
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterTabMiddleActive: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.18)',
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterTabRight: {
        borderWidth: 1,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderColor: 'rgba(0, 0, 0, 0.18)',
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterTabRightActive: {
        borderLeftWidth: 1,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderLeftColor: 'rgba(0, 0, 0, 0.18)',
        backgroundColor: 'rgba(0, 0, 0, 0.18)',
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterOptionText: {
        fontFamily: 'SourceSansPro-Regular',
        color: "white"
    },

    feedWrap: {
        flex: 1,
        marginTop: 10,
    },
    statusText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
        color: "#ff5050"
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
    applicationText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 13,
        color:'rgba(0,0,0,0.4)',
        paddingTop: 20,
        paddingLeft: 16,
        paddingBottom: 10

    },
    text: {
        color: '#fff',
        fontSize: 57,
        fontWeight: '100',
        fontFamily: 'Roboto-Thin'
    },
    welcomeBackText: {
        color: '#fff',
        fontSize: 15,
        //fontWeight: '100',
        fontFamily: 'Roboto-Regular'
    },
    logoWrap: {
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 16,
        marginBottom: 10,
        
    },
    headerWrap: {
        padding: 10,
        marginBottom: 10

    },
    profileAvatar: {
        marginLeft: 190,
        marginRight: 22,
        height: 26,
        width: 26
    },
    search: {
        //marginRight: 23.76,
    },
    noResultContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 25,
    },
    noResultMessage1: {
        fontSize: 20,
        fontWeight: '300',
        fontFamily: 'Roboto-Regular'
    },
    noResultMessage2: {
        fontSize: 13,
        marginTop: 5,
        fontWeight: 'normal',
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Roboto-Regular'
    }
  });

export default connect(mapStateToProps)(Home)

