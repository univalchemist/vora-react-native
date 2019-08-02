import React from 'react'
import { View, Text } from 'react-native'

// Styles
import { GLOBAL_TEXT, GLOBAL_WRAP } from '../../styles'

const NarrowHeader = ({ title, textColor }) => {
    return (
        <View style={GLOBAL_WRAP.NARROW_HEADER}>
            <Text style={[GLOBAL_TEXT.NARROW_HEADER, { color: textColor || '#303036' }]}>
                {title}
            </Text>
        </View>
    )
}


export { NarrowHeader }