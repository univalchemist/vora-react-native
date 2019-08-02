import React, { Component } from 'react';
import { Image, ImageBackground, View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'

import BackgroundTimer from '../../utils/timer';
import * as Progress from 'react-native-progress';
import { updateProgressFlag } from '../../utils/redux/actions/action';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
// Styles

import ApplicationStatus from './components/ApplicationStatus';

import ApplicationFeed from './components/ApplicationFeed';
import {testGetApplication} from "../../utils/apis/application";
import images from "../../assets";

class Home extends Component {

    //On Press Navigation
    _onPendingApplicationsPress = () => { this.props.navigation.navigate('Pending') }
    _onInProgressApplicationsPress = () => { this.props.navigation.navigate('InProgress') }
    _onApprovedApplicationsPress = () => { this.props.navigation.navigate('Approved') }
    _onApplicationDetailPress = () => { this.props.navigation.navigate('Details') }

    componentDidMount() {
        console.log('Applications didmount')
        this.getApplications();
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
                this.setState({ data })
            })
            .catch((error) => {
                console.log({ profileError: error });
                this.props.dispatch(updateProgressFlag(false));
            })
    }

    /*getMedicareApps = async () => {
        this.props.dispatch(updateProgressFlag(true));
        const body = {
            "query": "query { getMedicareApps(medicareAppsInput: {userId:\"ehealthsit02\",encryptedTaxId:\"MLMPGQJPTY\",sortBy:\"status\",pageSize: 10,pageNumber:1,status: \"approved\"})}"
        }
        console.log("BODY:: " + body);
        getMedicareApps(body)
            .then((res) => {
                this.props.dispatch(updateProgressFlag(false));
                console.log({ getMedicareApps: res })
                const response = res.data.data;
                const data = response.getMedicareApps.data;
                this.setState({ data })
            })
            .catch((error) => {
                console.log({ profileError: error });
                this.props.dispatch(updateProgressFlag(false));
            })
    }*/
    selectStatus = (num) => {
      this.setState({ selectedStatus: num });
    };
    filterData = () => {
        const{ data, selectedFilterOption } = this.state;
        switch (selectedFilterOption) {
            case 1:
                return data.filter(d => d.marketSegment === "smallgroup");
            case 2:
                return data.filter(d => d.marketSegment === "senior");
            default:
                return data
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedFilterOption: 0,
            selectedStatus: 0
        }
    }
    render() {
        const { data, selectedFilterOption, selectedStatus } = this.state;
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
                                    onPress={() => this.setState({selectedFilterOption: 0})}
                                    style={selectedFilterOption === 0? styles.filterTabLeftActive: styles.filterTabLeft}
                                >
                                    <Text style={styles.filterOptionText}>All</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.setState({selectedFilterOption: 1})}
                                    style={selectedFilterOption === 1? styles.filterTabMiddleActive: styles.filterTabMiddle}
                                >
                                    <Text style={styles.filterOptionText}>Small Groups</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.setState({selectedFilterOption: 2})}
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
                            />
                        </View>
                        <Text style={styles.applicationText}>Application Status</Text>
                         <ApplicationStatus
                             data={data}
                             selectedStatus={selectedStatus}
                             selectStatus={this.selectStatus}
                         />
                        <View 
                            style={styles.feedWrap}
                        >
                            <ApplicationFeed
                                data={this.filterData()}
                            />
                        </View>
                    </ScrollView>
                    </View>
                </ParallaxScrollView> 
            </View>
        )
    }
}
const mapStateToProps = (state) => ({

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
    statusContainer: {
        flexDirection: 'column',
        marginRight: 18,   
    },
    timelineContainer :{
        //flex: 1,
        alignItems: 'flex-end'

    },

    feedWrap: {
        //flex: 1,
        marginTop: 10
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
    marketNumberText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 22,
        color: "#FFF",
        paddingLeft: 0,
        paddingTop: 10    
    }, 
    marketTitleText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 13,
        color: "#FFF",
        paddingLeft: 0,
        paddingBottom: 16
    },
    applicationText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 13,
        color:'rgba(0,0,0,0.4)',
        paddingTop: 20,
        paddingLeft: 16,
        paddingBottom: 10

    },
    typeText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        color: "#000"

    },
    identifierText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 13,
        color: 'rgba(0,0,0,0.5)',
        //paddingTop: 5

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
    statusButton: {
        backgroundColor: "#f9A21f",
        height: 20,
        width: 71,
        
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    statusButtonText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        color: "#fff"

    },

  });

export default connect(mapStateToProps)(Home)

