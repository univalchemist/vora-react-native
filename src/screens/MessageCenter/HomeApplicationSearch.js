import React, {Component} from 'react';
import {
    ImageBackground,
    View,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux'
import ApolloClient from 'apollo-boost';
import {APPS_BASE_URL} from 'react-native-dotenv'
import BackgroundTimer from '../../utils/timer';
import {updateProgressFlag} from '../../utils/redux/actions/action';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
// Styles


import { testSearchApplication} from "../../utils/apis/application";
import images from "../../assets";
import {GET_APPLICATION_QUERY} from '../../utils/apollo/queries/application';
import ApplicationFeedSearch from "./components/ApplicationFeedSearch";

const uri = `${APPS_BASE_URL}/apps/ptb/api/gql/applications/v1`;
const client = new ApolloClient({uri: uri});

class HomeApplicationSearch extends Component {
    componentDidMount() {
        console.log('Applications didmount')
        //BackgroundTimer.startTimer(this.props.dispatch, this.props.navigation);
    }

    testSearchApplication = () => {
        this.props.dispatch(updateProgressFlag(true));

        testSearchApplication()
            .then((res) => {
                this.props.dispatch(updateProgressFlag(false));
                console.log({SearchApplication: res})
                const response = res.data.data;
                const data = response.searchApplications.data;
                this.setState({data})
            })
            .catch((error) => {
                console.log({SearchApplication: error});
                this.props.dispatch(updateProgressFlag(false));
            })
    }

    searchApplication = async () => {
        const {auth} = this.props;
        const {profile, username} = auth;
        const encryptedTaxId = profile.producer.encryptedTaxId;
        const userId = username
        this.props.dispatch(updateProgressFlag(true));
        try {
            let res = await client.query({
                query: GET_APPLICATION_QUERY,
                fetchPolicy: 'network-only',
                variables: {userId, encryptedTaxId}
            });
            this.props.dispatch(updateProgressFlag(false));
            console.log({SearchApplication: res})
            const response = res.data;
            const data = response.getApplications.data;
            this.setState({data, filteredData: data, filteredDataByOption: data})
        } catch (error) {
            console.log({SearchApplication: error});
            this.props.dispatch(updateProgressFlag(false));
        }
    };
    onChangeSearchInput = (searchKey) => {
        this.setState({searchKey});
        if (searchKey.length > 2) {
            this.testSearchApplication();
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchKey: ''
        }
    }

    render() {
        const { data, searchKey } = this.state;
        return (
            <View style={styles.wrap}>
                <ParallaxScrollView
                    backgroundColor="#F5F5F5"
                    contentBackgroundColor="#F5F5F5"
                    parallaxHeaderHeight={90}
                    stickyHeaderHeight={90}
                    renderForeground={() => (
                        <ImageBackground
                            style={styles.backgroundImage}
                            source={images.applicationImage}
                        >
                        </ImageBackground>
                    )}>

                    <View
                        style={styles.container}
                    >
                        <ScrollView
                            style={styles.container}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View
                                    style={styles.searchContainer}
                                >
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder={'Search for Applications'}
                                        placeholderTextColor={'#999'}
                                        underlineColorAndroid={'#fff'}
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        value={searchKey}
                                        onChangeText={(text) => this.onChangeSearchInput(text)}
                                    />

                                </View>
                                <TouchableOpacity
                                    style={styles.btnCancelContainer}
                                    onPress={() => this.props.navigation.goBack()}
                                >
                                    <Text style={styles.btnCancel}>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={styles.feedWrap}
                            >
                                <ApplicationFeedSearch
                                    data={data}
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
    auth: state.authReducer
})

const mapDispatchToProps = (dispatch) => ({})

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
        marginRight: 10,
        shadowOffset: {width: 0, height: 1,},
        shadowColor: 'rgba(0,0,0,0.05)',
        shadowOpacity: 14.0,
        flex: 1
    },
    inputText: {
        marginTop: 9,

        marginLeft: 43,
        fontSize: 15,
        color: '#999'
    },
    btnCancelContainer: {
        marginTop: 19,
        marginRight: 10,
        height: 35,
        paddingTop: 7
    },
    btnCancel: {
        color: '#0067A5',
        fontSize: 15,
        fontFamily: 'SourceSansPro-Regular',

    },
    backgroundStatusContainer: {
        flexDirection: 'row',
        width: '90%'
    },

    feedWrap: {
        flex: 1,
        marginTop: 10,
    },
});

export default connect(mapStateToProps)(HomeApplicationSearch)

