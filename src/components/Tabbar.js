import React from 'react'
import {SafeAreaView,View,StyleSheet,TouchableOpacity} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Tabbar({navigation,state})
{
    const {index} = state
    console.log('index',index)
    return (
        <SafeAreaView>
            <View style={style.container}>
                <TouchableOpacity style={style.buttonitem} onPress={()=>navigation.navigate('Dashboard')}>
                    <Feather name="home" color={(index == 0 || index == 1)?"black":"#BABABA"} size={32}></Feather>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonitem} onPress={()=>navigation.navigate('Notification')}>
                    <MaterialCommunityIcons name="bell-ring-outline" color={index == 2?"black":"#BABABA"} size={32}></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonitem} onPress={()=>navigation.navigate('Directive')}>
                    <Feather name="folder" color={index == 3?"black":"#BABABA"} size={32}></Feather>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonitem} onPress={()=>navigation.navigate('Chat')}>
                    <AntDesign name="message1" color={index == 4?"black":"#BABABA"} size={32}></AntDesign>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonitem} onPress={()=>navigation.navigate('Setting')}>
                    <AntDesign name="setting" color={index == 5?"black":"#BABABA"} size={32}></AntDesign>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        height:68,
        backgroundColor:'white',
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
        shadowColor:'rgba(0, 0, 0, 0.1)',
        shadowRadius:20,
        shadowOffset:{
            width:0,
            height:-2
        },
        elevation:3
    },
    buttonitem:{
        flex:1,
        alignItems:'center'
    }
})