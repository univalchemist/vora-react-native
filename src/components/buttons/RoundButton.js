import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { COLOR } from '../../styles/color';


const RoundButton = props => {
    return (
        <TouchableOpacity
            style={[styles.button, { ...props.addStyles }]}
            {...props}
        >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    button: {
        alignItems: 'center',
        backgroundColor: COLOR.PRIMARY,
        height: 50,
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 50,
        borderRadius: 30,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '800',
    }
}

export { RoundButton }