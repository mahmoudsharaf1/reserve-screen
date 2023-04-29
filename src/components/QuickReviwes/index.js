import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Colors } from '../../common/foundation'

const QuickReviews = ({
    active,
    onPress,
    review
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text
                style={[styles.review, {
                    color: !active ? Colors.blueViolet : Colors.orange
                }]}>{review}</Text>
        </TouchableOpacity>
    )
}

export default QuickReviews

