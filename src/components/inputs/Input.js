import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

import { GLOBAL_ASSET, GLOBAL_TEXT, GLOBAL_WRAP } from '../../styles'



class Input extends Component { 

	_renderLabel = () => {
		const { placeholder, value } = this.props

		if (value) {
			return (
				<View style={GLOBAL_WRAP.INPUT_LABEL}>
					<Text style={[GLOBAL_TEXT.X_SMALL, { color: '#bbb' }]}>{placeholder}</Text>
				</View>
			)
		}
	}



	_setWrapStyle = () => {
		const { label, value } = this.props

		if (value) {
			return GLOBAL_WRAP.INPUT
		
		} else {
			return GLOBAL_WRAP.INPUT_EMPTY
		}
	}
	
	render() {
		const { autoCapitalize, dataDetectorType, keyboardType, maxLength, onChangeText, placeholder, secureTextEntry, value } = this.props
		
		return (
			<View style={this._setWrapStyle()}>
				{ this._renderLabel() }
				<View style={GLOBAL_WRAP.INPUT_FIELD}>
					<TextInput
						style={GLOBAL_ASSET.INPUT}
						autoCorrect={false}
						autoCapitalize={autoCapitalize || "none"}
						dataDetectorType={dataDetectorType}
						keyboardType={keyboardType}
						maxLength={maxLength}
						onChangeText={onChangeText}
						placeholder={placeholder}
						secureTextEntry={secureTextEntry}
						value={value}
						underlineColorAndroid='transparent'
					/>
				</View>
			</View>
		)
	}
}

export { Input }