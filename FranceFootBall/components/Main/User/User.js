import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, RefreshControl, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';

let url = "http://192.168.0.7:8797/rooms"
//let url = "http://192.168.1.116:8797/rooms/"
//let url = "http://192.168.43.159:8797/rooms/"
const Room = (props) => {
    const navigation = useNavigation();
    const [background, setBackground] = useState('dodgerblue'); 
    const [state, setState] = useState('Chưa đặt');
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true);
    useEffect((background) => {
        fetch(url + props.nameRoom.toString())
        .then((response) => response.json())
        .then((json) => setData(json.result.room))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [isLoading]);
    const gotoDetail = () => {
        navigation.navigate('UserDetail', {nameRoom: props.nameRoom}) 
    }
    const stateColor = {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: background,
        marginTop: 2,
    }
    return(
        <View style = {styles.container}>
                <TouchableOpacity style = {styles.viewRoom} onPress = {() => { gotoDetail()}}>
                    <Image
                        style = {styles.image}
                        source = {{uri: data.imageRoom}}
                    />
                    <View style = {styles.bottom}>
                        <Text style = {styles.nameRoom}>Phòng: {props.nameRoom}</Text>
                        <Text style = {styles.state}>Trạng thái: {state}</Text>
                        <View style = {stateColor}></View>
                    </View>
                </TouchableOpacity>
        </View>
    );
}
const User2 = () => {
    return(
        <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style = {styles.title}> TIN TỨC TRONG TUẦN </Text>
            <View style = {styles.container}>
                <Room nameRoom = "101"/>
            </View>
            <View style = {styles.container}>
                <Room nameRoom = "102"/>
            </View>
            <View style = {styles.container}>
                <Room nameRoom = "103"/>    
            </View>
            <View style = {styles.container}>
                <Room nameRoom = "201"/>
            </View>
            <View style = {styles.container}>
                <Room nameRoom = "202"/>
            </View>
            <View style = {styles.container}>
                <Room nameRoom = "203"/>
            </View>
            <View style = {styles.container}>
                <Room nameRoom = "222"/>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'black',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    title: {
        marginTop: 50,
        fontSize: 20,
        marginBottom: 20,
        color: "lightgray"
    },
    viewRoom: {
        borderWidth: 1,
        borderColor: "#fff",
        padding: 5,
        // marginTop: 100,
        marginBottom: 10,
        borderRadius: 20,
    },
    image: {
        width: 320,
        height: 170,
        borderRadius: 20,
    },
    bottom: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nameRoom: {
        color: "lightgray",
        marginLeft: 10,
    },
    state: {
        color: "lightgray",
        marginRight: -80,

    },
    
})
export default User2