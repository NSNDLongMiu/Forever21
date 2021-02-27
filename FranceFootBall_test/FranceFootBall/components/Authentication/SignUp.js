import React, { useState,Component } from 'react';
import { ImageBackground ,View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

//let url = "http://192.168.0.8:8797/users/"
//let url = "http://192.168.1.116:8797/users"
let url = "http://192.168.43.159:8797/users"
//let url = "http://192.168.0.4:8797/users"
//let url = 'http://192.168.43.232:8797/users';

const SignUpScreen = (props) => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password_confirmation, setpassword_confirmation] = useState('');

    const { inputStyle, bigButton, buttonText, row1, titleStyle, container } = styles;
    const handlingSignup = () => {
        fetch(url,
        {   
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "username": username ,
                "password": password ,
                "email": email ,
                "password_confirmation": password_confirmation
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.success == 1){
                Alert.alert("Đăng ký thành công!");
                navigation.navigate("SignIn");     
            }
            else if (res.success == 2){
                Alert.alert(res.message)
            }
            else{
                
                Alert.alert("Email đã được sử dụng!")
                setEmail('')
            }
        }) 
    }
    const image = { uri: "https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg" };
    return (
        <ImageBackground source={image} style = {styles.imagebg}>
            <View style={container}>
                <View style={styles.up}>
                <Text style={styles.titleicons}>
                <MaterialCommunityIcons name="heart-multiple" size={100} color="rgb(221,97,97)" />
                </Text>
                    <Text style={styles.title}>
                    FootBall
                    </Text>
                </View>
            <View style={styles.down}>
                <View style={styles.textInputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Tên người dùng" 
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                </View>
                <View style={styles.textInputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Email" 
                    value={email.toString()}
                    onChangeText={(text) => setEmail(text)}
                />
                </View>
                <View style={styles.textInputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Mật khẩu" 
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />
                </View>
                <View style={styles.textInputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Nhập lại mật khẩu" 
                    value={password_confirmation}
                    secureTextEntry
                    onChangeText={(text) => setpassword_confirmation(text)}
                />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={() => handlingSignup()}>
                    <Text style={styles.loginButtonTitle}>ĐĂNG KÝ</Text>
                </TouchableOpacity>
            </View>

            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagebg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    up: {
        flex : 3 ,
        flexDirection : 'column',
        justifyContent : 'center' ,
        alignItems : 'center',
    },
    down: {
        flex : 7 ,
        flexDirection : 'column',
        justifyContent : 'flex-start',
        alignItems : 'center',
    },
    title: {
        flexDirection : 'column',
        color : 'rgb(221,97,97)',
        textAlign : 'center',
        width : 400 ,
        fontSize : 23,
    },
    textInputContainer : {
        paddingHorizontal : 10 ,
        backgroundColor : 'rgba(255,255,255,0.3)' ,
        borderRadius: 6 ,
        marginTop : 20,
    },
    textInput: {
        width : 280,
        height : 50,
    },
    loginButton: {
        width : 300 ,
        height :45 ,
        borderRadius :6 ,
        justifyContent :'center',
        alignItems : 'center',
        backgroundColor : 'rgb(221,97,97)',
        marginTop : 20 ,
    },
    loginButtonTitle: {
      fontSize : 18,
      color : 'white',

    },
    inputStyle: {
        height: 50,
        width: 300,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    titleStyle: { color: '#FFF', fontSize: 30 , marginBottom: 50},
    bigButton: {
        height: 45,
        width: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    buttonText: {
        color: '#fff',
        fontWeight: '400'
    }
});
export default SignUpScreen;