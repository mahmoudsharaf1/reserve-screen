import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth, width } from '../../common/foundation';



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        color: Colors.blueViolet,
        fontSize: ScaleWidth(16),
        fontWeight: 'bold'
    },
    reviews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: ScaleHeight(23),
    },
    addReview: {
        color: Colors.orange,
        fontSize: ScaleWidth(11)
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.opacity,
    },
    modalView: {
        alignSelf: 'center',
        borderRadius: ScaleHeight(15),
        backgroundColor: Colors.white,
        width: width - ScaleWidth(60),
        padding: ScaleHeight(10)
    },
    modalHead: {
        flexDirection: 'row',
    },
    modalTitle: {
        textAlign: 'center',
        flexGrow: 1,
        top: ScaleHeight(3),
        fontSize: ScaleWidth(14),
        right: ScaleWidth(10)
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
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: ScaleHeight(17)
    },
    restaurantValue: {
        textAlign: 'center',
        flexGrow: 1,
        fontSize: ScaleWidth(14)
    },
    ratingView: {
        borderBottomWidth: 1,
        width: ScaleWidth(250),
        alignSelf: 'center',
        borderColor: Colors.gray,
        paddingVertical: ScaleHeight(5)
    },
    rating: {
        alignSelf: 'center',
        marginTop: ScaleHeight(15),
    },
    inpuTitle: {
        fontSize: ScaleWidth(11),
        textAlign: 'center',
        marginTop: ScaleHeight(17),
        right: ScaleWidth(3)
    },
    input: {
        borderWidth: 0.5,
        borderColor: Colors.gray,
        borderRadius: ScaleHeight(10),
        padding: ScaleHeight(10),
        width: ScaleWidth(250),
        alignSelf: 'center',
        marginTop: ScaleHeight(7),
        height: ScaleHeight(150)
    },
    write: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: ScaleHeight(12),
        right: ScaleWidth(7)
    },
    signupButton: {
        width: ScaleWidth(150),
        height: ScaleHeight(48),
        marginTop: ScaleHeight(15),
    },
    signupText: {
        color: Colors.white,
        fontSize: ScaleWidth(13),
        fontWeight: "bold"
    },
});
export default styles;