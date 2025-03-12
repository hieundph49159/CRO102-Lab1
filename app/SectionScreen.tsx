import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SectionScreen = () => {
    const eventInfo = [
        {
            title: 'Lịch trình',
            titleStyle: styles.titlePrimary,
            events: [
                {
                    title: 'Địa điểm',
                    content: 'Hồ Tràm, Vũng Tàu',
                },
                {
                    title: 'Thời gian',
                    content: '09:00 AM - 12:00 AM, 12/12/2024',
                },
                {
                    title: 'Phương tiện di chuyển',
                    content: 'Xe bus',
                },
                {
                    title: 'Hình ảnh',
                    image: 'https://thegrandhotram.com/wp-content/uploads/2020/11/44174d74-9-kinh-nghiem-du-lich-ho-tram-3.jpg',
                },
            ],
        },
        {
            title: 'Khách sạn',
            titleStyle: styles.titleSecondary,
            events: [
                {
                    title: 'Tên khách sạn',
                    content: 'Hồng Quỳnh',
                },
                {
                    title: 'Giờ mở cửa',
                    content: '6:00 AM - 12:00 AM',
                },
                {
                    title: 'Địa điểm',
                    content: '234 Quang Trung, Hồ Chí Minh',
                },
            ],
            showButton: true
        },
    ];

    return (
        <ScrollView style={styles.container}>
            {eventInfo.map(renderSection)}
        </ScrollView>
    );
};

const renderSection = (data, index) => {
    const { title, events, titleStyle, showButton } = data;
    return (
        <View key={index} style={styles.section}>
            <Text style={[styles.titleSection, titleStyle]}>{title}</Text>
            <View style={[styles.sectionBody, styles.shadow]}>
                {events.map(renderChild)}
                {showButton && (
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CHI TIẾT</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const renderChild = (data, index) => (
    <View key={index} style={styles.containerChild}>
        <Text style={styles.titleChild}>{data.title}</Text>
        {data.image ? (
            <Image source={{ uri: data.image }} style={styles.image} />
        ) : (
            <Text style={styles.contentBold}>{data.content}</Text>
        )}
    </View>
);

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        backgroundColor: '#F5F5F5' 
    },
    section: { 
        marginBottom: 20 
    },
    titleSection: { 
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8 
    },
    titlePrimary: {
        color: '#007AFF' 
    },
    titleSecondary: { 
        color: '#FF9500' 
    },
    sectionBody: { 
        backgroundColor: '#fff',
        padding: 12, 
        borderRadius: 8 
    },
    shadow: {
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3 
    },
    containerChild: {
        marginBottom: 10 
    },
    titleChild: { 
        fontSize: 14, 
        color: '#666' 
    },
    contentBold: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#000' 
    },
    image: { 
        width: '100%',
        height: 150, 
        borderRadius: 8,
        marginTop: 8 
    },
    button: {
        backgroundColor: '#007AFF', 
        padding: 12, 
        borderRadius: 8, 
        alignItems: 'center',
        marginTop: 10 
    },
    buttonText: { 
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'bold' 
    },
});

export default SectionScreen;