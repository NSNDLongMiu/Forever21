import React, { useState } from 'react';
import { ImageBackground , View, TextInput, Text, TouchableOpacity, StyleSheet, Alert , Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

let url = "http://192.168.43.159:8797/login"
//let url = "http://192.168.0.4:8797/login"
//let url = "http://192.168.43.87:8797/login"
//let url = "http://192.168.1.116:8797/login"
//let url = "http://192.168.0.8:8797/login/"

const SignInScreen = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkLoginn] = useState(0);
    const { inputStyle, bigButton, buttonText, container, txtSignUp, row1, titleStyle } = styles;
    const gotoSignUp = () => {
        navigation.navigate('SignUp')
    }
    const gotoUser = () => {       
        fetch(url,
        {   
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ 
                email: email, 
                password: password 
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.success == 2){
                navigation.navigate("User");     
            }
            else if(res.role == "admin"){
                navigation.navigate("Admin")
            }
            else if (res.success == 1){
                Alert.alert(res.message)
            }
            else{
                Alert.alert(res.message)
            }
        })
    }
    const Divider=(props) => {
        return  <View {...props}>
          <View style={styles.line}></View>
          <Text style={styles.textOR}>OR</Text>
          <View style={styles.line}></View>
        </View>
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
              <TextInput style={styles.textInput} 
              textContentType='emailAddress' 
              keyboardType='email-address'
              placeholder='Nhập địa chỉ email'
              onChangeText={(text) => setEmail(text)}
              >

              </TextInput>
            </View>
            <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} 
              placeholder='Nhập mật khẩu'
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              >

              </TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={() => {gotoUser()}}>
              <Text style={styles.loginButtonTitle}>
                Login
              </Text>
            </TouchableOpacity>
            <Divider style={styles.divider}></Divider>
            <FontAwesome.Button
              style={styles.facebookbutton}
              name = 'facebook'
              backgroundColor='#3b5998'
            >
              <Text style={styles.loginButtonTitle}>
                Login with Facebook
              </Text>
            </FontAwesome.Button>
            <TouchableOpacity style={styles.loginButton} onPress={() => gotoSignUp()}>
                <Text style = {styles.loginButtonTitle}>Đăng ký</Text>
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
    facebookbutton: {
      width : 300 ,
      height: 45 , 
      borderRadius :6 ,
      justifyContent :'center',
      alignItems : 'center',
    },
    line:{
      flex : 2 ,
      height : 1,
      backgroundColor : 'white',
    },
    textOR: {
      flex : 1 ,
      textAlign :'center', 
      color : 'white',
    },
    divider: {
      flexDirection:'row',
      width : 298 ,
      height : 40 , 
      justifyContent : 'center',
      alignItems : 'center',
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    titleStyle: { color: '#FFF', fontSize: 30 , marginBottom: 50},
    inputStyle: {
        height: 50,
        width: 300,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
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
    },
    txtSignUp:{
        color: 'white',
        marginTop: 10,
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    titleStyle: { color: '#FFF', fontSize: 30 , marginBottom: 50},
    inputStyle: {
        height: 50,
        width: 300,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
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
    },
    txtSignUp:{
        color: 'white',
        marginTop: 10,
    }
});

export default SignInScreen;