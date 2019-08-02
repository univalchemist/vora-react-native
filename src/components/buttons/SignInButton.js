import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'


const SignInButton = props => {
    const { formValid, needsValidation } = props

    // If the button doesn't need form validation before 
    // being clickable, don't disable it
    let isDisabled = false

    if (needsValidation && !formValid) {
        isDisabled = true
    }

    return (
        <TouchableOpacity
            style={[styles.button, { ...props.addStyles }]}
            disabled={isDisabled}
            {...props}
        >
            {props.loading ?
                <ActivityIndicator size="small" color='white' />
                : <Text style={{
                    color: formValid ? "#0067A5" : '#D9D9D9',
                    fontSize: 16,
                    fontWeight: '800',
                }}>{props.title}</Text>
            }
        </TouchableOpacity>
    )
}

const styles = {
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 50,
        borderRadius: 30,
    },
    text: {
        color: '#D9D9D9',
        fontSize: 16,
        fontWeight: '800',
    }
}

export { SignInButton }