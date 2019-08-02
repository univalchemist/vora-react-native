import React, { Component } from 'react';
import { View,KeyboardAvoidingView, Keyboard,TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

// Styles
import { GLOBAL_WRAP } from '../../styles'
import { Title } from '../../components/text/Title';
import { styles } from './style';
class Calendar extends Component {


  render() {

    const { navigate } = this.props.navigation

      return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
          <View style={GLOBAL_WRAP.LOGIN}>
            <View style={GLOBAL_WRAP.LOGIN_CONTENT}>
              <KeyboardAvoidingView behavior="padding">
                <View style={styles.wrap}>
                  <Title
                    text ='Anthem Main'
                    textAlign ='center'
                  />
                </View>
              </KeyboardAvoidingView>
            </View>    
          </View>
        </TouchableWithoutFeedback>
      )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
//     setUserDetails: (user) => dispatch(setUserDetails(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
