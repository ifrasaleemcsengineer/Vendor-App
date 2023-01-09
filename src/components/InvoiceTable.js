import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import VendorDevice1 from "../screens/VendorDevice1";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Invoice1 from "../screens/Invoice1";

const Item = ({ Invoice_No, status, Amount }) => {
  const index = 0;
  function _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      <Text style={styles.textId}>{Invoice_No}</Text>
      <Text style={styles.text}>{status}</Text>
      <Text style={styles.text}>{Amount}</Text>

      <TouchableOpacity onPress={() => navigation.navigate(Invoice1)}>
        <Text
          style={{
            backgroundColor: "orange",
            width: 50,
            height: 30,
            textAlign: "center",
            paddingTop: 5,
            color: "white",
            borderRadius: 5,
          }}
        >
          Invoice
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const InvoiceTable = ({ setClicked, data }) => {
  const tableHead = ["Invoice#", "Status", "Amount", "Action"];
  const renderItem = ({ item }) => {
    return (
      <Item
        Invoice_No={item.Invoice_No}
        status={item.status}
        Amount={item.Amount}
      />
    );
  };

  const navigation = useNavigation();

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <View style={styles.container}>
        <View
          onStartShouldSetResponder={() => {
            setClicked(false);
          }}
        >
          {/* <TouchableOpacity onPress={() => navigation.navigate("User1")}> */}
          <FlatList
            stickyHeaderIndices={[0]}
            ListHeaderComponent={
              <Table borderStyle={{ borderColor: "transparent" }}>
                <Row
                  data={tableHead}
                  style={styles.head}
                  textStyle={styles.headtext}
                />
              </Table>
            }
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<View />}
          />
          {/* </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
  },
  head: {
    height: 70,
    backgroundColor: "#D9DDDC",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headtext: {
    width: windowWidth - 300,
    marginLeft: 25,
    marginRight: 20,
  },
  view: {
    height: 0,
  },
  text: {
    width: windowWidth - 300,
    margin: 8,
    marginLeft: 15,
    marginRight: 20,
  },
  textId: {
    width: windowWidth - 300,
    margin: 8,
    marginLeft: 15,
    paddingLeft: 25,
    marginRight: 20,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "lightgray",
  },

  btn: {
    width: 60,
    height: 20,
    backgroundColor: "rgb(255, 177, 33)",
    borderRadius: 2,
    margin: 4,
    marginTop: 8,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
});

export default InvoiceTable;
