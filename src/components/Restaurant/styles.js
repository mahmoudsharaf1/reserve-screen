import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation'

const styles = StyleSheet.create({
    container: {
        marginHorizontal: ScaleWidth(15),
        marginTop: ScaleHeight(17),
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    scalini: {
        fontSize: ScaleWidth(18),
        color: Colors.purple,
        fontWeight: 'bold'
    },
    restaurant: {
        top: ScaleHeight(2)
    },
    typeRestaurant: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    rateView: {
        backgroundColor: Colors.green,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: ScaleWidth(60),
        borderRadius: ScaleHeight(15),
        height: ScaleHeight(21)
    },
    rate: {
        color: Colors.white,
        right: ScaleWidth(3),
    },
    star: {
        width: ScaleWidth(13),
        height: ScaleHeight(13),
        left: ScaleWidth(3)
    },
})
export default styles
