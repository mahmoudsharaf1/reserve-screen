import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Colors } from "../../common/foundation";
import styles from "./styles";

const AppButton = ({ onPress, title, style, loading, textStyle, children }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                style,
            ]}
        >
            {children}
            {loading ? (
                <ActivityIndicator size="small" color={Colors.white} />
            ) : (
                <Text
                    style={[
                        styles.txt,
                        textStyle,
                    ]}
                >
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default AppButton;
