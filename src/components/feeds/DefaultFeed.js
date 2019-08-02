import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'

import { DefaultCard } from '../cards'


const DefaultLoading = () => {
    return (
        <View style={{
            backgroundColor: '#e0dedd',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <ActivityIndicator size="large" color="#ef3e36" />
        </View>
    )
}


const NoResults = () => {
    return (
        <View style={{
            backgroundColor: '#e0dedd',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text>No Results</Text>
        </View>
    )
}

const Error = () => {
    return (
        <View style={{
            backgroundColor: '#e0dedd',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text>Error</Text>
        </View>
    )
}


const DefaultFeed = ({ data, error, onFeedItemPress, ...props }) => {
    
    if (error) return <Error />
    
    if (data && !data.length) return <NoResults />

    if (data && data.length) {
        return (
                <FlatList
                    data={data}
                    bounces={props.bounces || false}
                    keyExtractor={item => item.id.toString()}
                    removeClippedSubviews={true}
                    renderItem={data => <DefaultCard data={data.item} onFeedItemPress={onFeedItemPress} />}
                    showsVerticalScrollIndicator={false}
                    style={styles.wrap}
                    {...props}
                >
                    {props.children}
                </FlatList>
        )
    }

    return <DefaultLoading />
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#e0dedd',
        flex: 1,
        paddingTop: 20,
    }
})

export { DefaultFeed }