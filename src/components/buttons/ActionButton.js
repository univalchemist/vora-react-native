import React from 'react'
import { Image, TouchableOpacity, Text } from 'react-native'

// Styles
import { GLOBAL_TEXT, GLOBAL_WRAP, GLOBAL_ASSET } from '../../styles'


const ActionButton = ({ buttonColor, onPress, buttonTitle, marginTop, marginBottom }) => {

    switch(buttonColor) {
        case 'gray':
            buttonColor = '#9f9fa2'
            borderTopColor = '#e4e4e5'
            borderBottomColor = '#838385'
            break
        case 'black':
            buttonColor = '#20271F'
            borderTopColor = '#e4e4e5'
            borderBottomColor = '#838385'
            break
        case 'blue':
            buttonColor = '#3498DB'
            borderTopColor = '#44BBFF'
            borderBottomColor = '#44BBFF'
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
  
    return (
        <TouchableOpacity 
            style={[GLOBAL_WRAP.ACTION_BUTTON, { backgroundColor: buttonColor, marginTop: marginTop, marginBottom: marginBottom, borderTopColor: borderTopColor, borderBottomColor: borderBottomColor }]} 
            onPress={onPress}
        >
        </TouchableOpacity>
    )
}


export { ActionButton }
