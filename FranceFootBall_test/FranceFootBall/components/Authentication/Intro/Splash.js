import React, { useState,Component , useRef, useEffect } from 'react';
import {Button , Animated , Keyboard, Platform,Text, StyleSheet, View, Image, ScrollView,TextInput,TouchableOpacity,TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const SplashIntro = (props) => {
    const navigation = useNavigation();
    const { inputStyle, bigButton, buttonText, container, txtSignUp, row1, titleStyle } = styles;
    const gotoSignIn = () => {
        navigation.navigate('SignIn')
    }
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 7000,
        useNativeDriver: true,
      }
    ).start(() =>{

      
    });
  }, [fadeAnim])
    return (
        
    <View style={styles.container}>
        <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button style={styles.buttonlogin}
            title="Đăng Nhập"
            onPress={() => {gotoSignIn()}}
        />
        </Animated.View>
        <Animated.Image source={require('../../Authentication/Intro/images/cr7.jpg')}
            style={{...styles.logo,
                opacity: fadeAnim,   
            }}>
        </Animated.Image>
    </View>

  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'column',
        justifyContent: 'center' ,
        alignItems : 'stretch',
        backgroundColor : 'black',
      },
    logo : {
        width : 400 ,
        height : 320 ,
        position : "relative",
        bottom : 160 ,
    },
    buttonlogin : {
        height : 600 ,
        position : "relative",
        bottom: 100 ,
    },
});

export default SplashIntro;