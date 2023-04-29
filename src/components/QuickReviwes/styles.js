import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation';



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: ScaleHeight(10),
        borderRadius: ScaleHeight(9),
        marginHorizontal: ScaleWidth(5),
        right: ScaleWidth(5),
        marginTop: ScaleHeight(10),
        backgroundColor: Colors.white,
        shadowColor: Colors.gray,
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    review: {
        fontWeight: '600',
        fontSize: ScaleWidth(12),
    }
})
export default styles