import React, { Component } from 'react';
import { Animated, Image, TextInput, View } from 'react-native'

class LabeledInput extends Component {
	
	state = {
		isFocused: false,
	}

	/*==============================================================
    = Animation
    ==============================================================*/

	_animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1)
			
	_startAnimated = () => {
		Animated.timing(this._animatedIsFocused, {
			toValue: (this.state.isFocused || this.props.value) ? 1 : 0,
			duration: 100,
		}).start()
	}


	/*==============================================================
    = Event Handlers
    ==============================================================*/

	_handleFocus = () => {
		this.setState({ isFocused: true })
	}

	_handleBlur = () => {
		this.setState({ isFocused: false })
	}


	/*==============================================================
    = Lifecycles
    ==============================================================*/

	componentDidUpdate() {
		this._startAnimated()
	}

	render() {
		const { label, ...props } = this.props
		const styles = createStyles(this._animatedIsFocused, props.value)

		// indicator for whether input is locked
		// or not. Defaults to false
		const locked = props.locked || false

		return (
			<View style={styles.wrap}>
				<Animated.Text style={styles.label}>
					{label}
				</Animated.Text>

				<TextInput
					blurOnSubmit
					onBlur={this._handleBlur}
					onFocus={this._handleFocus}
					style={styles.input}
					{...props}
				/>
				
				{ 	
					// if text input can never be changed
					// show a lock icon
					locked ? 
						<Image 
							style={styles.icon} 
							source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/> 
						: null
				}
			</View>
			)
		}
	}

const createStyles = (animate, isFocused, value) => {
	return ({
		label: {
			backgroundColor: 'orange',
			color: '#5c5d5b',
			fontWeight: isFocused ? '700' : '400',
			position: 'absolute',
			fontSize: animate.interpolate({
				inputRange: [0, 1],
				outputRange: [16, 12],
			}),
			top: animate.interpolate({
				inputRange: [0, 1],
				outputRange: [9, -15],
			}),
		},
		icon: {
			height: 16,
			width: 16,
			position: 'absolute',
			alignSelf: 'flex-end',
			right: 5,
		},
		input: {
			backgroundColor: 'blue',
			borderBottomWidth: value ? 2 : 1,
			borderColor: '#5c5d5b',
			paddingTop: 5,
			paddingBottom: 8,
			width: '100%',
		},
		wrap: {
			flex: 1,
			backgroundColor: 'green',
			marginTop: 20,
			marginBottom: 15,
		},
		inputValue: {
			backgroundColor: 'black',
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

export { LabeledInput }
