import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Admin from './components/Main/Admin/Admin';
import User from './components/Main/User/User';
import AdminDetail from './components/Main/Admin/AdminDetail';
import UserDetail from './components/Main/User/UserDetail';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import Splash from './components/Authentication/Intro/Splash';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash}   />
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="User" component={User}/>
        <Stack.Screen name="UserDetail" component={UserDetail} options={{ title: 'Quản lý Homestay' }}/>
        <Stack.Screen name="Admin" component={Admin} options={{ title: 'Quản lý Homestay' }}/>
        <Stack.Screen name="AdminDetail" component={AdminDetail} options={{ title: 'Quản lý Homestay' }}/>
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

export default App;




