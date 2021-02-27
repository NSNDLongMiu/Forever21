import React, {useState, useEffect} from 'react';
import { Flatlist , ImageBackground , View, Text, StyleSheet, TouchableOpacity, Alert, RefreshControl, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';

//let url = "http://192.168.0.8:8797/rooms/"
//let url = "http://192.168.1.116:8797/rooms/"
let url = "http://192.168.43.159:8797/rooms/"
const Room = (props) => {
    const navigation = useNavigation();
    const [background, setBackground] = useState('dodgerblue'); 
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
        navigation.navigate('UserDetail', {nameRoom: props.nameRoom,nameCustomer: data.nameCustomer , blog : data.blog , content : data.content , created_at : data.created_at }  ) 
    }

    return(
    
        <View style = {styles.container}>
                <TouchableOpacity style = {styles.viewRoom} onPress = {() => { gotoDetail()}}>
                    <View style = {styles.top}>
                        <Text style = {styles.namecontent}>Tiêu Đề : {data.content}</Text>
                    </View>
                    <Image
                        style = {styles.image}
                        source = {{uri: data.imageRoom}}
                    />
                    <View style = {styles.bottom}>
                        <Text style = {styles.nameRoom}>Người đăng: {data.nameCustomer}</Text>
                        <Text style = {styles.state}>Ngày đăng: {data.created_at}</Text>
                    </View>
                </TouchableOpacity>
        </View>
    );
}
const image = { uri: "https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg" };
const User2 = () => {
    return(
    <ImageBackground source={image} style = {styles.imagebg}>
        <ScrollView contentContainerStyle={styles.scrollView}>
        
            <Text style = {styles.title}> TIN TỨC TRONG TUẦN </Text>
            

            <View style = {styles.container}>
                <Room nameRoom = "1"/>
            </View>
            <View style = {styles.container}>
                <Room nameRoom = "2"/>
            </View>
            <View style = {styles.container}>
                <Room nameRoom = "3"/>    
            </View>
            <View style = {styles.container}>
                <Room nameRoom = "4"/>
            </View>
            <View style = {styles.container}>
                <Room nameRoom = "5"/>
            </View>
            <View style = {styles.container}>
                <Room nameRoom = "6"/>
            </View>
            
        </ScrollView>
    </ImageBackground>
    
    );
}
const styles = StyleSheet.create({
    scrollView: {

        alignItems: 'center',
    },
    imagebg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    top: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottom: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    namecontent: {
        color: "lightgray",
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: "center",
    },
    nameRoom: {
        color: "lightgray",
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: "center",
    },
    state: {
        color: "lightgray",
        marginRight: 10,

    },
    
})
export default User2