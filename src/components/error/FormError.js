import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FormError = ({ error }) => {
    if (error) {
        return (
            <View style={styles.wrap}>
                <Text style={styles.text}>{error}</Text>
            </View>
        )
    } else {
        return null
    }
} 

const styles = StyleSheet.create ({
    wrap: { 
        backgroundColor: '#ed254e',
        padding: 10,
        marginBottom: 20
    },
    text: {
        color: 'white',
        fontSize: 12,
        fontWeight: '700'
    }
})

export { FormError }