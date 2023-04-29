import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth, width } from '../../common/foundation'



const styles = StyleSheet.create({
    wrapper: {
        height: ScaleHeight(290),

    },
    rectangle: {
        width: width,
        height: ScaleHeight(290),
    },
    paginationView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    paginationStyle: {
        bottom: ScaleHeight(75),
        alignSelf: 'center',
        backgroundColor: Colors.fade,
        width: ScaleWidth(100),
        borderRadius: ScaleHeight(30),
        padding: ScaleHeight(2),
        paddingHorizontal: ScaleWidth(10)
    },

    paginationText: {
        color: Colors.white,
        fontSize: ScaleWidth(13)
    },
    arrow: {
        width: ScaleWidth(11),
        height: ScaleHeight(11)
    }
})
export default styles