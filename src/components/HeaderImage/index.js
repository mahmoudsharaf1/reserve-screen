import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

import IMAGES from '../../common/images';
import styles from './styles';
import { covers } from '../../Utils/data';


const HeaderImage = () => {





    const renderPagination = (index, total) => {
        return (
            <View style={styles.paginationStyle}>
                <View style={styles.paginationView}>
                    <TouchableOpacity >
                        <Image
                            source={IMAGES.slide_left}
                            style={styles.arrow}
                        />
                    </TouchableOpacity>


                    <Text style={styles.paginationText}>
                        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
                    </Text>
                    <TouchableOpacity >
                        <Image
                            source={IMAGES.slide_right}
                            style={styles.arrow}
                        />
                    </TouchableOpacity>


                </View>
            </View>
        )
    }
    return (
        <Swiper
            style={styles.wrapper}
            renderPagination={renderPagination}
            removeClippedSubviews={false}
            automaticallyAdjustContentInsets={true}
            loop={false}
        >
            {covers.map((item) => (
                <Image
                    key={item.image}
                    source={item.image}
                    style={styles.rectangle}
                />

            ))}
        </Swiper>
    )
}

export default HeaderImage

