import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth, width } from '../../common/foundation';



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: ScaleHeight(17)
    },
    image: {
        width: ScaleWidth(19),
        height: ScaleHeight(19)
    },
    titleInfo: {
        color: Colors.blueViolet,
        fontSize: ScaleWidth(13),
        fontWeight: '600',
        marginLeft: ScaleWidth(7)
    }
})
export default styles