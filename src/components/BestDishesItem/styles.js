import { StyleSheet, Text, View } from 'react-native'

import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation'

const styles = StyleSheet.create({
    container: {
        marginHorizontal: ScaleWidth(15),
        marginTop: ScaleHeight(27),

        borderRadius: ScaleHeight(15),
        backgroundColor: Colors.white,
        shadowColor: Colors.gray,
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    orderImage: {
        width: ScaleWidth(120),
        height: ScaleHeight(95),
        borderRadius: ScaleHeight(15),
        alignSelf: 'center'
    },
    heartView: {
        zIndex: 1,
        position: 'absolute',
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: ScaleWidth(27),
        height: ScaleHeight(27),
        borderRadius: ScaleHeight(16),
        marginHorizontal: ScaleWidth(10),
        marginTop: ScaleHeight(5),
        marginLeft: ScaleWidth(85)
    },
    heart: {
        width: ScaleWidth(17),
        height: ScaleHeight(17),
    },
    orderInfo: {
        marginTop: ScaleHeight(7),
        padding: ScaleHeight(7)
    },
    orderName: {
        fontSize: ScaleWidth(9),
        fontWeight: 'bold',
        color: Colors.blueViolet
    },
    price: {
        fontSize: ScaleWidth(9),
        fontWeight: '700',
        color: Colors.orange,
        marginTop: ScaleHeight(5)
    }
})
export default styles