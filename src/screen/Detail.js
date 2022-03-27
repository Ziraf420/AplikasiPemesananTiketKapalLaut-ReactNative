import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, 
        StatusBar, View, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Jadwal } from '../database/Data'; 

const Detail = ({ navigation, route }) => {
    const data = route.params.text;
    const scheduleList = Jadwal.filter(item =>
        item.dermaga_awal === data.awal &&
        item.dermaga_akhir === data.akhir &&
        item.layanan === data.layanan &&
        item.tanggal === data.tanggal &&
        item.jam === data.waktu);

    const [listData, setlistData] = useState(data);
    
    const onSubmit = () => {
        navigation.navigate('Confirm', {listData});
    } 

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#e6e6e6" />
            <SafeAreaView style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.title}>Kapalzy</Text>
                    <Text style={styles.intitle}>Rincian Tiket</Text>
                    <FlatList
                        data={scheduleList}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <TouchableOpacity style={styles.detail_search}>
                                    <View style={styles.detail_style}>
                                        <Text style={styles.text}>
                                            {item.dermaga_awal}
                                        </Text>
                                        <Text style={styles.text}>
                                            <Icon name="arrow-right" size={20} color='#000' />
                                        </Text>
                                        <Text style={styles.text}>
                                            {item.dermaga_akhir}
                                        </Text>
                                    </View>
                                    <Text style={styles.titleform}>Jadwal Masuk Pelabuhan</Text>
                                    <Text style={styles.detailInfoDate}>
                                        {item.tanggal}
                                    </Text>
                                    <Text style={styles.detailInfoTime}>
                                        {item.jam}
                                    </Text>
                                    <Text style={styles.titleform}>Layanan</Text>
                                    <Text style={styles.detailInfo}>
                                        {item.layanan}
                                    </Text>
                                    <View style={styles.detail_style_Text}>
                                        <Text style={styles.countText}>
                                            Dewasa x 1
                                        </Text>
                                        <Text style={styles.countText}>
                                            Rp.65.000,00
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.jadwal_id}
                        >
                    </FlatList>
                    <View style={styles.result_style}>
                        <Text style={styles.textResult}>
                            Total
                        </Text>
                        <Text style={styles.textResult}>
                            Rp.65.000
                        </Text>
                    </View>
                    <View style={styles.button_style}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress= {() => navigation.navigate('Home')}>
                            <Text style={styles.backbuttonText}>Kembali</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress= {onSubmit}>
                            <Text style={styles.confirmbuttonText}>Lanjutkan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomBar}>
                    <View style={styles.navbar}>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="home" size={30} color='#6b0202'/>
                            <Text style={styles.buttonbarText}>Beranda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Order')}>
                            <Icon name="book" size={30} color='#6b0202'/>
                            <Text style={styles.buttonbarText}>Pesanan Saya</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="ban" size={30} color='#6b0202'/>
                            <Text style={styles.buttonbarText}>Pembatalan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="gears" size={30} color='#6b0202'/>
                            <Text style={styles.buttonbarText}>Lainnya</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        margin: 30,  
        marginTop: 50,  
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginVertical: 0,
        shadowColor: "#bababa",
        shadowOpacity: 10,
        shadowRadius: 5,
    },
    title: {
        color: '#6b0202',
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: 20,
        paddingBottom: 20    
    },
    intitle: {
        fontWeight: 'bold',
        padding: 10
    },
    titleform: {
        fontWeight: 'bold'
    },
    search: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20,
    },
    card: {
        marginHorizontal: 30,
    },
    detail_search: {
        borderWidth: 1,
        borderColor: '#d4d4d4',
        backgroundColor: '#dedede',
        padding: 20,
        marginBottom: 5,
        elevation: 10,
    },
    detail_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    detail_style_Text: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    result_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        color: "#000",
        fontWeight: 'bold'
    },
    button_style: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    planeIcon: {
        marginRight: 10,
    },
    text: {
        color: '#000',
        fontSize: 18,
    },
    textResult: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    detailInfo: {
        paddingBottom: 10
    },
    countText: {
        paddingTop: 10,
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
    },
    detailInfoDate: {
        paddingBottom: 2
    },
    detailInfoTime: {
        paddingBottom: 10
    },
    backButton: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#6b0202',
        color: '#6b0202',
        borderRadius: 5,
        marginHorizontal: 15,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    confirmButton: {
        borderWidth: 1,
        backgroundColor: '#6b0202',
        borderColor: '#6b0202',
        color: '#fff',
        borderRadius: 5,
        marginHorizontal: 15,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    backbuttonText: {
        color: '#6b0202',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 10,
        paddingLeft: 10
    },
    confirmbuttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 10,
        paddingLeft: 10
    },
    bottomBar: { 
        marginTop: 50,  
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 0,
        marginVertical: 0,
    },
    navbar: {
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
    },
    buttonbottomBar: {
        marginHorizontal: 23,
        alignItems: 'center' 
    },
    buttonbarText: {
        color: '#6b0202',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
    },
});

export default Detail;