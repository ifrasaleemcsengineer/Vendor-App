import { View, Text, TouchableOpacity, Button} from 'react-native'
import React, { useEffect, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { windowHeight } from '../../src/utils/Dimensions'
import { windowWidth } from '../../src/utils/Dimensions'
import Weight from 'react-native-vector-icons/FontAwesome5'
import Battery from 'react-native-vector-icons/Entypo'
import Cylinder from 'react-native-vector-icons/MaterialCommunityIcons'
import Users from './Users'
import Refuel from './Refuel'
import Device1 from "../screens/Device1";
import UserDevicesTable from '../components/DeviceTable'
import Devices from './Devices'
import { useNavigation } from '@react-navigation/native'
import SearchBar from "../components/SearchBar";
import { ScrollView } from 'react-native-gesture-handler';

const Item = ({ userId, status }) => {
  const index = 0;
  function _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      <Text style={styles.text}>{userId}</Text>
      <Text style={styles.text}>{status}</Text>
      
      
      <TouchableOpacity onPress={() => navigation.navigate(Device1)}>
      <View style={styles.btn}>
          <Text style={styles.btnText}>Vi</Text>
        </View>
      </TouchableOpacity>
      </View>
  );
};

const User1 = ({navigation}) => {
  const nav = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();
  const data = [
    {
      userId: "01",
      status: "Assigned",
    },
    {
      userId: "02",
      status: "UnAssigned",
    },
    {
      userId: "03",
      status: "Assigned",
    },
    {
      userId: "04",
      status: "UnAssigned",
    },
    {
      userId: "055",
      status: "Assigned",
    },
    {
      userId: "055",
      status: "Assigned",
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
    <SafeAreaView style={{
        height: windowHeight,
        width: windowWidth,
        flex: 1,
      }}>
        <View style={{
          flex: 1,
          backgroundColor: 'lightgray',
        }}>
          <View style={{
            backgroundColor: "orange",
            height: "20%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}>
            <View style={{
              //flexDirection: 'row',
              //justifyContent: 'space-between',
              marginTop: 20,
            }}>
              <TouchableOpacity
                onPress={()=> navigation.navigate(Users)}
              >
                <AntDesign name='back' size={30} color='#FFF' />
              </TouchableOpacity>
              <View style={{
                //width:'100%',
                marginTop: 0,
                alignItems: 'center',
              }}>
                <Text style={{
                  fontSize: 28,
                  color: "#FFF",
                  fontWeight: "bold",
                }}>User1</Text>
              </View>
            </View>
          </View>
          <View style={{
            height:windowHeight - 500,
            width:windowWidth,
            marginTop:10,
            backgroundColor:'#FFF',
            
          }}>
            
<Text style={{
    fontSize:20,
    marginLeft: 10,
    marginTop: 10,
    textAlign: "center",

}}>
  
    User Information
    </Text>
    <View style={{
      marginLeft: 10,
      fontSize:20,
      marginTop: 10,
      paddingBottom: 5,
      
    }}>
    <Text>Name:</Text>
    <Text>Email:</Text>
    <Text>Phone Number:</Text>
    <Text>No of Devices:</Text>
    </View>
          </View>
          <View
        style={{
          flex: 1,
          backgroundColor: "lightgray",
        }}
      >
        <View
          style={{
            marginTop: 25,
            height: "10%",
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
            
            <View
              style={{
                //width:'100%',
                marginTop: -53,
                alignItems: "center",
              }}
            >
              
            </View>
          </View>
        </View>

        

        <View
          style={{
            alignSelf: "center",
            marginTop: -53,
          }}
        >
          <UserDevicesTable
            
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />
         
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
      >
       </View>
      </View>
      
          </SafeAreaView>
  )
}

export default User1