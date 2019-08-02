import React, {Component} from 'react'
import {Text,
        View, 
        ScrollView,
        ImageBackground,
        FlatList 
} from 'react-native'

//DATA
import {connect} from 'react-redux'
import { EditButton, ContactButton } from '../../components/buttons';
import { styles } from './style';

const shows_first = [
    {
        key: 1,
        name:'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
    },
    {
        key: 2,
        name:'Modern Family',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
    },
    {
        key: 3,
        name:'The Flash',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg'
    },
    {
        key: 4,
        name:'Supergirl',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg'
    },
    {
        key: 5,
        name:'Designated Survivor',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key: 6,
        name:'24: Legacy',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg'
    }
]

class PlansList extends Component {
    constructor(props){
        super(props)
    }
    _renderItem(item){
        return (
            <View style={{flex: 1}}>
          
                    <ImageBackground style={{width: 180, height: 200, margin: 10, borderRadius: 20}} source={{uri: item.image}} >
                        <Text>{item.name}</Text>
                        <ContactButton
                            buttonColor='blue'
                            buttonTitle="Contact"
                            //onPress={this._onLoginPress}
                            marginTop={12}
                        />
                    </ImageBackground>
                 
            </View>
        )
    }
    render(){
        return (
            <View style={{flex: 1, backgroundColor:'white'}}>
                {/* <Header /> */}
                <ScrollView>
                {/* <Slide /> */}
                <View style={{marginLeft: 5}}>
                    <View style={{flex: 1}}>
                        <Text style={{color: 'black', fontSize: 17}}>Recommended Retainer Plans</Text>
                        <FlatList
                            horizontal
                            data={shows_first}
                            SeparatorComponent={() => <View  style={{width: 5}}/>}
                            renderItem={({item}) => this._renderItem(item)}
                        />
                        <EditButton
                            buttonColor='default'
                            buttonTitle="Edit"
                            //onPress={this._onLoginPress}
                            marginTop={12}
                        />
                    </View>
                    
                </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
//     setUserDetails: (user) => dispatch(setUserDetails(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(PlansList)