import { Image, Text, View } from 'react-native'
import React from 'react'
import IMAGES from '../../common/images'
import styles from './styles'

const MoreInfo = ({
    titleInfo,
    available
}) => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode='stretch'
                source={
                    !available
                        ? IMAGES.check_box_x
                        : IMAGES.check_box_true
                }
                style={styles.image}
            />
            <Text style={styles.titleInfo}>{titleInfo}</Text>
        </View>
    )
}

export default MoreInfo

