import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import { LabeledValue, Paragraph, Subtitle, Title } from '../text'


const DefaultCard = ({ data, onPress }) => {

    return (
        <TouchableOpacity
            style={styles.wrap}
            //onPress={() => onFeedItemPress(data.id)}
        >
            <Title text={data.title} />
            {/* <Subtitle text={data.subtitle} />
            <Paragraph text={data.description} />
            <Paragraph dates={data.dates} />
            <LabeledValue
                align='flex-end'
                text='text'
                label='label'
            /> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: 'white',
        flex: 1,
        marginBottom: 10,
        paddingTop: 20,
        paddingBottom: 30,
        paddingHorizontal: 20
    },
})

export { DefaultCard }