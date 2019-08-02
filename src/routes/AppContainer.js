import { createAppContainer, createSwitchNavigator } from 'react-navigation'

//Navigation Stacks
import AuthStack from './AuthStack'
import MessageTabNav from './MessageTabNav';

const SwitchNav = createSwitchNavigator(
	{
		Auth: AuthStack,
		Message: MessageTabNav,	
	},
	{
		initialRouteName: 'Auth',
	}
)

const AppContainer = createAppContainer(SwitchNav)

export default AppContainer