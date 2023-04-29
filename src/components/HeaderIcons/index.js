import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'

import IMAGES from '../../common/images'
import styles from './styles'


const HeaderIcons = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity>
                    <Image
                        source={IMAGES.arrow_back}
                        style={styles.back}
                    />
                </TouchableOpacity>

                <View style={styles.iconView}>
                    <TouchableOpacity style={styles.subIconView}>
                        <Image
                            source={IMAGES.share}
                            style={styles.share}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subIconView}>
                        <Image
                            source={IMAGES.heart}
                            style={styles.share}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Image
                source={IMAGES.logo}
                style={styles.logo}
            />
        </View>
    )
}

export default HeaderIcons;

