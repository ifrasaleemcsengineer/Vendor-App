import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../src/screens/LogIn";
import Home from "../src/screens/Home";
import Notifications from "../src/screens/Notifications";
import Device1 from "../src/screens/Device1";
import FAQ from "../src/screens/FAQ";
import DrawerContent from "./DrawerContent";
import CreateUser from "../src/screens/CreateUser";
import Refuel from "../src/screens/Refuel";
import PaymentForm from "../src/screens/PaymentForm";
import User1 from "../src/screens/User1";
import CreateDevice from "../src/screens/CreateDevice";
import PaymentInfo from "../src/screens/PaymentInfo";
import UserDevice1 from "../src/screens/VendorDevice1";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn"
      screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="LogIn" component={LogIn} /> */}
        <Stack.Screen name="Home" component={DrawerContent} />
        <Stack.Screen name="Notifications" component={Notifications}/>
        <Stack.Screen name="Device1" component={Device1} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="User1" component={User1} />
        <Stack.Screen name="CreateUser" component={CreateUser} />
        <Stack.Screen name="Refuel" component={Refuel} />
        <Stack.Screen name="PaymentForm" component={PaymentForm} />
        <Stack.Screen name="CreateDevice" component={CreateDevice} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="UserDevice1" component={UserDevice1} />

        {/* <Stack.Screen name="Home1" component={Home1} /> */}
      </Stack.Navigator>      
    </NavigationContainer>
  );
};