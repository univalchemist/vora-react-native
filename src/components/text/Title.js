import React from 'react'
import { Text } from 'react-native'

// Config
import { COLORS } from '../../config'


const Title = ({ addStyles, isCentered, text }) => {

    const textAlign = isCentered ? 'center' : 'left'

    return (
        <Text 
            style={[
                styles.text,
                {
                    textAlign,
                    ...addStyles
                }
            ]}
        >
            {text}
        </Text>
    )
}

const styles = {
    text: {
        color: COLORS.BLACK,
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 5,
    
    }
}

export { Title }