import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const HeaderScreen = () => {
    return (
        <View style={styles.containerScreen}>
            {/* Header với icon quay lại bên trái và avatar bên phải */}
            <Header
                title="Header"
                iconLeft={require("../assets/images/back.png")}  // Đảm bảo đúng đường dẫn
                iconRight={require("../assets/images/avt.png")} // Đảm bảo đúng đường dẫn
            />


            {/* iconLeft={require("../assets/back.png")} */}
            <Header title="Trang chủ"
                iconLeft={require("../assets/images/back.png")}
            />

            <Header title=""
                iconLeft={require("../assets/images/back.png")}
            />



        </View>
    );
};

// Component Header
const Header = ({ title, iconLeft, onPressLeft, iconRight, onPressRight }) => {
    return (
        <View style={styles.containerHeader}>
            {/* Icon bên trái */}
            <View style={styles.containerLeft}>
                {iconLeft ? (
                    <Pressable hitSlop={15} onPress={onPressLeft}>
                        <Image source={iconLeft} style={styles.icon} />
                    </Pressable>
                ) : (
                    <View style={styles.iconPlaceholder} />
                )}
            </View>

            {/* Tiêu đề ở giữa */}
            <View style={styles.containerCenter}>
                <Text style={styles.title}>{title}</Text>
            </View>

            {/* Icon bên phải */}
            <View style={styles.containerRight}>
                {iconRight ? (
                    <Pressable hitSlop={15} onPress={onPressRight}>
                        <Image source={iconRight} style={styles.icon} />
                    </Pressable>
                ) : (
                    <View style={styles.iconPlaceholder} />
                )}
            </View>
        </View>
    );
};

// CSS
const styles = StyleSheet.create({
    containerScreen: {
        flex: 1,
        backgroundColor: "#fff",
    },
    containerHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#F8F8F8",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    containerLeft: {
        flex: 1,
        alignItems: "flex-start",
    },
    containerCenter: {
        flex: 2,
        alignItems: "center",
    },
    containerRight: {
        flex: 1,
        alignItems: "flex-end",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    icon: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    iconPlaceholder: {
        width: 32,
        height: 32,
    },
});

export default HeaderScreen;
