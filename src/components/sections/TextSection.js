import React from 'react'
import { View } from 'react-native'

const TextSection = props => {

    return (
        <View style={styles.wrap}>
            {props.children}
        </View>
    )
}

const styles = {
    wrap: {
        paddingBottom: 20,
    }
}

export { TextSection }