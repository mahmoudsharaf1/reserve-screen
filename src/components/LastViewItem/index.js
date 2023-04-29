import { Image, Text, View } from 'react-native'
import React from 'react'

import IMAGES from '../../common/images';
import styles from './styles';

const LastViewItem = ({
    rate,
    title,
    body
}) => {
    return (
        <View style={styles.container}>

            <View style={styles.headerReview}>
                <View style={styles.subHeader}>
                    <Image
                        source={IMAGES.avatar}
                        style={styles.avatar}
                    />
                    <Text
                        numberOfLines={1}
                        style={styles.title}
                    >{title}
                    </Text>
                </View>
                <View style={styles.rateView}>
                    <Text style={styles.rate}>{rate}</Text>
                    <Image
                        source={IMAGES.star}
                        style={styles.star}
                    />
                </View>
            </View>
            <Text style={styles.body}>{body}</Text>
        </View>
    )
}

export default LastViewItem

