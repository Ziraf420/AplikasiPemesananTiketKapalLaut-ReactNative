import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, FlatList, 
    View, ScrollView, TextInput, 
    TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Jadwal } from '../database/Data'; 

const Confirm = ({ navigation, route }) => {
    const data = route.params.listData;
    console.log(data)
    const scheduleList = Jadwal.filter(item =>
        item.dermaga_awal === data.awal &&
        item.dermaga_akhir === data.akhir &&
        item.layanan === data.layanan &&
        item.tanggal === data.tanggal &&
        item.jam === data.waktu);
    console.log(scheduleList)

    const [text, inputText] = useState({ 
        name: '',
        identity: '',
        age: '',
    });

    const getInput = (userInput) => {
        return (val) => {
            inputText({ ...text, [userInput]: val });
        }
    }

    const [listData, setlistData] = useState(data);
    
    const onSubmit = () => {
        navigation.navigate('Order', {listData});
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
                                        {item.dermaga_layanan}
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
                    <Text style={styles.titleNameForm}>Data Pemesan</Text>
                    <Text style={styles.titleForm}>Nama Lengkap</Text>
                    <View style={styles.search}>
                    <TextInput
                        style={styles.input}
                        placeholder="Muhammad Fariz Luthfi"
                        onChangeText={getInput('name')}
                        value={text.name}
                    />
                    </View>   
                    <Text style={styles.titleForm}>Identitas</Text>
                    <View style={styles.search}>
                        <TextInput
                            style={styles.input}
                            placeholder="Laki-Laki"
                            onChangeText={getInput('identity')}
                            value={text.identity}
                        />
                    </View>  
                    <Text style={styles.titleForm}>Umur</Text>
                    <View style={styles.search}>
                        <TextInput
                            style={styles.input}
                            placeholder="15 Tahun"
                            onChangeText={getInput('age')}
                            value={text.age}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onSubmit}>
                        <Text style={styles.buttonText}>Pesan Tiket</Text>
                    </TouchableOpacity>
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
        padding: 10,
        fontSize: 16,
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
        marginBottom: 10,
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
    search: {
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
        paddingBottom: 20
    },
    titleForm: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        color: '#000',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 40,
        flex: 1,
    },
    titleNameForm: {
        marginLeft: 10,
        marginBottom: 5,
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    button: {
        backgroundColor: '#eb7900',
        borderRadius: 10,
        marginHorizontal: 50,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Confirm;
