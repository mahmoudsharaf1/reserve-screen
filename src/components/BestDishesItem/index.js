import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import styles from './styles'
import IMAGES from '../../common/images';


const BestDishesItem = ({
    orderImage,
    orderName,
    price,
    currency
}) => {
    return (
        <TouchableOpacity style={styles.container}>

            <View style={styles.orders}>
                <TouchableOpacity style={styles.heartView}>
                    <Image
                        source={IMAGES.favorite}
                        style={styles.heart}
                    />
                </TouchableOpacity>
                <Image
                    // resizeMode='contain'
                    source={orderImage}
                    style={styles.orderImage}
                />
                <View style={styles.orderInfo}>
                    <Text style={styles.orderName}>{orderName}</Text>
                    <Text style={styles.price}>
                        {price}
                        <Text style={styles.currency}> {currency}</Text>
                    </Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default BestDishesItem

