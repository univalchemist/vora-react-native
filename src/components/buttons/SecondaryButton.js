
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'


const SecondaryButton = props => {
    return (
        <TouchableOpacity
            style={[styles.button, { ...props.addStyles }]}
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
        backgroundColor: 'white',
        borderColor: '#5c5d5b',
        borderWidth: 2,
        height: 50,
        justifyContent: 'center',
        marginBottom: 10
    },
    text: {
        color: '#5c5d5b',
        fontSize: 18,
        fontWeight: '600',
    }
}

export { SecondaryButton }