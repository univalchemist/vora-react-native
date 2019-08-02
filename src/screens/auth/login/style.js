import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
export const styles = StyleSheet.create({
    container: {

    },
    login: {
        flex: 1,
        backgroundColor: 'transparent',
        // paddingLeft: 96,
        // paddingRight: 96,
    },
    login_Content: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center',
        marginTop: 80,
    },
    inputWrap:{
        marginLeft: 46,
        marginRight: 46,


    },
    signInWrap: {
        marginLeft: 46,
        marginRight: 46
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    input: {
        //marginTop: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    welcom_Container: {
        backgroundColor: 'transparent',
        marginBottom: 20,
        marginLeft: 46,
        marginRight: 46
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: "Poppins-SemiBold"
    },
    subTitle: {
        paddingTop: 20,
        fontSize: 55,
        color: 'white',
        fontWeight: '100',
        fontFamily: "Roboto-Thin"
    },
    form_username: {
        backgroundColor: '#25526D',
        borderColor: '#25526D'
    },
    form_username_focus: {
        backgroundColor: '#25526D',
        borderColor: '#25526D'
    },
    form_username_error: {
        backgroundColor: '#25526D',
        borderColor: 'red'
    },
    form_password: {
        marginTop: 20,
        backgroundColor: '#25526D',
        borderColor: '#25526D'
    },
    form_password_focus: {
        marginTop: 20,
        backgroundColor: '#25526D',
        borderColor: '#25526D'
    },
    form_password_error: {
        marginTop: 20,
        backgroundColor: '#25526D',
        borderColor: 'red'
    },

    wrap: {
        backgroundColor: 'transparent',
        marginLeft: 0,
        marginTop: 10 + getStatusBarHeight()
    },
    createAccountWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    welcomeText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'SourceSansPro-Regular',
    },
    faceIDWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
    },
    signUp: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'SourceSansPro-Bold',
        //fontWeight: 'bold',
    },
    errorDesContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 5
    },
    errorText: {
        color: 'white',
        fontSize: 15
    },
    errorAttemptText: {
        color: '#FFF',
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        marginLeft: 46,
    },
    moreText: {
        color: 'red',
        fontSize: 15,
        fontWeight: 'bold',
    },
    errorBulletText:{
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        marginLeft: 5,
        marginBottom: 5,
    } ,
    errorText:{
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        marginLeft: 5,
        
    } ,
    errorPhoneText:{
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: 15,
        color: '#0067a5'
        
    },
    errorInvalidAttemptsText:{
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: 15,
        color: '#ed4a4a'
        
    }
})