import React from 'react'
import { Image, Text } from 'react-native'
import images from '../../assets';

const TabIcon = props => {
    const { focused, type } = props
    if (type === 'home') {
        if (focused) {
            return <Image style={styles.icon} source={images.nav_home_active} />
        } else {
            return <Image style={styles.icon} source={images.nav_home} />
        }

    } else if (type === 'activity') {
        if (focused) {
            return <Image style={styles.icon} source={images.nav_notification_active} />
        } else {
            return <Image style={styles.icon} source={images.nav_notification} />
        }

    } else if (type === 'news') {
        if (focused) {
            return <Image style={styles.icon} source={images.nav_news_active} />
        } else {
            return <Image style={styles.icon} source={images.nav_news} />
        }
    }
}


const styles = {
    icon: {
        height: 23,
        width: 22,
        marginBottom: 16,
        marginTop: 10,
    }
}

export { TabIcon }