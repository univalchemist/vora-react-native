import React, { Component } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native'

class DateInput extends Component {

	/*==============================================================
    = Animation
    ==============================================================*/

    state = {
        isFocused: false,
    }

	_animatedIsFocused = new Animated.Value(this.props.date ? 1 : 0)
			
	_startAnimated = () => {
        const { date } = this.props

		Animated.timing(this._animatedIsFocused, {
			toValue: date ? 1 : 0,
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
        const { date, label, onPress } = this.props
        const fmtdDate = date
		const styles = createStyles(this._animatedIsFocused, this.props.date)

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
                    <Text style={styles.text}>{fmtdDate}</Text>
                    
                </TouchableOpacity>
			</View>
			)
		}
	}

const createStyles = (animate, isFocused, date) => {
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
			bottom: 5,
		},
		input: {
			borderBottomWidth: date ? 2 : 1,
			borderColor: '#5c5d5b',
			paddingTop: 5,
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

export { DateInput }