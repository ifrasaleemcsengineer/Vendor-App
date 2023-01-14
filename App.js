import React from "react";
import LogIn from "./src/screens/LogIn";
import { MyStack } from "./routes/homestack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MyStack>
      <LogIn />
    </MyStack>
  );
}
