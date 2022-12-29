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

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "orange",
          drawerActiveTintColor: "#FFF",
          //drawerInactiveBackgroundColor:'#333',
          drawerLabelStyle: { marginLeft: 0, fontSize: 15 },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Users" component={Users} />
        <Drawer.Screen name="Devices" component={Devices} />
        <Drawer.Screen name="History" component={History} />
        <Drawer.Screen name="Payment Info" component={PaymentInfo} />
        <Drawer.Screen name="Invoice" component={Invoice} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
        <Drawer.Screen name="FAQ'S" component={FAQ} />
        <Drawer.Screen name="Login" component={LogIn} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="CreateUser" component={CreateUser} />
        <Drawer.Screen name="CreateDevice" component={CreateDevice} />
        <Drawer.Screen name="Refuel" component={Refuel} />
        <Drawer.Screen name="PaymentForm" component={PaymentForm} />
        <Drawer.Screen name="User1" component={User1} />
        <Drawer.Screen name="Device1" component={Device1} />
      </Drawer.Navigator>
    </NavigationContainer>

    //     <MyStack>
    //   <LogIn/>
    //  </MyStack>
  );
}