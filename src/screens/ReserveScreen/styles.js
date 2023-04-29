import { StyleSheet } from 'react-native'

import { Colors, ScaleHeight, ScaleWidth, width } from '../../common/foundation';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ofWhite,
    },
    swipeView: {
        position: 'absolute'
    },
    body: {
        backgroundColor: Colors.ofWhite,
        borderTopLeftRadius: ScaleHeight(27),
        borderTopRightRadius: ScaleHeight(27),
        paddingBottom: ScaleHeight(50),
        marginTop: ScaleHeight(155),

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: ScaleWidth(15),
        marginTop: ScaleHeight(23)
    },
    fullMenu: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: Colors.blueViolet,
        fontSize: ScaleWidth(16),
        fontWeight: 'bold'
    },
    menu: {
        color: Colors.blueViolet,
        fontSize: ScaleWidth(11),
        fontWeight: 'bold',
        right: ScaleWidth(5)
    },
    arrow: {
        width: ScaleWidth(11),
        height: ScaleHeight(11),
        top: ScaleHeight(1)
    },
    infoView: {
        marginTop: ScaleHeight(23),
        marginHorizontal: ScaleWidth(15),
    },
    containerReview: {
        marginHorizontal: ScaleWidth(15)
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
    quickReview: {
        color: Colors.blueViolet,
        fontSize: ScaleWidth(16),
        marginTop: ScaleHeight(17)
    },
    lastReviewTitle: {
        color: Colors.blueViolet,
        fontSize: ScaleWidth(16),
    },
    lastReview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: ScaleHeight(23),
        marginHorizontal: ScaleWidth(15)
    },
    flatList: {
        paddingBottom: ScaleHeight(10)
    },
    signupButton: {
        width: width - ScaleWidth(35),
        height: ScaleHeight(51),
        bottom: ScaleHeight(19),
    },
    signupText: {
        color: Colors.white,
        fontSize: ScaleWidth(13),
        fontWeight: "bold"
    },
})
export default styles