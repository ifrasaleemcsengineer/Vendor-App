import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "../src/screens/Home"
import LogIn from "../src/screens/LogIn";
import History from "../src/screens/History";
import PaymentInfo from "../src/screens/PaymentInfo";
import AboutUs from "../src/screens/AboutUs";
import ContactUs from "../src/screens/ContactUs";
import FAQ from "../src/screens/FAQ";
import Notifications from "../src/screens/Notifications";
import Users from "../src/screens/Users";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomDrawer from "../src/components/CustomDrawer";
import Invoice from "../src/screens/Invoice";
import Devices from "../src/screens/Devices";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CreateDevice from "../src/screens/CreateDevice";
import TermsConditions from "../src/screens/TermsConditions";
import PrivacyPolicy from "../src/screens/PrivacyPolicy";

const Drawer = createDrawerNavigator();

export function DrawerContent (props) {
    return(
    <Drawer.Navigator initialRouteName="Home"
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
      <Drawer.Screen name="My Accounts" component={PaymentInfo} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Invoice" component={Invoice} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
      <Drawer.Screen name="FAQ" component={FAQ} />
      
    </Drawer.Navigator>
    )
  }

  export default DrawerContent;
