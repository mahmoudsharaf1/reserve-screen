import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth, width } from '../../common/foundation';



const styles = StyleSheet.create({
    container: {
        marginTop: ScaleHeight(23),
        marginHorizontal: ScaleWidth(20),
        backgroundColor: Colors.white,
        borderRadius: ScaleHeight(15),
        padding: ScaleHeight(7),
        shadowColor: Colors.gray,
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    headerReview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar: {
        width: ScaleWidth(40),
        height: ScaleHeight(40)
    },
    title: {
        color: Colors.blueViolet,
        fontWeight: '600',
        marginLeft: ScaleWidth(5),
        maxWidth: ScaleWidth(120)
    },
    rateView: {
        backgroundColor: Colors.green,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: ScaleWidth(50),
        borderRadius: ScaleHeight(15),
        height: ScaleHeight(21),

    },
    rate: {
        color: Colors.white,
        right: ScaleWidth(3),
    },
    star: {
        width: ScaleWidth(10),
        height: ScaleHeight(10),
        marginLeft: ScaleWidth(3)
    },
    body: {
        color: Colors.blueViolet,
        fontWeight: '600',
        fontSize: ScaleWidth(11),
        marginLeft: ScaleWidth(7),
        marginTop: ScaleHeight(10),
        maxWidth: width - ScaleWidth(110)
    },
})
export default styles;