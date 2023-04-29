import React, { useState } from 'react'
import { Modal, Text, View, SafeAreaView, TouchableOpacity, Pressable, Image, TextInput } from 'react-native'
import StarRating from 'react-native-star-rating-widget';

import AppButton from '../AppButton';
import styles from './styles';
import IMAGES from '../../common/images';
const AddReview = ({
    name,
    typeRestaurant
}) => {
    const [rating, setRating] = useState(0);
    const [visable, setVisable] = useState(false)
    const show = () => setVisable(true)
    const hide = () => setVisable(false)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.reviews}>
                <Text style={styles.title}>{'What Peopel Say'}</Text>
                <TouchableOpacity onPress={() => show()}>
                    <Text style={styles.addReview}>{'Add Review'}</Text>
                </TouchableOpacity>
            </View>
            <Modal
                visible={visable}
                transparent={true}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHead}>
                            <TouchableOpacity onPress={() => hide()}>
                                <Image
                                    source={IMAGES.close}
                                    style={styles.close}
                                />
                            </TouchableOpacity>
                            <Text style={styles.modalTitle}>{'Rating'}</Text>
                        </View>
                        <View style={styles.typeRestaurant}>
                            <Text style={styles.scalini}>{name}</Text>
                            <Text style={styles.restaurant}> {typeRestaurant}</Text>
                        </View>
                        <Text style={styles.restaurantValue}>{'Restaurant Value'}</Text>
                        <View style={styles.ratingView}>
                            <StarRating
                                rating={rating}
                                onChange={setRating}
                                style={styles.rating}
                            />
                        </View>

                        <Text style={styles.inpuTitle}>{'Is there anything else you want to tell us about?'}</Text>
                        <View style={styles.input}>
                            <TextInput

                            />
                            <Image
                                source={IMAGES.write}
                                style={styles.write}
                            />
                        </View>
                        <AppButton
                            title={'Submit'}
                            style={styles.signupButton}
                            textStyle={styles.signupText}
                        />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default AddReview

