import { createStackNavigator } from 'react-navigation'

//Screens
import Login from '../screens/auth/login/Login';
import CreateAccount from '../screens/auth/register/CreateAccount';



const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: ({
                header: null,
            }),
        },
        Create: {
            screen: CreateAccount,
            navigationOptions: ({
                header: null,
            }),
          },
           initialRouteName: 'Login',
          //  gesturesEnabled: false
           } 
      )

export default AuthStack 