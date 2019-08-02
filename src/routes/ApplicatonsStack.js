import { createStackNavigator } from 'react-navigation'
import React from 'react'
//Screens
import Home from '../screens/MessageCenter/Home';
import PendingApplications from '../screens/MessageCenter/PendingApplications';
import StackHeader from '../components/headers/StackHeader';

import InProgressApplications from '../screens/MessageCenter/InProgressApplications';
import ApprovedApplications from '../screens/MessageCenter/ApprovedApplications';
import ApplicationDetail from '../screens/MessageCenter/ApplicationDetail';



const ApplicationsStack = createStackNavigator(
    {
        Applications: {
            screen: Home,
            navigationOptions: ({
                header: null,
            }),
        },
        Details: {
            screen: ApplicationDetail,
            navigationOptions: ({
                header: <StackHeader title='Home'/>
            }),
        },
        Pending: {
            screen: PendingApplications,
            navigationOptions: ({
                header: <StackHeader title='Home'/>
                
            }),
           
          },
        InProgress: {
            screen: InProgressApplications,
            navigationOptions: ({
                header: <StackHeader title='Home'/>
                
            }),
           
          },  
        Approved: {
            screen: ApprovedApplications,
            navigationOptions: ({
                header: <StackHeader title='Home'/>
                
            }),
           
          },
           initialRouteName: 'Applications',
          //  gesturesEnabled: false
           } 
      )

export default ApplicationsStack 