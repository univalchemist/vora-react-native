import React from 'react'
import { Text, View } from 'react-native'

export const Card = props => {
    return (
        <View style={styles.wrap}>
            {props.children}
        </View>
    )
}

const styles = {
    wrap: {
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 20,
    }
}
