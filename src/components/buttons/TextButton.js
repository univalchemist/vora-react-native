import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

// Styles
import { GLOBAL_TEXT, GLOBAL_WRAP } from '../../styles'

const TextButton = ({ onPress, buttonTitle, textColor, alignText, paddingRight }) => {


  if (!alignText) {
    alignText= 'flex-end'
  }
  
  return (
    <TouchableOpacity 
      style={GLOBAL_WRAP.TEXT_BUTTON} 
      onPress={onPress}
    >
      <Text style={[GLOBAL_TEXT.BUTTON, { color: textColor, alignSelf: alignText, paddingRight: paddingRight ? paddingRight: 0} ]}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
    )
}

export { TextButton}