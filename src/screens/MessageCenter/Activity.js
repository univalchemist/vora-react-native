import React, { Component } from 'react';
import { Image, ImageBackground, View, ScrollView, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'

// Styles
import { GLOBAL_WRAP } from '../../styles'
const shows_first = [
    {
        key: 1,
        status:'Pending Assestations',
        timeline: " 1d ago",
        type: 'Individual: You have one application that needs your attestation.',
        //description: " You have one application that needs your attestation.",
        clientName: "Robert Smith",
        identifier: "# 358M5992",
        nextAction: " attestation needed"
    },
    {
        key: 2,
        status:'Pending Assestations',
        timeline: " 1d ago",
        type: 'Individual: You have one application that needs your attestation.',
        //description: " You have one application that needs your attestation.",
        clientName: "Robert Smith",
        identifier: "# 358M5992",
        nextAction: " attestation needed"
    },
    {
        key: 3,
        status:'Pending Assestations',
        timeline: " 1d ago",
        type: 'Individual: You have one application that needs your attestation.',
        //description: " You have one application that needs your attestation.",
        clientName: "Robert Smith",
        identifier: "# 358M5992",
        nextAction: " attestation needed"
    },
    {
        key: 4,
        status:'Pending Assestations',
        timeline: " 1d ago",
        type: 'Individual: You have one application that needs your attestation.',
        //description: " You have one application that needs your attestation.",
        clientName: "Robert Smith",
        identifier: "# 358M5992",
        nextAction: " attestation needed"
    },
    {
        key: 5,
        status:'Pending Assestations',
        timeline: " 1d ago",
        type: 'Individual: You have one application that needs your attestation.',
        //description: " You have one application that needs your attestation.",
        clientName: "Robert Smith",
        identifier: "# 358M5992",
        nextAction: " attestation needed"
    },
    {
        key: 6,
        status:'Pending Assestations',
        timeline: " 1d ago",
        type: 'Individual: You have one application that needs your attestation.',
        //description: " You have one application that needs your attestation.",
        clientName: "Robert Smith",
        identifier: "# 358M5992",
        nextAction: " attestation needed"
    }
]

class Activity extends Component {
    constructor(props){
        super(props)
    }
    _renderItem(item){
        return (
            <View style={styles.cardWrap}>
          
                    <View style={styles.cardLevelOne}>
                        <View style={styles.statusContainer}>
                            <Text style={styles.statusText}>{item.status}</Text>
                        </View>
                        <View style={styles.timelineContainer}>
                            <Text style={styles.timelineText}>{item.timeline}</Text>
                        </View>
                    </View>
                    <View style={styles.cardLevelOne}>
                        <View styles={styles.descriptionContainer}>
                            <Text style={styles.typeText}>{item.type}</Text>
                            <Text style={styles.descriptionText}>{item.description}</Text>
                        </View>
                    </View>
                        <View style={styles.cardLevelOne}>
                            
                            <TouchableOpacity style={styles.ellipseAvatar}>
                                <Image style={styles.Logo} source={require('../../assets/icons/Ellipse.png')}/>
                            </TouchableOpacity>
                            <View style={styles.cardSubLevelTwo}>
                                <Text style={styles.clientText}>{item.clientName}</Text>
                                <Text style={styles.identifierText}>{item.identifier}</Text>
                            </View>
                            <View style={styles.cardSubLevelThree}>
                                <TouchableOpacity style={styles.statusButton}>
                                    <Text style={styles.statusButtonText}>Pending</Text>
                                </TouchableOpacity>
                                <Text style={styles.descriptionText}>{item.nextAction}</Text>
                            </View>
                        </View>
                    

                 
            </View>
        )
    }

    render() {
        return (
            <View style={styles.wrap}>
                <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/headerImage.png')}>
                    <View style={styles.logoWrap}>
                        <Image style={styles.Logo} source={require('../../assets/logos/Logo-Anthem-White.png')}/>
                        <TouchableOpacity style={styles.profileAvatar}>
                            <Image style={styles.Logo} source={require('../../assets/images/profile.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.search}>
                            <Image style={styles.Logo} source={require('../../assets/icons/Search.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerWrap}>
                    <Text style={styles.text}>Activity</Text>
                    </View>
                </ImageBackground>
                <View style={styles.container}>
                <ScrollView style={styles.feedWrap}>
                <View style={{marginLeft: 5}}>
                    <View style={{flex: 1}}>
                        <FlatList
                            data={shows_first}
                            SeparatorComponent={() => <View  style={{width: 5}}/>}
                            renderItem={({item}) => this._renderItem(item)}
                        />
                        
                    </View>
                    
                </View>
                </ScrollView>
                </View>
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
    },
    container: {
        flex: 2,
        backgroundColor: '#F5F5F5',
    },
    backgroundImage: {
        flex: 1,
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
        paddingBottom: 30,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowOffset:{  width: 0,  height: 1,  },
        shadowColor: 'rgba(0,0,0,0.07)',
        shadowOpacity: 14.0,
    },

    //LEVEL ONE STYLING
    cardLevelOne: {
        flex: 1,
        flexDirection: 'row',
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
        marginRight: 70,
        
    },
    timelineContainer :{
        //flex: 1,
        alignItems: 'flex-end'

    },
    feedWrap: {
        flex: 1,
        marginTop: -20
    },
    statusText: {
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
    timelineText:{
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 13,
        color: 'rgba(0,0,0,0.4)'
    },
    identifierText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 13,
        color: 'rgba(0,0,0,0.5)'

    },
    text: {
        color: '#fff',
        fontSize: 42,
        fontWeight: '100',
        fontFamily: 'Poppins-Thin'
    },
    logoWrap: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 100,
        marginLeft: 10,
        
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
    typeText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        color: "#000"

    },
    statusButtonText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        color: "#fff"

    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(Activity)