import { View, Text,  ScrollView, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import {windowHeight} from '../../src/utils/Dimensions'
import {windowWidth} from '../../src/utils/Dimensions'

export default function PrivacyPolicy() {
  const nav = useNavigation();
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
              }}>Privacy Policy</Text>
            </View>
          </View>
        </View>
        <ScrollView vertical
          showsVerticalScrollIndicator={false} >
          <View style={{
            marginTop: 0,
            height: windowHeight,
            padding: 10,
          }}>
            <Text style={{
              fontSize: 18,
              color: '#fff'
            }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
              Aldus PageMaker including versions of Lorem Ipsum.
              It is a long established fact that a reader will be distracted by the readable content of a page 
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
              distribution of letters, as opposed to using 'Content here, content here', making it look like 
              readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
              their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
              their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}