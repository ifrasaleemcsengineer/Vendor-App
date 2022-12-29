import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import AntDesign from "react-native-vector-icons/AntDesign";
import Devices from "./Devices";

const CreateDevice = ({ navigation }) => {
  const [devicesAmount, setDevicesAmount] = useState("");
  const [deviceid, setDeviceId] = useState("");

  return (
    <SafeAreaView
      style={{
        height: windowHeight,
        width: windowWidth,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "lightgray",
        }}
      >
        <View
          style={{
            backgroundColor: "orange",
            height: "20%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              //flexDirection: 'row',
              //justifyContent: 'space-between',
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate(Devices)}>
              <AntDesign name="back" size={30} color="#FFF" />
            </TouchableOpacity>
            <View
              style={{
                //width:'100%',
                paddingTop: 40,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 28,
                  color: "#FFF",
                  fontWeight: "bold",
                }}
              >
                Create Device
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            padding: 10,
          }}
        >
          <TextInput
            value={deviceid}
            onChangeText={setDeviceId}
            placeholder="Enter Device Id"
            style={{
              backgroundColor: "white",
              width: "100%",
              borderColor: "#e8e8e8",
              borderWidth: 4,
              borderRadius: 6,
              paddingHorizontal: 10,
              marginVertical: 12,
            }}
          />

          <TextInput
            value={devicesAmount}
            onChangeText={setDevicesAmount}
            placeholder="Enter Devices Amount"
            style={{
              backgroundColor: "white",
              width: "100%",
              borderColor: "#e8e8e8",
              borderWidth: 4,
              borderRadius: 6,
              paddingHorizontal: 10,
              marginVertical: 12,
            }}
          />

          <View
            style={{
              width: "50%",
            }}
          >
            <Button onPress={""} title="Create" color="orange" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateDevice;
