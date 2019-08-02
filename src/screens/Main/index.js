import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux'

// Styles
import { GLOBAL_WRAP } from '../../styles'


import { ActionButton } from '../../components/buttons/ActionButton';
import PlanList from '../PlanList';
import { NarrowHeader } from '../../components/headers/NarrowHeader';
import { Title } from '../../components/text/Title';
import BackgroundTimer from '../../utils/timer'
class Main extends Component {
  
constructor(props) {
  super(props);

}
componentDidMount() {
  // startTimer(this.props.dispatch, this.props.navigation);
  BackgroundTimer.startTimer(this.props.dispatch, this.props.navigation);
}
componentWillUnmount() {
  
}
  render() {

    const { navigate } = this.props.navigation

      return (
        <View style={GLOBAL_WRAP.DEFAULT}>
        <ScrollView>
          
            
                  <NarrowHeader/>
                  <Title
                    text ='Broker Buddy'
                    textAlign ='center'
                  />
              
                  <ActionButton
                      buttonColor='blue'
                      buttonTitle="Login"
                      onPress={this._onModalPress}
                      marginTop={12}
                  />
             
              <PlanList/>
        
          </ScrollView>
          </View>
      )
  }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
//     setUserDetails: (user) => dispatch(setUserDetails(user))
})


export default connect(mapStateToProps)(Main)
