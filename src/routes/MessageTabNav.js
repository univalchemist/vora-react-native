import React from 'react'

import { createBottomTabNavigator } from 'react-navigation'

import Home from '../screens/MessageCenter/Home';
import ApplicationsStack from './ApplicatonsStack';
import Activity from '../screens/MessageCenter/Activity';
import News from '../screens/MessageCenter/News';

import { TabIcon } from '../components/icons'

const MessageTabNav = createBottomTabNavigator(
    {
        Home: {
            screen: ApplicationsStack,
            navigationOptions: ({
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} type='home' />,
                tabBarLabel:'Home',
                header: null,
            }),
        },

        Activity: {
            screen: Activity,
            navigationOptions: ({
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} type='activity' />,
                tabBarLabel:'Activity',
                header: null,
            }),
        },

        News: {
            screen: News,
            navigationOptions: ({
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} type='news' />,
                tabBarLabel:'News',
                header: null,
            })
        }
    }, {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#0067A5',
            inactiveTintColor: '#D2D2D2',
            //upperCaseLabel: false,
            safeAreaView: true,
            style: {
                height: 60,
                backgroundColor: '#FFF', // light-tan => '#b9a394',
                paddingTop: 10,
                borderTopWidth: 0,
            },
            labelStyle: {
                fontFamily: 'SourceSansPro-Regular',
                fontSize: 12,
                fontWeight: '600',    
            },
        }
    })
    
export default MessageTabNav