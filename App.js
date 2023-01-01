import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "./src/screens/Home";
import LogIn from "./src/screens/LogIn";
import History from "./src/screens/History";
import PaymentInfo from "./src/screens/PaymentInfo";
import AboutUs from "./src/screens/AboutUs";
import ContactUs from "./src/screens/ContactUs";
import FAQ from "./src/screens/FAQ";
import Notifications from "./src/screens/Notifications";
import Users from "./src/screens/Users";
import { MyStack } from "./routes/homestack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./src/components/CustomDrawer";
import CreateUser from "./src/screens/CreateUser";
import Refuel from "./src/screens/Refuel";
import PaymentForm from "./src/screens/PaymentForm";
import User1 from "./src/screens/User1";
import Invoice from "./src/screens/Invoice";
import Devices from "./src/screens/Devices";
import Device1 from "./src/screens/Device1";
import CreateDevice from "./src/screens/CreateDevice";



const Stack = createNativeStackNavigator();

export default function App() {
  return (

        <MyStack>
      <LogIn/>
     </MyStack>
  );
}