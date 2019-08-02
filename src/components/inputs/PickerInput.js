import React, { Component } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native'

class PickerInput extends Component {

	/*==============================================================
    = Animation
    ==============================================================*/

    state = {
        isFocused: false,
    }

	_animatedIsFocused = new Animated.Value(this.props.value ? 1 : 0)
			
	_startAnimated = () => {
        const { value } = this.props

		Animated.timing(this._animatedIsFocused, {
			toValue: value ? 1 : 0,
			duration: 100,
		}).start()
	}


	/*==============================================================
    = Lifecycles
    ==============================================================*/

	componentDidUpdate() {
		this._startAnimated()
	}

	render() {
        const { value, label, onPress } = this.props
		const styles = createStyles(this._animatedIsFocused, value)

		return (
			<View style={styles.wrap}>
				<Animated.Text style={styles.label}>
					{label}
				</Animated.Text>


				<TouchableOpacity
					blurOnSubmit
                    style={styles.input}
                    onPress={onPress}
				>
                    <Text style={styles.inputValue}>{value}</Text>
                </TouchableOpacity>
			</View>
			)
		}
	}

const createStyles = (animate, isFocused, value) => {
	return ({
		label: {
			color: '#5c5d5b',
			fontWeight: isFocused ? '700' : '400',
			position: 'absolute',
			fontSize: animate.interpolate({
				inputRange: [0, 1],
				outputRange: [16, 12],
			}),
			top: animate.interpolate({
				inputRange: [0, 1],
				outputRange: [9, -8],
			}),
		},
		icon: {
			height: 16,
			width: 16,
			position: 'absolute',
			alignSelf: 'flex-end',
			right: 5,
			bottom: 0
		},
		input: {
			borderBottomWidth: value ? 2 : 1,
			borderColor: '#5c5d5b',
			paddingTop: 10,
			paddingBottom: 8,
			width: '100%',
		},
		wrap: {
			marginTop: 20,
			marginBottom: 15,
			position: 'relative',
		},
		inputValue: {
			color: '#5c5d5b',
			fontSize: 16,
			fontWeight: '400',
		},
		text: {
			color: '#5c5d5b',
			fontSize: 16,
			fontWeight: '400',
			paddingTop: 5
		}
	})
}

export { PickerInput }