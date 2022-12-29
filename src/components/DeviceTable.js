import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import Device1 from "../screens/Device1";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const Item = ({ userId, status }) => {
  const index = 0;
  function _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{userId}</Text>
      <Text style={styles.text}>{status}</Text>
      <TouchableOpacity onPress={() => _alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Refill</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const DeviceTable = ({ searchPhrase, setClicked, data }) => {
  const tableHead = ["UID", "Status", "Refuel"];
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item userId={item.userId} status={item.status} />;
    }
    // filter of the userId
    if (
      item.userId
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item userId={item.userId} status={item.status} />;
    }
    // filter of the description
    if (
      item.status
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item userId={item.userId} status={item.status} />;
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
          <TouchableOpacity onPress={() => navigation.navigate(Device1)}>
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
          </TouchableOpacity>
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
    backgroundColor: "#808B97",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headtext: {
    width: 70,
    marginLeft: 40,
    marginRight: 20,
  },
  view: {
    height: 0,
  },
  text: {
    width: 75,
    margin: 8,
    marginLeft: 30,
    marginRight: 20,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "lightgray",
  },

  btn: {
    width: 60,
    height: 20,
    backgroundColor: "#78B7BB",
    borderRadius: 2,
    margin: 8,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
});

export default DeviceTable;
