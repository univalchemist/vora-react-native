import React, { Component } from 'react'
import { TextInput, Image, Text, View } from 'react-native'

// Styles

import { GLOBAL_ASSET, GLOBAL_TEXT, GLOBAL_WRAP } from '../../styles'


class EditInput extends Component { 
    

	_renderLabel = () => {
        const { defaultValue, editedValue, inputEdited, placeholder } = this.props
    

		if (
            (defaultValue && !inputEdited) ||
            (inputEdited && editedValue != '')
            
        ) {
			return (
				<View style={GLOBAL_WRAP.INPUT_LABEL}>
					<Text style={[GLOBAL_TEXT.X_SMALL, { color: '#bbb' }]}>{placeholder}</Text>
				</View>
			)
		}
	}



	_setWrapStyle = () => {
		const { currentValue, showLabelForDefault, label, value } = this.props

		if (currentValue || showLabelForDefault || value) {
			return GLOBAL_WRAP.INPUT
		
		} else {
			return GLOBAL_WRAP.INPUT_EMPTY
		}
    }
    
    _setIconAlign = () => {
        const { currentValue, showLabelForDefault, label, value } = this.props

        if (currentValue || showLabelForDefault || value) {
            const iconStyle = [GLOBAL_ASSET.EDIT_INPUT_ICON, { alignSelf: 'flex-start'}]
            return iconStyle
        
        } else {
            const iconStyle = [GLOBAL_ASSET.EDIT_INPUT_ICON, { alignSelf: 'center'}]
            return iconStyle
        }
    }




    render () {
        const { autoCapitalize, defaultValue, keyboardType, maxLength, onChangeText, placeholder, secureTextEntry, value } = this.props

        return (
			<View style={this._setWrapStyle()}>
				{ this._renderLabel() }
				<View style={GLOBAL_WRAP.EDIT_INPUT_FIELD}>
                    <TextInput
                        style={GLOBAL_ASSET.EDIT_INPUT}
                        autoCapitalize={autoCapitalize || "none"}
                        defaultValue={defaultValue}
                        keyboardType={keyboardType || "default"}
                        maxLength={maxLength}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry || false }
                        underlineColorAndroid='transparent'
                        value={value}
                        />
                </View>
            </View>
        )
    }

}

export { EditInput }