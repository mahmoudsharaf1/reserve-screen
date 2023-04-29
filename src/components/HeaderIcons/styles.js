import { StyleSheet } from 'react-native'

import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation';


const styles = StyleSheet.create({
    container: {
        zIndex: 1,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: ScaleHeight(32)

    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        left: ScaleWidth(7)
    },
    subIconView: {
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: ScaleWidth(37),
        height: ScaleHeight(37),
        borderRadius: ScaleHeight(18),
        marginHorizontal: ScaleWidth(10)
    },
    share: {
        width: ScaleWidth(23),
        height: ScaleHeight(23),
    },
    logo: {
        width: ScaleWidth(55),
        height: ScaleHeight(55),
        alignSelf: 'flex-end',
        top: ScaleHeight(140),
        right: ScaleWidth(15)
    }
})
export default styles