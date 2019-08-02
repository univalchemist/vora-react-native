import React from 'react'
import { Image, TouchableOpacity, Text } from 'react-native'

// Styles
import { GLOBAL_TEXT, GLOBAL_WRAP, GLOBAL_ASSET } from '../../styles'
import images from '../../assets';


const TouchIdButton = ({ onPress, marginTop, marginBottom, type }) => {


    return (
        <TouchableOpacity
            style={[alignContent = 'center', { marginTop: marginTop, marginBottom: marginBottom, }]}
            onPress={onPress}
        >

            <Image
                //style={GLOBAL_ASSET.MENU_STACK_ICON} 
                source={type == 'FaceID' ? images.face_id_icon : images.touch_id_icon} />
        </TouchableOpacity>
    )
}


export { TouchIdButton }
