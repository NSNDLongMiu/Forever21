import React from 'react';
import {  View,  Text, Button, TextInput, StyleSheet,TouchableOpacity, Alert } from 'react-native';

let url = 'http://localhost:8797/rooms/reset/';
// let url = 'http://192.168.43.232:8797/rooms/reset/'

function AdminDetail({route}) {
  const {nameRoom, nameCustomerPR, phoneCustomerPR, timeRentalPR, totalMoneyPR, statesPR} = route.params;
  const [nameCustomer, txtName] = React.useState(nameCustomerPR);
  const [phoneCustomer, txtPhone] = React.useState(phoneCustomerPR);
  const [timeRental, txtTime] = React.useState(timeRentalPR);
  const [totalMoney, txtTotal] = React.useState(totalMoneyPR);
  let data = {
    nameCustomer: nameCustomer,
    phoneCustomer: phoneCustomer,
    timeRental: timeRental,
  }
  const unbookRoom = () => {
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
          .then((json) => {
            if(json.success == 1){
              Alert.alert('Hủy phòng thành công!')
            }
          })
          .catch((err) => console.error(err));
  }
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Phòng {nameRoom}</Text>
      <Text style={styles.title1}>{statesPR}</Text>
      <View style={styles.abc}>
          <Text style={styles.titleInput}> Tên người thuê </Text>
          <TextInput style={styles.textInput}          
            onChangeText={text => txtName(text)}
            value={nameCustomer}
          />
      </View>
      <View style={styles.abc}>
          <Text style={styles.titleInput}> Số điện thoại </Text>
          <TextInput style={styles.textInput}          
            onChangeText={text => txtPhone(text)}
            value={phoneCustomer}
          />
      </View>
      <View style={styles.abc}>
          <Text style={styles.titleInput}> Thời gian thuê (giờ)</Text>
          <TextInput style={styles.textInput}          
            onChangeText={text => txtTime(text)}
            value={timeRental}
          />
      </View>
      <View style={styles.abc}>
          <Text style={styles.titleInput}> Tổng tiền </Text>
          <TextInput style={styles.textInput}          
            onChangeText={text => txtTotal(text)}
            value={totalMoney}
          />
      </View>
      <View style={styles.btnCheckout}>
          <TouchableOpacity>
            <Button title="Hủy phòng"  onPress={() => {unbookRoom()}}  />
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding:20,
    backgroundColor: '#3EBA77',
    fontSize: 25,
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
  title1: {
    color: "red",
    fontSize: 20,
  },
  abc: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'center',
    fontSize: 20,
  },
  textInput: {
    height: 40, 
    width: 180, 
    borderColor: '#fff', 
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginTop: 30,
    fontSize: 15,
    color:"black",
    backgroundColor: "#fff",
  },
  titleInput: {
    color:"#fff",
    marginTop: 30,
  },
  btnCheckout: {
    width: 150,
    marginTop:30,
    marginLeft: 160,
},
  
});
export default AdminDetail;