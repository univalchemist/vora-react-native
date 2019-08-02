import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'


const PrimaryButton = props => {
    const { formValid, needsValidation } = props

    // If the button doesn't need form validation before 
    // being clickable, don't disable it
    let isDisabled = false
    let opacity = 1

    if (needsValidation && !formValid) {
        isDisabled = true
        opacity = .4
    }

    return (
        <TouchableOpacity
            style={[ styles.button, { opacity, ...props.addStyles }]}
            disabled={isDisabled}
            {...props}
        >
            { props.loading ?
                <ActivityIndicator size="small" color='white' />
                : <Text style={styles.text}>{props.title}</Text>
            }
        </TouchableOpacity>
    )
}

const styles = {
    button: {
        alignItems: 'center',
        backgroundColor: '#ef3e36',
        height: 50,
        justifyContent: 'center',
        marginBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
    }
}

export { PrimaryButton }