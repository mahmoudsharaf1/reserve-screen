import { Image, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import IMAGES from '../../common/images';
const Restaurant = ({
    name,
    rate,
    typeRestaurant
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>

                <View style={styles.typeRestaurant}>
                    <Text style={styles.scalini}>{name}</Text>
                    <Text style={styles.restaurant}> {typeRestaurant}</Text>
                </View>

                <View style={styles.rateView}>
                    <Text style={styles.rate}>{rate}</Text>
                    <Image
                        source={IMAGES.star}
                        style={styles.star}
                    />
                </View>
            </View>

        </View>
    )
}

export default Restaurant

