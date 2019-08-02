import React, { Component } from 'react';
import { Image, View, KeyboardAvoidingView, Keyboard,TouchableWithoutFeedback,ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

//Common
import { Input } from '../../../components/inputs'
import { StdButton } from '../../../components/buttons'

// Styles
import { GLOBAL_WRAP, GLOBAL_ASSET } from '../../../styles'
import { NarrowHeader } from '../../../components/headers/NarrowHeader';
import images from '../../../assets';


class CreateAccount extends Component {
  /*============================================================================================
  ==============================================================================================
  ================================ STATIC/CONSTRUCTOR ==========================================
  ==============================================================================================
  ============================================================================================*/
  
  static navigationOptions = {

    // Don't want a header on this screen because it will overlay inputs for KeyboardAvoidingView
    header: null
}


  constructor(props) {
      super(props)
      this.state = {
          name: '', 
          email: '',
          username: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
          errorMessage: '',
       }
    }

    /*============================================================================================
    ==============================================================================================
    ================================ STATIC/CONSTRUCTOR ==========================================
    ==============================================================================================
    ============================================================================================*/


    /*===============================================================
    = ON_PRESS 
    ===============================================================*/


//     _onCreateAccountPress = () => {
//       const {  confirmPassword, name, email, phoneNumber, password, username } = this.state
//       const { createAccount } = this.props
      
//       if (!username) {
//           Alert.alert("Username required")
      
//       } else if (!name) { 
//           Alert.alert("Name required")
      
//       } else if (!email) {
//           Alert.alert("Email required")
      
//       } else if (!phoneNumber) {
//           Alert.alert("Phone Number required")
      
//       } else if (!password) {
//           Alert.alert("Password required")
      
//       } else if (!confirmPassword) {
//           Alert.alert("Please confirm your password")
      
//       } else if ( password !== confirmPassword) {
//           Alert.alert("Passwords don't match!")
      
//       } else { 
//           createAccount({ name, username, email, phoneNumber, password })
//       }
//   }
  

//   /*===============================================================
//   = RENDER 
//   ===============================================================*/

  _renderButton = () => {
      const { isPosting, isPostingAuth } = this.props

      if ( isPosting || isPostingAuth ){
          return <StdButtonLoading marginTop={16}/>      
      }

      return (
          <View style={{ paddingBottom: 24 }}>
              <StdButton 
                  buttonColor='blue'
                  buttonTitle="Create Account"
                  marginTop={16}
                  onPress= {this._onCreateAccountPress}
              />
          </View>
      )
  }




//   /*============================================================================================
//   ==============================================================================================
//   ================================ LIFECYCLES ==================================================
//   ==============================================================================================
//   ============================================================================================*/


//   componentDidUpdate() {
      
//       // deconstruct props
//       const { 
//           accountAuth, 
//           navigation, 
//           postError, 
//           postErrorResponse, 
//           postSuccess, 
//           postAuthError,
//           postAuthErrorResponse,
//           postAuthSuccess,
//           resetPostCreateStatus,
//           resetPostAuthStatus,
//           token 
//       } = this.props

//       // deconstruct state
//       const { username, password } = this.state



//       /*===============================================================
//       = CREATING ACCOUNT
//       ===============================================================*/

//       // if creation of account unsuccessful, alert error response
//       if (postError) {

//           // if there is a specific error response
//           if (postErrorResponse) {
//               resetPostCreateStatus()
//               Alert.alert(postErrorResponse)

//           // else serve up a default response
//           } else {
//               resetPostCreateStatus()
//               Alert.alert("Unable to create account at this time")
//           }
//       }
      

//       // if account created successfully, authenticate new account to get token
//       if (postSuccess) {
//           resetPostCreateStatus()
//           accountAuth({ username, password })
//       }

      

//       /*===============================================================
//       = AUTHENTICATING ACCOUNT
//       ===============================================================*/

//       // if authentication of newly created account unsuccessful, alert error response
//       if (postAuthError) {

//           if (postAuthErrorResponse) {
//               resetPostAuthStatus()
//               Alert.alert(postAuthErrorResponse)
//           }
//       }


//       // if new account authenticated successfully, store token and navigate to tutorial
//       if (postAuthSuccess) {

//           resetPostAuthStatus()

//           // store token to device
//           AsyncStorage.setItem('token', token )

//           // create and store to device a timestamp of last login date
//           const authDate = new Date().getTime().toString()
//           AsyncStorage.setItem('authDate', authDate)
          
//           navigation.navigate("")

//       }
//   }


      

  render() {

      // deconstruct props
      const { navigation } = this.props

      // deconstruct state
      const { phoneNumber } = this.state


      return (
         <View style={{ flex: 1, backgroundColor: '#fff' }}>
              <View style={[GLOBAL_WRAP.HEADER, { backgroundColor: 'transparent'}]}>
                  <TouchableOpacity
                      style={GLOBAL_WRAP.ICON}
                      onPress={() => navigation.pop()}
                  >
                      <Image 
                          source={images.icon_back_arrow}
                          style={GLOBAL_ASSET.ICON}
                      />
                  </TouchableOpacity>
              </View>
              
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                  <View style={[GLOBAL_WRAP.LOGIN, { zIndex: 999999 }]} >
                      <ScrollView 
                          style={GLOBAL_WRAP.AUTH_MAIN_WITH_HEADER}
                          showsVerticalScrollIndicator={false}
                      >
                          <KeyboardAvoidingView behavior='padding'>
                              <NarrowHeader title="Create Your Account" textColor="#fff" />

                              <Input 
                                  onChangeText={(value) => this.setState({ username: value })}
                                  placeholder="Username"
                                  value={this.state.username}
                              />

                              <Input 
                                  autoCapitalize="words"
                                  onChangeText={(value) => this.setState({ name: value })}
                                  placeholder="Full Name"
                                  value={this.state.name}
                              />

                              <Input
                                  keyboardType="email-address"
                                  onChangeText={(value) => this.setState({ email: value })}
                                  placeholder="Email Address"
                                  value={this.state.email}
                              />

                              <Input
                                  keyboardType="phone-pad"
                                  maxLength={14}
                                  onChangeText={(value) => this.setState({ phoneNumber: formatPhoneNumber(value) })}
                                  placeholder="Phone Number"
                                  value={phoneNumber}
                              />

                              <Input
                                  onChangeText={(value) => this.setState({ password: value })}
                                  placeholder="Password"
                                  secureTextEntry
                                  value={this.state.password}
                                  />

                              <Input
                                  onChangeText={(value) => this.setState({ confirmPassword: value })}
                                  placeholder="Confirm Password"
                                  secureTextEntry
                                  value={this.state.confirmPassword}
                              />

                              {this._renderButton()}
                          </KeyboardAvoidingView>
                      </ScrollView>
                  </View>
              </TouchableWithoutFeedback>
          </View>
      )
  }
}
const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
//     setUserDetails: (user) => dispatch(setUserDetails(user))
 })


export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)