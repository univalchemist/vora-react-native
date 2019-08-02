import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

// Styles
import { GLOBAL_TEXT, GLOBAL_WRAP } from '../../styles'


const EditButton = ({ buttonColor, onPress, buttonTitle, marginTop, marginBottom }) => {

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
            buttonColor='#fff'
            borderColor = '#3498DB'
           
            break
    }
  
    return (
        <TouchableOpacity 
            style={[GLOBAL_WRAP.EDIT_BUTTON, { backgroundColor: buttonColor, marginTop: marginTop, marginBottom: marginBottom, borderTopColor: borderTopColor, borderBottomColor: borderBottomColor }]} 
            onPress={onPress}
        >
            <Text style={GLOBAL_TEXT.EDIT_BUTTON}>
                {buttonTitle}
            </Text>
        </TouchableOpacity>
    )
}


export { EditButton }