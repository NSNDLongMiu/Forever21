import React, {useState, useEffect} from 'react';
import { Flatlist , ImageBackground , View, Text, StyleSheet, TouchableOpacity, Alert, RefreshControl, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';

//let url = "http://192.168.0.8:8797/posts/"
//let url = "http://192.168.1.116:8797/rooms/"
let url = "http://192.168.43.159:8797/posts/"
const Room = (props) => {
    const navigation = useNavigation();
    const [background, setBackground] = useState('dodgerblue'); 
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true);
    useEffect((background) => {
        fetch(url + props.poster.toString())
        .then((response) => response.json())
        .then((json) => setData(json.result.post))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [isLoading]);
    // const gotoDetail = () => {
    //     navigation.navigate('UserDetail', {nameRoom: props.nameRoom,nameCustomer: data.nameCustomer , blog : data.blog , content : data.content , created_at : data.created_at }  ) 
    // }
    const gotoDetail = () => {
        navigation.navigate('Blogdaydetail', {name : data.name ,title : data.title ,content : data.content ,poster : props.poster ,image : data.image ,content : data.content , created_at : data.created_at }  ) 
    }

    return(
    
        <View style = {styles.container}>
                <TouchableOpacity style = {styles.viewRoom} onPress = {() => { gotoDetail()}}>
                    <View style = {styles.top}>
                        <Text style = {styles.namecontent}>Tiêu Đề : {data.content}</Text>
                    </View>
                    <Image
                        style = {styles.image}
                        source = {{uri: data.image}}
                    />
                    <View style = {styles.bottom}>
                        <Text style = {styles.nameRoom}>Người đăng: {data.name}</Text>
                        <Text style = {styles.state}>Ngày đăng: {data.created_at}</Text>
                    </View>
                </TouchableOpacity>
        </View>
    );
}
const image = { uri: "https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg" };
const User2 = () => {
    const navigation = useNavigation();
    const blogday = () => {
        navigation.navigate("User");  
    }
    return(
    <ImageBackground source={image} style = {styles.imagebg}>
        <ScrollView contentContainerStyle={styles.scrollView}>
        
        <View style = {styles.news}>
            
            <TouchableOpacity style={styles.loginButtonday} onPress={() => blogday()}>
                <Text style={styles.loginButtonTitle}>TIN TỨC TRONG TUẦN</Text>
            </TouchableOpacity>
            <View style={styles.loginButtonweek} >
                <Text style = {styles.loginButtonTitle}> TIN TỨC TRONG NGÀY </Text>
            </View>
        </View>
            

            <View style = {styles.container}>
                <Room poster = "1"/>
            </View>
            <View style = {styles.container}>
                <Room poster = "2"/>
            </View>
            <View style = {styles.container}>
                <Room poster = "3"/>
            </View>
            <View style = {styles.container}>
                <Room poster = "4"/>
            </View>
            <View style = {styles.container}>
                <Room poster = "5"/>
            </View>
            <View style = {styles.container}>
                <Room poster = "6"/>
            </View>
            <View style = {styles.container}>
                <Room poster = "7"/>
            </View>
            <View style = {styles.container}>
                <Room poster = "8"/>
            </View>
            <View style = {styles.container}>
                <Room poster = "9"/>
            </View>
            <View style = {styles.container}>
                <Room poster = "10"/>
            </View>
            <View style = {styles.container}>
                <Room poster = "11"/>
            </View>
            <View style = {styles.container}>
                <Room poster = "0"/>
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
    news : {
        flex : 1 ,
        flexDirection: "row",
        marginBottom : 30 ,
    },
    
    loginButtonday: {
        width : 180 ,
        height :45 ,
        borderRadius :10 ,

        backgroundColor : 'rgb(221,97,97)',
        marginTop : 20 ,
    },
    loginButtonweek: {
        width : 180 ,
        height :45 ,
        borderRadius :10 ,

        backgroundColor : '#9932CC',
        marginTop : 20 ,
    },
    loginButtonTitle: {
        fontSize : 18,
         color : 'white',
         position : "absolute",
         top : 10 ,
         left : 10 ,

    },
    title: {
        fontSize: 20,
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