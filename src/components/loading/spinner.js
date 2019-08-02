import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { GLOBAL_WRAP } from '../styles'

const Spinner = ({ size, color, buttonColor }) => {

    switch(buttonColor) {
        case 'gray':
            buttonColor = '#9f9fa2'
            borderTopColor = '#e4e4e5'
            borderBottomColor = '#838385'
            break
        case 'red':
            buttonColor= '#e3170a'
            borderTopColor = '#f7bfbc'
            borderBottomColor = '#we0703'
            break
        default:
            buttonColor='#00c1f0'
            borderTopColor = '#b9eefa'
            borderBottomColor = '#009ec5'
            break
    }

    return(
        <View style={[GLOBAL_WRAP.BUTTON, { backgroundColor: buttonColor, borderTopColor: borderTopColor, borderBottomColor: borderBottomColor }]}>
            <View style={styles.spinnerStyle}>
                <ActivityIndicator 
                    size={size || 'large'}
                    color={color || '#fff'}    
                />
            </View>
        </View>
    )
}

styles = {
    spinnerStyle: {
        flex: 1,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Spinner }
