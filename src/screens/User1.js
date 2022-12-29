import { View, Text, TouchableOpacity, Button} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { windowHeight } from '../../src/utils/Dimensions'
import { windowWidth } from '../../src/utils/Dimensions'
import Weight from 'react-native-vector-icons/FontAwesome5'
import Battery from 'react-native-vector-icons/Entypo'
import Cylinder from 'react-native-vector-icons/MaterialCommunityIcons'
import Users from './Users'
import Refuel from './Refuel'

const User1 = ({navigation}) => {
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
            alignItems:'center',
            justifyContent:'center',
          }}>
<Text style={{
    fontSize:20
}}>
    Map Of the User
    </Text>
          </View>

          <View style={{
            height:windowHeight - 480,
            width:windowWidth,
            marginTop:10,
            //backgroundColor:'#FFF',
          }}>
            <View style={{
            width: 160,
            height: 135,
            backgroundColor: "#E6E6E6",
            marginTop:5,
            marginLeft:10,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly'
          }}>
            <Weight 
            name='weight' size={40} color='orange'
          />
          <Text style={{
            fontSize:26,
            color:'orange',
            fontWeight:'bold',
          }}>
            5 KG
          </Text>
          </View>
          <View style={{
            width: 160,
            height: 135,
            backgroundColor: "#E6E6E6",
            marginLeft:190,
            marginTop:-135,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly'
          }}>
            <Battery 
            name='battery' size={40} color='orange'
          />
          <Text style={{
            fontSize:26,
            color:'orange',
            fontWeight:'bold',
        
          }}>
            80%
          </Text>
          </View>

          <View style={{
            height:100,
            width:340,
            marginTop:5,
            marginLeft:10,
            backgroundColor:'#E6E6E6',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly'
          }}>
            <Cylinder 
            name='battery' size={40} color='orange'
          />
          <Text style={{
            fontSize:26,
            color:'orange',
            fontWeight:'bold',
        
          }}>
            Good Status
          </Text>
          </View>
          </View>
          <View style={{
                        //width: windowWidth-200,
                        marginLeft:10,
                        marginRight:10,
                        marginTop:25,
                    }}>
                        <Button
                            onPress={()=> navigation.navigate(Refuel)}
                            title="Refuel"
                            color="orange"
                        />
                        </View>
          </View>
          </SafeAreaView>
  )
}

export default User1