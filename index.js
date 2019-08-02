
console.disableYellowBox = true

import { AppRegistry } from 'react-native'
import React from 'react'
import App from './src/app'
import { name as appName } from './app.json'
import { Provider } from 'react-redux'
import UserInactivity from 'react-native-user-inactivity';
import configureStore from './src/utils/redux/configureStore'
import store from './src/utils/redux/configureStore';
import { ApolloProvider } from 'react-apollo';
import client from './src/utils/apollo/setup';

onAction = (active) => {
    if (active) {
        let appState = store.getState();
        if (appState.authReducer) {
            appState.authReducer.actionTime = 0;
        }
    }
};

const AppWithStore = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <UserInactivity
                    timeForInactivity={5000}
                    onAction={this.onAction}
                >
                    <App />
                </UserInactivity>
            </Provider>
        </ApolloProvider>

    )
}

AppRegistry.registerComponent(appName, () => AppWithStore)
