import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, RefreshControl, Image, Modal, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SliderBox } from "react-native-image-slider-box";

let url = "http://192.168.0.7:8797/rooms/update"
//let url = 'http://192.168.1.116:8797/rooms/update/';
//let url = 'http://192.168.43.159:8797/rooms/update/';
const UserDetail2 = ({route}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [nameCustomer, txtName] = useState('');
    const [phoneCustomer, txtSDT] = useState('');
    const [timeRental, txtTime] = useState('');
    const [totalMoney, txtTotal] = useState('');
    const {nameRoom} = route.params;
    let data = {
        nameCustomer: nameCustomer,  
        phoneCustomer: phoneCustomer,
        timeRental: timeRental,
    }
    const bookRoom = () => {
        fetch(url + nameRoom.toString(),
          {   
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
              },
              body: JSON.stringify(data)
          })
          .then(res => res.json())
    }
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Thông tin phòng</Text>
            <View style = {styles.infoRoom}>
                <SliderBox
                    style = {styles.slide}
                    images = {[
                        require("../../../images/room101.png"),
                        require("../../../images/room102.jpg"),
                        require("../../../images/room103.jpg"),
                        require("../../../images/room201.jpg"),
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
                    <Text style = {styles.nameRoom}>Phòng {nameRoom}</Text>
                    <View style = {styles.introduce}>
                        <Text style = {styles.text1}>Giới thiệu: </Text>
                        <Text style = {styles.text2}>Phòng có đầy đủ thiết bị tiện nghi ( điều hòa, bồn tắm, máy nước nóng,...). Phòng bao gồm một giường đôi, một tủ đựng quần áo và một bàn làm việc nhỏ. </Text>
                    </View>
                    <View style = {styles.price}>
                        <Text style = {styles.text1}>Giá tiền: </Text>
                        <Text style = {styles.text2}>100.000 VNĐ/1h. </Text>
                    </View>
                </View>
            </View>
            <Modal
                animationType = "fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible);}}
            >
                <View style = {styles.model}>
                    <View style = {styles.exitView}>
                        <Text style = {styles.title1}>Đặt phòng</Text>
                        <TouchableOpacity style = {styles.exitModal} onPress={() => {setModalVisible(!modalVisible);}}>
                            <Text style = {styles.textExit}>x</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.topModel}>
                        <View style = {styles.input}>
                            <Text style = {styles.text3}>Họ và tên: </Text>
                            <TextInput style={styles.textInput}          
                                onChangeText={text => txtName(text)}
                                value={nameCustomer}
                            />
                        </View>
                        <View style = {styles.input}>
                            <Text style = {styles.text3}>Số điện thoại: </Text>
                            <TextInput style={styles.textInput}          
                                onChangeText={text => txtSDT(text)}
                                value={phoneCustomer}
                            />
                        </View>
                        <View style = {styles.input}>
                            <Text style = {styles.text3}>Thời gian thuê (h): </Text>
                            <TextInput style={styles.textInput}          
                                onChangeText={text => txtTime(text)}
                                value={timeRental}
                            />
                        </View>
                        <TouchableOpacity style = {styles.buttonCheckout} onPress={() => {bookRoom()}}>
                            <Text style={styles.buttonText1}>Thanh toán</Text>
                        </TouchableOpacity>
                    </View> 
                    <View style = {styles.bottomModel}>
                        <Text style = {styles.text4}>Tổng tiền (VNĐ): </Text>
                        <TextInput style={styles.textInput}          
                            onChangeText={text => txtTotal(text)}
                            value={totalMoney.toString()}
                        />
                    </View> 
                </View>
            </Modal>
            <View style = {styles.bottom}>
                <TouchableOpacity style={styles.button} onPress={() => {setModalVisible(true);}}>
                    <Text style={styles.buttonText}>Đặt phòng</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5", 
    },
    title: {
        fontSize: 18,
        color: "gray",
    },
    infoRoom: {
        width: 330,
        height: 500,
        borderWidth: 1,
        borderColor: "#FFFAF0",
        padding: 10, 
        borderRadius: 15,
        marginTop: 20,
        backgroundColor: "#FFFAF0",
    },
    slide: {
        width: 300,
        height: 170,
        borderRadius: 20,
        marginLeft: 3,
    },
    infoRoomBottom: {
        width: 300,
        height: 300,
        backgroundColor: "gray",
        marginTop: 10,
        borderRadius: 20,
        padding: 15,
        marginLeft: 3,
    },  
    nameRoom: {
        color: "lightgray",
        fontSize: 18,
    },
    introduce: {
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