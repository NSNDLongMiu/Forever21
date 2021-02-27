import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Admin from './components/Main/Admin/Admin';
import User from './components/Main/User/User';
import AdminDetail from './components/Main/Admin/AdminDetail';
import Blogday from './components/Main/Admin/Blogday';
import Blogdaydetail from './components/Main/Admin/Blogdaydetail';
import Admindelete from './components/Main/Admin/Admindelete';
import Update from './components/Main/Admin/Update';
import UserDetail from './components/Main/User/UserDetail';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import Splash from './components/Authentication/Intro/Splash';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash}   />
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="User" component={User}/>
        <Stack.Screen name="UserDetail" component={UserDetail}/>
        <Stack.Screen name="Admin" component={Admin}/>
        <Stack.Screen name="AdminDetail" component={AdminDetail}/>
        <Stack.Screen name="Update" component={Update}/>
        <Stack.Screen name="Blogday" component={Blogday}/>
        <Stack.Screen name="Blogdaydetail" component={Blogdaydetail}/>
        <Stack.Screen name="Admindelete" component={Admindelete}/>
      </Stack.Navigator>
    </NavigationContainer>  
  );
}


export default App;




