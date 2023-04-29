import { Image, FlatList, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import IMAGES from '../../common/images';
import { socialIcon } from '../../Utils/data';



const ReserveInfo = ({
    time,
    cost,
    phoneNumber,
    location,
    km
}) => {

    const renderSocialIcons = ({ item }) => (
        <TouchableOpacity style={styles.socialView}>

            <Image
                source={item.icon}
                style={styles.socialIcon}
            />
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <View style={styles.dataView}>
                <Image
                    source={IMAGES.field_time}
                    style={styles.fieldTime}
                />
                <Text style={styles.time}>{time}</Text>
                <Image
                    source={IMAGES.arrow_down}
                    style={styles.down}
                />
            </View>

            <View style={styles.dataView}>
                <Image
                    source={IMAGES.cost}
                    style={styles.cost}
                />
                <Text style={styles.price}>{cost}</Text>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={socialIcon}
                renderItem={renderSocialIcons}
                keyExtractor={(e, i) => i.toString()}

            />

            <View style={styles.phoneView}>
                <View style={styles.phone}>
                    <Image
                        source={IMAGES.carbon_phone_voice}
                        style={styles.fieldTime}
                    />
                    <Text style={styles.time}>{phoneNumber}</Text>
                </View>
                <TouchableOpacity>
                    <Image
                        source={IMAGES.phone_voice}
                        style={styles.fieldTime}
                    />
                </TouchableOpacity>
            </View>



            <View style={styles.phoneView}>
                <View style={styles.phone}>
                    <Image
                        source={IMAGES.marker}
                        style={styles.fieldTime}
                    />
                    <Text style={styles.time}>{location}</Text>
                    <Text style={styles.km}>{km}</Text>
                </View>
                <TouchableOpacity>
                    <Image
                        source={IMAGES.location}
                        style={styles.fieldTime}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ReserveInfo

