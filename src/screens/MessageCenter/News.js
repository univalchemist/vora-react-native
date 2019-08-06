import React, { Component } from 'react';
import { Image, ImageBackground, View, ScrollView, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'
import ViewMoreText from 'react-native-view-more-text';
import _ from 'lodash';
import ApolloClient from 'apollo-boost';
import { MSGS_BASE_URL } from 'react-native-dotenv'
// Styles
import { GLOBAL_WRAP } from '../../styles'
import { COLOR } from '../../styles/color';
import images from '../../assets';
import { getMessages } from '../../utils/apis/message';
import { updateProgressFlag } from '../../utils/redux/actions/action';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { GET_MESSAGE_QUERY } from '../../utils/apollo/queries/message';


const uri = `${MSGS_BASE_URL}/apps/ptb/api/gql/messages/v1`;
const client = new ApolloClient({uri: uri});
class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }
    componentDidMount() {
        this.getMessages();
    }
    getMessages = async () => {
        const {profile} = this.props;
        let state = "";
        let markets = "";
        console.log({profile});
        profile.producer.affiliatedMarkets.map(item => 
            state = state + item.state + ","
        );
        const t = _.maxBy(profile.producer.affiliatedMarkets, function(o) { return o.markets.length; });
        t.markets.map(item =>
            markets = markets + item + ","
        );
        state = state.substring(0, state.length - 1);
        markets = markets.substring(0, markets.length - 1);
        this.props.dispatch(updateProgressFlag(true));
        const criteria = `lineOfBusiness:state|${markets}:${state}`
        console.log(criteria)
        try {
            let res = await client.query({ query: GET_MESSAGE_QUERY, fetchPolicy: 'network-only', variables: { criteria } });
            this.props.dispatch(updateProgressFlag(false));
                console.log({ getMessages: res })
                const response = res.data;
                const messages = response.getMessages.messages;
                this.setState({ messages })
        } catch(error) {
            console.log({ getMessages: error });
            this.props.dispatch(updateProgressFlag(false));
        }
    }
    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text  
                style={{
                    fontFamily: 'SourceSansPro-Regular',
                    fontSize: 15,
                    fontWeight: '600',
                    color: "#0067A5",
                    marginTop: 5 }} 
                onPress={handlePress}
            >
                Read All
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text
                style={{
                    fontFamily: 'SourceSansPro-Regular',
                    fontSize: 15,
                    fontWeight: '600',
                    color: "#0067A5",
                    marginTop: 5 }} 
                onPress={handlePress}
            >
                Show less
            </Text>
        );
    }
    _renderItem(item) {
        return (
            <View style={styles.cardWrap}>

                <View style={styles.cardLevelOne}>
                    <View style={styles.statusContainer}>
                        <Text style={styles.titleText}>{item.title}</Text>
                    </View>
                    <View style={styles.timelineContainer}>
                        <Text style={styles.greyText}>{"1d ago"}</Text>
                    </View>
                </View>
                <View style={styles.cardLevelOne}>
                    <View styles={styles.descriptionContainer}>
                        <ViewMoreText
                            numberOfLines={3}
                            renderViewMore={this._renderTruncatedFooter}
                            renderViewLess={this._renderRevealedFooter}
                        >
                            <Text style={styles.descriptionText}>
                                {item.description}
                            </Text>
                        </ViewMoreText>
                    </View>
                </View>
            </View>
        )
    }
   
    render() {
        const { messages } = this.state;
        return (
            <View style={styles.wrap}> 
                <ParallaxScrollView
                    backgroundColor="#F5F5F5"
                    contentBackgroundColor="#F5F5F5"
                    parallaxHeaderHeight={280}
                    stickyHeaderHeight={170}
                    renderForeground={() => (
                        <ImageBackground 
                            style={styles.backgroundImage} 
                            source={require('../../assets/images/newsBackground.png')}
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
                                    <Image 
                                        source={images.message_profile_img} 
                                    />
                                </TouchableOpacity>
                            </View>
                            <View 
                                style={styles.headerWrap}
                            >
                                <Text style={styles.text}>News</Text>
                            </View>
                        </ImageBackground>
                    )}>
                   
                   <View 
                        style={styles.container}
                    >
                        <ScrollView 
                            style={styles.feedWrap}
                        >
                            <View 
                                style={{ marginLeft: 5 }}
                            >
                                <View 
                                    style={{ flex: 1 }}
                                >
                                    <FlatList
                                        data={messages}
                                        SeparatorComponent={() => <View style={{ width: 5 }} />}
                                        renderItem={({ item }) => this._renderItem(item)}
                                        refreshing={true}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </ParallaxScrollView>
                
            </View>
        )
    }
}


const mapStateToProps = (state) => ({
    profile: state.authReducer.profile
})
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    container: {
        flex: 2,
        backgroundColor: '#F5F5F5',
    },
    backgroundImage: {
        flex: .8,
        //resizeMode: 'cover',
        //position: 'absolute',
        width: null,
        height: null,

        justifyContent: 'center'
    },
    cardWrap: {
        backgroundColor: '#fff',
        flex: 1,
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

    //LEVEL ONE STYLING
    cardLevelOne: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    cardSubLevelTwo: {
        //flex: 1,
        flexDirection: 'column',
        marginLeft: 10
    },
    cardSubLevelThree: {
        //flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginLeft: 50
    },
    cardLevelThree: {
        flex: 1,
        flexDirection: 'row',
    },
    statusContainer: {
        //flex: 1,
        alignItems: 'flex-start',
        width: '70%'

    },
    timelineContainer: {
        //flex: 1,
        alignItems: 'flex-end'

    },
    feedWrap: {
        flex: 1,
        marginTop: -81
    },
    titleText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
        fontWeight: '600',
        color: "#ff5050"
    },
    typeText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        color: "#000"
    },
    descriptionText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        color: "#000",
        paddingBottom: 5
    },
    greyText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 13,
        color: 'rgba(0,0,0,0.4)'
    },
    text: {
        color: '#fff',
        fontSize: 45,
        fontWeight: '100',
        fontFamily: 'Roboto-Thin'
    },
    logoWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,

    },
    headerWrap: {
        padding: 10,
        marginBottom: 17

    },
    Logo: {
        position: 'absolute',
        left: 0,
        bottom: 0
    },
    profileAvatar: {
        height: 26,
        width: 26,
        position: 'absolute',
        right: 0,
        bottom: 0
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
export default connect(mapStateToProps)(News)