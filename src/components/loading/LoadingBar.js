import React, { Component } from 'react'
import { Animated } from 'react-native'

import { GLOBAL_ASSET } from '../../styles'

export default class LoadingBar extends Component {
    state = {
        AnimatedOpacity: new Animated.Value(1),
    }

    componentWillMount() {
        Animated.sequence ([
            Animated.delay(this.props.animationOffset),

            Animated.loop (
                Animated.sequence([
                    Animated.timing(
                        this.state.AnimatedOpacity,
                        {
                          toValue: 0,
                          duration: 1000,
                          useNativeDriver: true
                        }
                    ),

                    Animated.timing (
                        this.state.AnimatedOpacity,
                        {
                            toValue: 1,
                            duration: 1000,
                            useNativeDriver: true,
                        }
                    )
                ])  
          )
        ]).start();
    }

    render() {
        let { AnimatedOpacity } = this.state;


        return (
            <Animated.View style={[
            GLOBAL_ASSET.LOADING_BAR,
            this.props.style,
            {  
            opacity: AnimatedOpacity,
            }]} >

                {this.props.children}
            </Animated.View>
        );
    }

}