import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { windowHeight } from '../../src/utils/Dimensions'
import { windowWidth } from '../../src/utils/Dimensions'
import PaymentForm from './PaymentForm'
import PayInfoTable from '../components/PayInfoTable'

const PaymentInfo = ({ navigation }) => {
  const nav = useNavigation();

  const onButtonPressed = () => {
    Alert.alert('Button Pressed');
  }
  return (
    <SafeAreaView style={{
      height: windowHeight,
      width: windowWidth,
      flex: 1,
    }}>
      <View style={{
        flex: 1,
        backgroundColor: 'lightgray'
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
              onPress={() => nav.openDrawer()}
            >
              <AntDesign name='bars' size={30} color='#FFF' />
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
              }}>Payment Info</Text>
            </View>
          </View>
        </View>

        <View style={{
              alignSelf: 'center',
              //paddingTop: 50,
            }}>
              <PayInfoTable />
            </View>

        <View style={{
          position: 'absolute',
          width: 100,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
          right: 0,
          bottom: 0,
        }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(PaymentForm)}
          >
            <Ionicons name='add-circle' size={80} color='orange' />
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default PaymentInfo