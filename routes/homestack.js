import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../src/screens/LogIn";
import Home from "../src/screens/Home";
import Notifications from "../src/screens/Notifications";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn"
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};