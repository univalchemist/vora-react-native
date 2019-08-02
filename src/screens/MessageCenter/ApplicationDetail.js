
import React, {Component} from 'react';
import {FlatList,ImageBackground, StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const applicationsDetails = [
  {
      key: 1,
      status:'Pending Assestations',
      timeline: " 1d ago",
      type: 'Individual: You have one application that needs your attestation.',
      //description: " You have one application that needs your attestation.",
      clientName: "Robert Smith",
      identifier: "# 358M5992",
      nextAction: "Under Review",
      market: "Small Group",
      state: "Georgia",
      products:"Medical, Dental"
  },
]

export default class ApplicationDetail extends Component {

  _renderItem(item){
    return (
      <ScrollView
        horizontal
      >
          <View style={styles.cardWrap}>
            <Text>{item.clientName}</Text>
          </View>
          <View style={styles.secondCardWrap}>
            <Text>{item.clientName}</Text>
          </View>
      </ScrollView>
    )
}
  render() {
    return (
       
      <View style={styles.wrap}>
        <ImageBackground 
          source={require('../../assets/images/applicationsImage.png')}
          style={styles.backgroundImage}
        >
        </ImageBackground>
        <View style={styles.detailsContainer}>
        <View style={styles.feedWrap}>
          <FlatList
            data={applicationsDetails}
            //SeparatorComponent={() => <View  style={{marginRight: -5}}/>}
            renderItem={({item}) => this._renderItem(item)}
          />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#F5F5F5',
},
feedWrap: {
  flex: 1,
  marginTop: -50,
},
backgroundImage: {
  flex: 1,
  //resizeMode: 'cover',
  //position: 'absolute',
  width: null,
  height: null,
  justifyContent: 'center'
},
  detailsContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardWrap: {
    backgroundColor: '#fff',
    flex: 1,
    height: 419,
    width: 333,
    marginBottom: 10,
    marginRight: 14,
    marginLeft: 14,
    paddingTop: 20,
    //paddingBottom: 30,
    borderRadius: 15,
    shadowOffset:{  width: 0,  height: 1,  },
    shadowColor: 'rgba(0,0,0,0.07)',
    shadowOpacity: 14.0,
},
secondCardWrap: {
  backgroundColor: '#fff',
  flex: 1,
  height: 419,
  width: 333,
  marginBottom: 10,
  marginRight: 14,
  marginLeft: -5,
  paddingTop: 20,
  //paddingBottom: 30,
  borderRadius: 15,
  shadowOffset:{  width: 0,  height: 1,  },
  shadowColor: 'rgba(0,0,0,0.07)',
  shadowOpacity: 14.0,
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
});

 