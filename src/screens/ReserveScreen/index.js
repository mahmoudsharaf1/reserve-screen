import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';

import styles from './styles';
import IMAGES from '../../common/images';
import HeaderIcons from '../../components/HeaderIcons';
import Restaurant from '../../components/Restaurant';
import ReserveInfo from '../../components/ReserveInfo';
import BestDishesItem from '../../components/BestDishesItem';
import MoreInfo from '../../components/MoreInfo';
import { orders, information, quickReview } from '../../Utils/data';
import QuickReviews from '../../components/QuickReviwes';
import LastViewItem from '../../components/LastViewItem';
import AppButton from '../../components/AppButton';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { getReviews } from '../../redux/actions/getReviews';
import { connect } from 'react-redux';
import HeaderImage from '../../components/HeaderImage';
import { Colors } from '../../common/foundation';
import AddReview from '../../components/AddReview';



const Reserve = ({ getReviews, reviews }) => {
    const [activeReview, setActiveReview] = useState('')

    useEffect(() => {
        getReviews()
    }, [getReviews])


    const renderOrderItem = ({ item }) => (
        <BestDishesItem
            orderImage={item.image}
            orderName={item.orderName}
            price={item.price}
            currency={item.currency}
        />
    )
    const renderMoreInfo = ({ item }) => (
        <MoreInfo
            titleInfo={item.titleInfo}
            available={item.available}
        />
    )
    const renderQuickReviews = ({ item }) => (
        <QuickReviews
            onPress={() => setActiveReview(item.review)}
            review={item.review}
            active={
                activeReview == item.review ? true : false
            }
        />
    )
    const renderLastViewItem = ({ item }) => (
        <LastViewItem
            rate={'5'}
            title={item.title}
            body={item.body}
        />
    )

    return (
        <View style={styles.container}>
            <ScrollView>
                <HeaderIcons />
                <View style={styles.swipeView}>
                    <HeaderImage />
                </View>


                <View style={styles.body}>
                    <Restaurant
                        name={'Scalini'}
                        typeRestaurant={'Italian'}
                        rate={'4.3'}
                    />

                    <ReserveInfo
                        time={'Open At 3 Am'}
                        cost={'Avareg Cost 500 SAR For Tow'}
                        phoneNumber={'+111 11 111 111'}
                        location={'Prince Muhammad Bin'}
                        km={'15.5 Km'}
                    />

                    <View style={styles.header}>
                        <Text style={styles.title}>{'The Best Dishes'}</Text>
                        <TouchableOpacity style={styles.fullMenu}>
                            <Text style={styles.menu}>{'Full Menu'}</Text>
                            <Image
                                source={IMAGES.right_arrow}
                                style={styles.arrow}
                            />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        horizontal
                        data={orders}
                        renderItem={renderOrderItem}
                        keyExtractor={(e, i) => i.toString()}
                        showsHorizontalScrollIndicator={false}
                        style={styles.flatList}
                    />

                    <View style={styles.infoView}>
                        <Text style={styles.title}>{'More Info !'}</Text>

                        <FlatList
                            data={information}
                            renderItem={renderMoreInfo}
                            keyExtractor={(e, i) => i.toString()}
                            showsVerticalScrollIndicator={false}
                            style={styles.flatList}
                        />
                    </View>
                    <View style={styles.containerReview}>
                        <AddReview
                            name={'Scalini'}
                            typeRestaurant={'Italian'}
                        />

                        <Text style={styles.quickReview}>{'Quick Review'}</Text>
                        <FlatList
                            horizontal
                            data={quickReview}
                            renderItem={renderQuickReviews}
                            keyExtractor={(e, i) => i.toString()}
                            showsHorizontalScrollIndicator={false}
                            style={styles.flatList}
                        />

                    </View>
                    <View style={styles.lastReview}>
                        <Text style={styles.lastReviewTitle}>{'Last Review'}</Text>
                        <TouchableOpacity>
                            <Text style={styles.addReview}>{'See All Review'}</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal
                        data={reviews}
                        renderItem={renderLastViewItem}
                        keyExtractor={(e, i) => i.toString()}
                        showsHorizontalScrollIndicator={false}
                        style={styles.flatList}
                    />
                </View>

            </ScrollView>
            <AppButton
                title={'Reservation'}
                style={styles.signupButton}
                textStyle={styles.signupText}
            />
        </View>

    );
};

const mapStateToProps = ({ reviews }) => {
    return {
        reviews: reviews.reviews
    }
}

export default connect(mapStateToProps, { getReviews })(Reserve)

