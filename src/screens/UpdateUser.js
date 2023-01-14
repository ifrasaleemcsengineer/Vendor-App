import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import AntDesign from "react-native-vector-icons/AntDesign";
import Users from "./Users";

const UpdateUser = ({ navigation }) => {
  const [name, setName] = useState("");
  const [devicesno, setDevicesNo] = useState("");

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
            <TouchableOpacity onPress={() => navigation.navigate(Users)}>
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
                Update User
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
            value={name}
            onChangeText={setName}
            placeholder="Enter Name"
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
            value={devicesno}
            onChangeText={setDevicesNo}
            placeholder="Enter Devices No."
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
            margin: 20,
            flex: 1,
            flexDirection: "row",
            height: 2,
            justifyContent: "space-around",
          }}
        >
            <TouchableOpacity onPress={""}>
            <Text
              style={{
                backgroundColor: "orange",
                width: 100,
                marginRight: 20,
                height: 40,
                textAlign: "center",
                paddingTop: 10,
                color: "white",
                borderRadius: 5,
              }}
            >
              Update
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={""}>
            <Text
              style={{
                backgroundColor: "orange",
                width: 100,
                height: 40,
                textAlign: "center",
                paddingTop: 10,
                color: "white",
                borderRadius: 5,
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default UpdateUser;
