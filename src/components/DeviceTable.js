import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import VendorDevice1 from "../screens/VendorDevice1";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const Item = ({ DeviceId, status, index }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.row} key={index}>
      <Text style={styles.text}>{DeviceId}</Text>
      <Text style={styles.text}>{status}</Text>

      <TouchableOpacity onPress={() => navigation.navigate(VendorDevice1)}>
        <View style={{ marginLeft: 30 }}>
          <FontAwesome5Icon name="angle-right" size={25} color="orange" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const DeviceTable = ({ searchPhrase, setClicked, data }) => {
  const tableHead = ["DeviceId", "Status", "Action"];
  const renderItem = ({ item ,index}) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item DeviceId={item.DeviceId} status={item.status} index={index} />;
    }
    // filter of the DeviceId
    if (
      item.DeviceId
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item DeviceId={item.DeviceId} status={item.status} index={index}/>;
    }
    // filter of the description
    if (
      item.status
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item DeviceId={item.DeviceId} status={item.status}index={index} />;
    }
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
    width: 70,
    marginLeft: 25,
    marginRight: 20,
  },
  view: {
    height: 0,
  },
  text: {
    width: 75,
    margin: 8,
    marginLeft: 24,
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

export default DeviceTable;
