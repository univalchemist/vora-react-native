import React, { Component } from 'react';
import { Alert, Image, View, ImageBackground, Keyboard, TouchableWithoutFeedback, AsyncStorage, Text, TouchableOpacity, AppState } from 'react-native';
import { Container, Item, Input, Icon} from 'native-base';
import { connect } from 'react-redux'
import TouchID from 'react-native-touch-id'
import { Dialog } from 'react-native-simple-dialogs';
import qs from 'qs';
import SplashScreen from 'react-native-splash-screen'
import { SignInButton, TouchIdButton } from '../../../components/buttons'
import images from '../../../assets';
import { styles } from './style';
import {getCookie, testGetProfile} from '../../../utils/apis/user';
import { RoundButton } from '../../../components/buttons/RoundButton';
import BackgroundTimer from '../../../utils/timer'
import { withApollo } from 'react-apollo';
import { USER_PROFILE_QUERY } from '../../../utils/apollo/queries/user';
import { updateProgressFlag } from '../../../utils/redux/actions/action';
import { updateProfile } from '../../../utils/redux/actions/auth';

const optionalConfigObject = {
  title: 'Touch ID Authentication', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

class Login extends Component {
  state = {
    flag: false,
    password: '',
    username: '',
    formValid: false,
    formError: false,
    modalActive: false,
    test: {},
    profile: null,

    focus_username: false,
    focus_password: false,
    errorCount: 6,

    dialogVisible: false,
    dialogVisiblePilot: false,
    dialogVisible_touch: false,
    biometryType: '',
    touchAuth: false,

    appState: AppState.currentState,
    touchOpened: false
  }

  checkTouchFace = () => {
    TouchID.isSupported()
      .then(biometryType => {
        console.log({ biometryType });
        this.setState({ biometryType });
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
        }
        this.onCheckTouchUse();
      })
      .catch(error => {
        // Failure code
        console.log(error.code);
      });
  }
  componentWillMount() {
    SplashScreen.hide();
    BackgroundTimer.stopTimer();
  }
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    if (this.state.appState === 'active') {
      console.log('App is active!')
      this.checkTouchFace()
    }

  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active' && this.state.touchOpened === false) {
      console.log('App has come to the foreground!')
      this.checkTouchFace()
    }
    this.setState({ appState: nextAppState });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.password !== prevState.password
    ) {
      this._validateForm()
    }
  }
  /*===============================================================
  = ON PRESS
  ===============================================================*/

  _onCreateAccountPress = () => { this.props.navigation.navigate('Create') }

  _onSkipPress = () => { this.props.navigation.navigate('Message') }



  _onLoginPress = () => {
    console.log('_onLoginPress')
    const { username, password, errorCount } = this.state;
    /* if (username == "aaa" && password == "aaa") {
      this.onShowAskTouchAuth();
    } else {
      this.setState({ formError: true, dialogVisible: true, errorDescription: "We couldn't complete your login.", errorCount: errorCount - 1 });
    } */



    // this.getCookie(username, password);
    //test endpoint for profile
    this.testGetUserProfile();
  };
  testGetUserProfile = async () => {
    const { errorCount } = this.state;
    this.props.dispatch(updateProgressFlag(true));
    try {
      let res = await testGetProfile();
      this.props.dispatch(updateProgressFlag(false));
      console.log({ profileResponse: res })
      this.setState({profile: res.data.data.getProfile.profile});
      this.props.dispatch(updateProfile(res.data.data.getProfile.profile));
      this.onShowAskTouchAuth();
    } catch (e) {
      console.log({ profileError: e });
      const response = e.graphQLErrors;
      if (response) {
        this.props.dispatch(updateProgressFlag(false));
        const errors = response[0];
        if (errors.code === 'BROKER_NOT_PILOT_USER') {
          this.setState({ dialogVisiblePilot: true, errorCount: errorCount - 1});
        }
        return;
      }
      this.setState({ formError: true, dialogVisible: true, errorCount: errorCount - 1 });
    }
  }
  getCookie = (username, password) => {
    this.props.dispatch(updateProgressFlag(true));
    const { errorCount } = this.state;
    const body = {
      USER: username,
      PASSWORD: password,
      TARGET: '/'
    }
    getCookie(qs.stringify(body))
      .then((res) => {
        this.props.dispatch(updateProgressFlag(false));
        console.log({ getCookieResponse: res })
        this.setState({ formError: true, dialogVisible: true, errorCount: errorCount - 1 });

      })
      .catch((error) => {
        this.props.dispatch(updateProgressFlag(false));
        if (!error.status) {
          console.log("network error")
        }
        console.log({ getCookieError: error })
        const cookie = error.response ? error.response.headers['set-cookie'][0] : null;
        console.log({ cookie })
        if (cookie == null || cookie == undefined) {
          this.setState({ formError: true, dialogVisible: true, errorCount: errorCount - 1 });
          return;
        }

        this.getUserProfile(username);
      })
  }

  getUserProfile = async (username) => {
    const { errorCount } = this.state;
    this.props.dispatch(updateProgressFlag(true));
    try {
      let res = await this.props.client.query({ query: USER_PROFILE_QUERY, fetchPolicy: 'network-only', variables: { userId: username } });
      this.props.dispatch(updateProgressFlag(false));
      console.log({ profileResponse: res })
      this.setState({profile: res.data.getProfile.profile});
      this.props.dispatch(updateProfile(res.data.getProfile.profile));
      this.onShowAskTouchAuth();
    } catch (e) {
      console.log({ profileError: e });
      const response = e.graphQLErrors;
      if (response) {
      this.props.dispatch(updateProgressFlag(false));
        const errors = response[0];
        if (errors.code === 'BROKER_NOT_PILOT_USER') {
          this.setState({ dialogVisiblePilot: true, errorCount: errorCount - 1});
        }
        return;
      }
      this.setState({ formError: true, dialogVisible: true, errorCount: errorCount - 1 });
    }
  }
  onShowAskTouchAuth = () => {
    this.setState({ dialogVisible_touch: true });
  }
  onUseTouchID = async () => {
    try {
      await AsyncStorage.setItem('touchUse', true)
      await AsyncStorage.setItem('profile', JSON.stringify(this.state.profile))
    } catch (error) {
      console.log({ savingTouchAuthUseError: error })
    }
    this.setState({ dialogVisible_touch: false })
    this.props.navigation.navigate('Message')
  }
  onSkipTouchID = async () => {
    this.setState({ touchAuth: false, dialogVisible_touch: false })
    try {
      AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
      this.props.navigation.navigate('Message')
    } catch (e) {
      console.log({ClearAsyncStorageError: e})
    }
  }
  _touchID = () => {
    this.setState({ touchOpened: true });
    TouchID.authenticate('Please authenticate with biometric', optionalConfigObject)
      .then(success => {
        this.props.navigation.navigate('Message')
      })
      .catch(error => {
        console.log('TouchID error', error.details);
        Alert.alert('Authentication Failed');
      });
  }
  onCheckTouchUse = async () => {
    try {
      const touchUse = await AsyncStorage.getItem('touchUse');
      const profile = await AsyncStorage.getItem('profile');
      console.log("-------->", profile);
      console.log({touchUse})
     
      if (touchUse != null && touchUse == true) {
        this.setState({ touchAuth: true });
        this.props.dispatch(updateProfile(JSON.parse(profile)));
        this._touchID();
      }
    } catch (error) {
      console.log({ savingTouchAuthUseError: error })
    }
  }

  _storeData = async (token) => {

    try {
      await AsyncStorage.setItem('token', token)
    } catch (error) {
      Alert.alert(`Unable to store credentials. Error: ${error}`)
    }
  }


  _validateForm = () => {
    const { username, password } = this.state

    if (username && password) {
      this.setState({ formValid: true });
    } else {
      this.setState({ formValid: false });
    }
  };

  onFocusInput = key => {
    console.log({ key });
    this.setState({ [key]: true })

  }
  onEndEditing = key => {
    this.setState({ [key]: false })
  }
  onHandleChange = (key, val) => {
    this.setState({ [key]: val, formError: false })
  }
  onClear = key => {
    this.setState({ [key]: '' })
  }
  onTapMoreInfo = () => {
    this.setState({ dialogVisible: true })
  }
  onDismissAlert = (name) => {
    this.setState({ [name]: false })
  }

  render() {
    const { flag, errorCount, formValid, dialogVisible, dialogVisiblePilot, dialogVisible_touch, password, username, formError, focus_password, focus_username, biometryType, touchAuth } = this.state
    const { navigate } = this.props.navigation


    return (
      <Container>
        <ImageBackground source={images.bg_login} style={styles.imageBackground} >
          <TouchableWithoutFeedback style={{ flex: 1, backgroundColor: 'transparent' }} onPress={() => Keyboard.dismiss()}>
            <View style={styles.login}>
              <View style={styles.login_Content}>

                <View style={styles.welcom_Container}>
                  <Image
                    style={styles.image}
                    source={images.logo_login}
                  />
                  <Text style={styles.subTitle}>Broker Go</Text>
                </View>
                <View style={styles.inputWrap}>
                  <Item style={formError ? styles.form_username_error : focus_username ? styles.form_username_focus : styles.form_username} rounded>
                    <Image style={{ marginLeft: 10 }} source={formError ? images.user_left_icon_error : images.user_left_icon} />
                    <Input
                      placeholder='Username'
                      selectionColor={'white'}
                      placeholderTextColor="#BFCAD4"
                      style={{ color: 'white', fontFamily: 'SourceSansPro-Regular', fontSize: 15 }}
                      onFocus={() => this.onFocusInput('focus_username')}
                      value={username}
                      autoCapitalize={'none'}
                      onChangeText={(value) => this.onHandleChange('username', value)}
                      onEndEditing={() => this.onEndEditing('focus_username')}
                    />
                    <Icon style={{ color: 'white', opacity: username && focus_username ? 100 : 0 }} onPress={() => this.onClear('username')} name='close-circle' />
                  </Item>
                  <Item style={formError ? styles.form_password_error : focus_password ? styles.form_password_focus : styles.form_password} rounded>
                    <Image style={{ marginLeft: 10 }} source={formError ? images.lock_left_icon_error : images.lock_left_icon} />
                    <Input
                      placeholder='Password'
                      selectionColor={'white'}
                      placeholderTextColor="#BFCAD4"
                      style={{ color: 'white', fontFamily: 'SourceSansPro-Regular', fontSize: 15 }}
                      onFocus={() => this.onFocusInput('focus_password')}
                      value={password}
                      onChangeText={(value) => this.onHandleChange('password', value)}
                      onEndEditing={() => this.onEndEditing('focus_password')}
                      secureTextEntry
                    />
                    <Icon style={{ color: 'white', opacity: (password && focus_password) ? 100 : 0 }} onPress={() => this.onClear('password')} name='close-circle' />
                  </Item>
                </View>
                {formError &&
                  <View style={styles.errorDesContainer}>
                    <Text style={styles.errorAttemptText}>{`You have ${errorCount} login attempts left.`}</Text>
                  </View>
                }

                <View style={styles.signInWrap}>
                  <SignInButton
                    formValid={formValid}
                    needsValidation
                    title='Sign In'
                    onPress={this._onLoginPress}
                  />
                </View>
                <View style={styles.createAccountWrap}>
                  <Text style={styles.welcomeText}>Not signed up?</Text>
                  <TouchableOpacity>
                    <Text style={styles.signUp}> Register now</Text>
                  </TouchableOpacity>
                </View>
                {touchAuth &&
                  <View style={styles.faceIDWrap}>
                    <TouchIdButton
                      type={biometryType}
                      onPress={() => this._touchID()}

                    />
                  </View>
                }
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
        {this.renderErrorAlert1(dialogVisible)}
        {this.renderErrorAlert2(dialogVisiblePilot)}
        {this.renderDialogAskTouch(dialogVisible_touch, biometryType)}

      </Container>
    )
  }

  renderErrorAlert1 = (dialogVisible) => {
    return (
      <Dialog
        visible={dialogVisible}
        dialogStyle={{ borderRadius: 20 }}
        contentStyle={{ padding: 0, paddingTop: 0 }}
        onTouchOutside={() => this.setState({ dialogVisible: false })} >
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <View style={{ width: '100%', height: 229, borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden' }}>
            <Image resizeMode={'cover'} style={{ width: "100%", height: "100%"}} source={images.bg_alert_login}/>
            <View style={{ position: 'absolute', bottom: 0, left: 0, paddingLeft: 24, paddingBottom: 12}}>
                <Text style={{ color: 'white', fontSize: 31, fontFamily: 'Roboto-Thin', fontWeight: '200' }}>{errors.title}</Text>
              </View>
          </View>

          <View style={{ width: '100%', flexDirection: 'column', padding: 24 }}>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.errorBulletText}>{'We could not compete your login.'}</Text>
              <Text style={styles.errorText}>{errors.subTitle}</Text>
              <View style={{ marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                  <Image source={images.sub_dot} />
                  <Text style={styles.errorBulletText}>{errors.reason1}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                  <Image source={images.sub_dot} />
                  <Text style={styles.errorBulletText}>{errors.reason2}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                  <Image source={images.sub_dot} />
                  <Text style={styles.errorBulletText}>{errors.reason3}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                  <Image source={images.sub_dot} />
                  <Text style={styles.errorBulletText}>{errors.reason4}</Text>
                </View>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.errorText}>
                  {errors.help_part1}
                  <Text style={styles.errorPhoneText}>
                    {errors.help_phone}
                  </Text>
                  <Text style={styles.errorText}>
                    {errors.help_part2}
                  </Text>
                  <Text style={styles.errorText}>
                    {' and '}
                  </Text>
                  <Text style={styles.errorText}>
                    {errors.help_part3}
                  </Text>
                </Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={styles.errorText}>
                  {errors.footer_des1}
                  <Text style={styles.errorInvalidAttemptsText}>
                    {errors.footer_des2}
                  </Text>
                  <Text style={styles.errorText}>
                    {errors.footer_des3}
                  </Text>
                </Text>
              </View>
              <View>
                <RoundButton
                  title='Got It'
                  onPress={() => this.onDismissAlert('dialogVisible')}
                />
              </View>
            </View>
          </View>
        </View>
      </Dialog>
    )
  }
  renderErrorAlert2 = (dialogVisible) => {
    return (
      <Dialog
        visible={dialogVisible}
        dialogStyle={{ borderRadius: 20 }}
        contentStyle={{ padding: 0, paddingTop: 0 }}
        onTouchOutside={() => this.setState({ dialogVisible: false })} >
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          
        <View style={{ width: '100%', height: 229, borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden' }}>
            <Image resizeMode={'cover'} style={{ width: "100%", height: "100%"}} source={images.bg_alert_login}/>
            <View style={{ position: 'absolute', bottom: 0, left: 0, paddingLeft: 24, paddingBottom: 12 }}>
              <Text style={{ color: 'white', fontSize: 31, fontFamily: 'Roboto-Thin', fontWeight: '200' }}>{errors.title}</Text>
            </View>
          </View>
          <View style={{ width: '100%', flexDirection: 'column', padding: 24 }}>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.errorBulletText}>{'We could not compete your login.'}</Text>
              <Text style={styles.errorText}>{errors.subTitle1}</Text>

              <View style={{ marginTop: 10 }}>
                <Text style={styles.errorText}>
                  {errors.help_part1}
                  <Text style={styles.errorPhoneText}>
                    {errors.help_phone}
                  </Text>
                  <Text style={styles.errorText}>
                    {errors.help_part2}
                  </Text>
                  <Text style={styles.errorText}>
                    {' and '}
                  </Text>
                  <Text style={styles.errorText}>
                    {errors.help_part3}
                  </Text>
                </Text>
              </View>

              <View>
                <RoundButton
                  title='Got It'
                  onPress={() => this.onDismissAlert('dialogVisiblePilot')}
                />
              </View>
            </View>
          </View>
        </View>
      </Dialog>
    )
  }
  renderDialogAskTouch = (dialogVisible_touch, biometryType) => {
    return (
      <Dialog
        visible={dialogVisible_touch}
        dialogStyle={{ borderRadius: 10 }}
        onTouchOutside={() => this.setState({ dialogVisible_touch: false })} >
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <View style={{ backgroundColor: 'transparent', paddingBottom: 24 }}>
            <Image source={biometryType == 'FaceID' ? images.face_icon : images.finger_icon} />
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>{'Would you Like To Sign In Using '}{biometryType}{' Next Time?'}</Text>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: 'black', fontSize: 16 }}>{touch.description}</Text>
              <View style={{ marginVertical: 10 }}>
                <TouchableOpacity onPress={() => this.onUseTouchID()}>
                  <Text style={{ color: '#3498DB', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>Yes, Use {biometryType}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.onSkipTouchID()}>
                  <Text style={{ color: '#3498DB', fontSize: 18, textAlign: 'center' }}>Skip</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Dialog>
    )
  }

}

const errors = {
  title: "Oops.. It Looks Like\nWe Got Stuck",
  subTitle: "It could be one of the following reasons:",
  subTitle1: "It looks like your account is not a part of the pilot.",
  reason1: "We couldn't find that account in our system.",
  reason2: "The username or password was not entered correctly",
  reason3: "This account is not activated.",
  reason4: "Our system isn't working the way it should.",
  help_part1: "If you need any help, call us at ",
  help_phone: "888-268-4361",
  help_part2: ", Monday to Thursday, 6am-5pm PT",
  help_part3: "Friday 6am-3pm PT.",
  footer_des1: "After ",
  footer_des2: "6 invalid ",
  footer_des3: "attempts, we will lock your account to protect your information.",

};
const touch = {
  description: "If you skip Touch ID activation, you can enable it later in your account."
}
const mapStateToProps = (state) => ({})


export default withApollo(connect(mapStateToProps)(Login))