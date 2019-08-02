import React from 'react';
import { Dimensions, Image, KeyboardAvoidingView, Platform, StyleSheet,Text, TouchableWithoutFeedback, TouchableOpacity, View, Keyboard} from 'react-native';
import { withNavigation } from 'react-navigation'


const TransparentPopHeader = ({ navigation, title }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity
                        //style={styles.wrap}
                        onPress={() => { this.props.navigation.goBack()}}
                    >
                        <Image
                            source={require('../../assets/icons/backArrow.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    
                    <Text style={styles.Text}>{title}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback> 
    )
}
const styles = StyleSheet.create({
header: {
    flex:1,
    height: Platform.OS === 'ios' ? 80 : 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
   paddingTop: Platform.OS === 'ios' ? 45 : 0,
},
headerLeft: {
   flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 17,
},
Icon: {
    width: 24,
    height: 24
},
// wrap: {
//     alignItems: 'center',
//     height: 60,
//     justifyContent: 'center',
//     position: 'absolute',
//     top: 30,
//     width: 60,
//     zIndex: 9
// },
Text: {
    fontSize: 17,
    color: 'rgba(3,4,4,0.9)',
    fontFamily: 'SourceSansPro-Regular',
    paddingLeft: 16,
    // paddingTop: 54
},
});




export default withNavigation(TransparentPopHeader)