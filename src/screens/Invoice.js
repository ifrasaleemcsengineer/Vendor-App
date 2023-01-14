import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { windowHeight } from "../../src/utils/Dimensions";
import { windowWidth } from "../../src/utils/Dimensions";
import AntDesign from "react-native-vector-icons/AntDesign";
import InvoiceTable from "../components/InvoiceTable";

const Invoice = ({ navigation }) => {
  const nav = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // Temporary data
  const data = [
    {
      Invoice_No: "01",
      status: "Assigned",
      Amount: 120,
    },
    {
      Invoice_No: "02",
      status: "Assigned",
      Amount: 120,
    },
    {
      Invoice_No: "03",
      status: "Assigned",
      Amount: 120,
    },
    {
      Invoice_No: "04",
      status: "Assigned",
      Amount: 120,
    },
    {
      Invoice_No: "05",
      status: "Assigned",
      Amount: 120,
    },
    {
      Invoice_No: "06",
      status: "Assigned",
      Amount: 120,
    },
  ];

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = () => {
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView
      style={{
        height: windowHeight,
        width: windowWidth,
        flex: 1,
      }}
    >
      {/* <ScrollView vertical showsVerticalScrollIndicator={false}> */}
      <View
        style={{
          flex: 1,
          backgroundColor: "lightgray",
        }}
      >
        <View
          style={{
            backgroundColor: "orange",
            height: "15%",
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
            <TouchableOpacity onPress={() => nav.openDrawer()}>
              <AntDesign name="bars" size={30} color="#FFF" />
            </TouchableOpacity>
            <View
              style={{
                //width:'100%',
                marginTop: -33,
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
                Invoices
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            alignSelf: "center",
          }}
        >
          <InvoiceTable data={fakeData} setClicked={setClicked} />
        </View>
      </View>
      {/* </ScrollView> */}
      <View
        style={{
          position: "absolute",
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          right: 0,
          bottom: 0,
        }}
      ></View>
    </SafeAreaView>
  );
};

export default Invoice;
