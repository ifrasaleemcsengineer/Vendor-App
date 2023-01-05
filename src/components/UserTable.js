import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import User1 from "../screens/User1";
import { FlatList } from "react-native-gesture-handler";
import UpdateUser from "../screens/UpdateUser";
import Assign from "../screens/Assign";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const Item = ({ userId, name }) => {
  const index = 0;
  function _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      <Text style={styles.text}>{userId}</Text>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.navigate(Assign)}>
          <View style={styles.icon}>
            <FontAwesome5Icon name="plus" size={20} color="orange" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(UpdateUser)}>
          <View style={styles.icon}>
            <FontAwesome5Icon name="pen" size={20} color="orange" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(User1)}>
          <View style={styles.icon}>
            <FontAwesome5Icon name="angle-right" size={20} color="orange" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const UserTable = ({ searchPhrase, setClicked, data }) => {
  const tableHead = ["UID", "Name", "Action"];
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item userId={item.userId} name={item.name} />;
    }
    // filter of the userId
    if (
      item.userId
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item userId={item.userId} name={item.name} />;
    }
    // filter of the description
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item userId={item.userId} name={item.name} />;
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
    marginLeft: 4,
    marginRight: 20,
  },
  view: {
    height: 0,
  },
  text: {
    width: 75,
    margin: 8,
    marginLeft: 10,
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
  icon: {
    margin: 5,
    marginLeft: 18,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
});

export default UserTable;
