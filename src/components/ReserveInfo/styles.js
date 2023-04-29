import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: ScaleWidth(15)
    },
    dataView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: ScaleHeight(15),
    },
    fieldTime: {
        height: ScaleHeight(19),
        width: ScaleWidth(19)
    },
    cost: {
        height: ScaleHeight(15),
        width: ScaleWidth(15),
        marginLeft: ScaleWidth(3)
    },
    time: {
        color: Colors.blueViolet,
        marginLeft: ScaleWidth(4)
    },
    down: {
        height: ScaleHeight(9),
        width: ScaleWidth(9),
        left: ScaleWidth(2),
        top: ScaleHeight(2)
    },
    price: {
        color: Colors.blueViolet,
        marginLeft: ScaleWidth(7)
    },
    socialView: {
        marginTop: ScaleHeight(15),
        padding: ScaleWidth(7),
        right: ScaleWidth(7)
    },
    socialIcon: {
        height: ScaleHeight(15),
        width: ScaleWidth(15),
    },
    phoneView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: ScaleHeight(17)
    },
    phone: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    km: {
        fontWeight: 'bold',
        left: ScaleWidth(30),
        color: Colors.blueViolet,
        fontSize: ScaleWidth(12)
    }

})
export default styles
