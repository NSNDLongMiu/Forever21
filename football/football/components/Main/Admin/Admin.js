import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

let url = "http://localhost:8797/rooms/"
// let url = "http://192.168.43.232:8797/rooms/"

const Room = (props) => {
  const [background, setBackground] = useState('dodgerblue');
  const [data, setData] = useState({}) 
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect((background) => {
    fetch(url + props.nameRoom.toString())
    .then((response) => 
      response.json()
    )
    .then((json) => setData(json.result.room))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
    if(data.states == "Booked")
    {
      background = 'red'; 
      setBackground(background)
    }
  }, [isLoading]);
  const _onPress = () => {
    if(data.states.toString() == "unBooked"){
      Alert.alert("Phòng chưa được đặt!")
    }
    else{
      navigation.navigate('AdminDetail', {
        nameRoom: props.nameRoom,
        nameCustomerPR: data.nameCustomer,
        phoneCustomerPR: data.phoneCustomer.toString(), 
        timeRentalPR: data.timeRental.toString(),
        totalMoneyPR: data.totalMoney.toString(),
        statesPR: data.states.toString(),
      }) 
    }       
  }
  const bg = {
      backgroundColor: background, padding: 10, width: 50, height: 40, alignItems: "center", borderRadius: 5, marginRight: 10, marginTop: 5
  }
  const name = { color: "white",}
  return(
    <View>
      <TouchableOpacity style={bg} onPress = {() => { _onPress()}}>
        <Text style={name}>{props.nameRoom}</Text>
      </TouchableOpacity>
    </View>
  );
}
const Admin = () => {
  const {content, title, floor, room, name, note, txtNote, bookedRoom} = styles; 
  return(
    <View style = {content} >
       <Text style = {title} >Quản lý phòng (ADMIN)</Text>
       <View style = {floor} >
           <Room nameRoom = "101"/>
           <Room nameRoom = "102"/>
           <Room nameRoom = "103"/>
           <Room nameRoom = "104"/>
           <Room nameRoom = "105"/>
       </View>
       <View style = {floor} >
           <Room nameRoom = "201"/>
           <Room nameRoom = "202"/>
           <Room nameRoom = "203"/>
           <Room nameRoom = "204"/>
           <Room nameRoom = "205"/>
       </View>
       <View style = {floor} >
           <Room nameRoom = "301"/>
           <Room nameRoom = "302"/>
           <Room nameRoom = "303"/>
           <Room nameRoom = "304"/>
           <Room nameRoom = "305"/>
       </View>
       <View style = {floor} >
           <Room nameRoom = "401"/>
           <Room nameRoom = "402"/>
           <Room nameRoom = "403"/>
           <Room nameRoom = "404"/>
           <Room nameRoom = "405"/>
       </View>
       <View style = {{marginTop: 50,}}>
         <View style={note}>
             <View>
               <TouchableOpacity style={room}>
                 <Text style={name}></Text>
               </TouchableOpacity>
             </View>
             <Text style={txtNote}>Chưa có người đặt</Text>
         </View>
         <View style={note}>
             <View style={bookedRoom}>
               <TouchableOpacity>
                 <Text style={name}></Text>
               </TouchableOpacity>
             </View>
             <Text style={txtNote}>Đã có người đặt</Text>
         </View>
       </View>
     </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10,
    backgroundColor: '#3EBA77',
  },
  floor: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center"
  },
  title: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 30,
  },
  name: {
    color: "white",
  },
  note: {
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
  },
  txtNote: { 
    color: '#fff',
    marginLeft: 10,
  },
  room: {
    backgroundColor: 'dodgerblue',
    padding: 10,
    width: 50,
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    marginTop: 5,
  },
  bookedRoom:{
    backgroundColor: "red",
    padding: 10,
    width: 50,
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    marginTop: 5,
  },
  
});

export default Admin;
