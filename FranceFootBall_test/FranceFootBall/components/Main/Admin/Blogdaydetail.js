import React, {useState, useEffect} from 'react';
import { ImageBackground ,View, Text, StyleSheet, TouchableOpacity, Alert, RefreshControl, Image, Modal, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SliderBox } from "react-native-image-slider-box";

//let url = 'http://192.168.0.8:8797/posts/update/';
let url = 'http://192.168.43.159:8797/posts/update/';



const UserDetail2 = ({route}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const {name} = route.params;
    const {poster} = route.params;
    const {title} = route.params;
    const {content} = route.params;
    const {created_at} = route.params;
    const image = { uri: "https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg" };
    return(
        <ImageBackground source={image} style = {styles.image}>
            <View style = {styles.container}>
                <View style = {styles.infoRoom}>
                <Text style = {styles.title}>{content}</Text>
                    <SliderBox
                        style = {styles.slide}
                        images = {[
                            require("../../../images/ronaldo.jpg"),
                            require("../../../images/pele.jpg"),
                            require("../../../images/kaka.jpg"),
                            require("../../../images/messi.jpg"),
                            require("../../../images/maradona.jpg"),
                            require("../../../images/reus.jpg"),
                            require("../../../images/neymar.jpg"),
                        ]}
                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor="black"
                        inactiveDotColor="#fff"
                        dotStyle={{
                            width: 7,
                            height: 7,
                            borderRadius: 15,
                        }}
                        autoplay
                        circleLoop
                    />
                    <View style = {styles.infoRoomBottom}>
                        <View style = {styles.introduce}>
                            <Text style = {styles.text1}>Nội dung: </Text>
                            <Text style = {styles.text2}>{title}</Text>
                            <View style = {styles.textname}><Text style = {styles.text1}>Người đăng : {name}</Text></View>
                            <View style = {styles.textngay}><Text style = {styles.text1}>Ngày đăng : {created_at}</Text></View>
                        </View>
                    </View>
               
                </View>
            
                <Modal
                    animationType = "fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {setModalVisible(!modalVisible);}}
                >
                </Modal>
            </View>
        </ImageBackground>
        
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        alignSelf: 'center',
        fontSize: 20,
        color: "lightgray",
        marginBottom : 10 ,
    },
    infoRoom: {
        width: 360,
        height: 700,
        borderWidth: 1,
        borderColor: "#FFFAF0",
        padding : 15 ,
        borderRadius: 15,
        marginTop: 0,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    slide: {
        width: 330,
        height: 220,
        borderRadius: 20,
    },
    infoRoomBottom: {
        width: 330,
        height: 400,
        backgroundColor: "#4d4d4d",
        marginTop: 15,
        borderRadius: 20,
        padding: 15,
        marginLeft: 3,
    },  
    nameRoom: {
        color: "lightgray",
        fontSize: 18,
    },
    introduce: {
        flex : 1 ,
        marginTop: 20,
    },
    price: {
        marginTop: 110,
        flexDirection: "row",
    },
    text1: {
        color: "#C0C0C0",
        fontSize: 15,
    },
    text2: {
        color: "#fff",
    },
    text3: {
        color: "#fff",
        position: 'absolute',
        bottom:0 ,
    },
    textname: {
        position: 'absolute', bottom: 0,
    },
    textngay: {
        position: 'absolute', bottom: 0,
        left : 175 ,
    },
    bottom: {
        width: 330,
        height: 80,
        borderWidth: 1,
        marginTop: 20,
        justifyContent: "center",
        borderColor: "#FDF5E6",
        borderRadius: 15,
        backgroundColor: "#FDF5E6",
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: "#708090",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginLeft: 200,
    },
    buttonText: {
        color: "lightgray",
    },
    model: {
        width: 310,
        height: 400,
        backgroundColor: "#BEBEBE",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 25,
        marginTop: 200,
        borderRadius: 15,
    },
    buttonCheckout: {
        width: 100,
        height: 40,
        backgroundColor: "#F0F8FF",
        borderRadius: 25,
        marginLeft: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText1: {
        color: "#696969",
    },
    topModel: {
        marginBottom: 30,
        width: 270,
    },
    textInput: {
        width: 150,
        height: 35, 
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 10,
    },
    input: {
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title1: {
        marginBottom: 10,
        color: "#fff",
        fontSize: 18,
    },
    bottomModel: {
        width: 270,
        height: 36,
        backgroundColor: "lightgray",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 40,
    },
    text3: {
        color: "#fff"
    },
    text4: {
        color: "#fff",
        marginLeft: 10,
    },
    exitView: {
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomColor: "#fff",
        borderColor: "#BEBEBE",
        borderWidth: 1,
        width: 300,
        height: 40,
        marginBottom: 40,
    },
    exitModal: {
        marginTop: -10,
        width: 25,
        height: 25,
        marginRight: -10,
    },
    textExit: {
        fontSize: 18,
        color: "#fff",
    },
})
export default UserDetail2;