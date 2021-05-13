import React from 'react'
import {View,StyleSheet,TouchableOpacity,Text,Image, TextInput} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Feather from 'react-native-vector-icons/Feather'
import ChatContent from '../components/ChatContent'

export default function Charting({navigation})
{
    const messages = [
        {message:"Hey Honny, I need your help",time:'16:01',sent:true},
        {message:"What do you need help with?",time:'16:04',profile:require('../assets/images/profile1.png'),received:true},
        {message:"Honny Where are you now? \n Anything else at home?",time:'16:07',sent:true}
    ]   
    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.headerleft}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Entypo name="chevron-left" size={RFValue(24,580)} color="#424347"></Entypo>
                    </TouchableOpacity>
                    <Image source={require('../assets/images/profile1.png')} style={{width:wp('8'),height:wp('8'),borderRadius:6}}></Image>
                    <Text style={style.title}>Kristin</Text>
                </View>
                <TouchableOpacity>
                    <Feather name="more-horizontal" color="#424347" size={RFValue(24,580)}></Feather>
                </TouchableOpacity>
            </View>
            <View style={style.content}>
                <ChatContent data={messages}></ChatContent>
                <View style={style.inputcontainer}>
                    <TouchableOpacity>
                        <Entypo name="attachment" size={RFValue(20,580)} color="black"></Entypo>
                    </TouchableOpacity>
                    <TextInput style={style.input} placeholder="Type your message" placeholderTextColor="#BBB"></TextInput>
                    <TouchableOpacity>
                        <Feather name="send" size={RFValue(20,580)} color="black"></Feather>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:13,
        paddingBottom:13,
        backgroundColor:'white'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:14,
        paddingRight:14,
        paddingTop:7,
        paddingBottom:7,
        shadowColor:'rgba(0, 0, 0, 0.1)',
        shadowOffset:{
            width:0,
            height:0
        },
        shadowRadius:15,
        borderBottomColor:'rgba(0, 0, 0, 0.1)',
        borderBottomWidth:1
    },
    headerleft:{
        display:'flex',
        flexDirection:'row'
    },
    title:{
        fontFamily:'SFProDisplay-Semibold',
        color:'#424347',
        fontSize:RFValue(15,580),
        marginLeft:10,
        fontWeight:'600'
    },
    content:{
        padding:19,
        flex:1
    },
    inputcontainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        backgroundColor:'#DFDEDE4C',
        borderRadius:20,
        paddingLeft:17,
        paddingRight:17,
        paddingTop:9,
        paddingBottom:9,
        flex:1,
        fontFamily:'SFProDisplay-Regular',
        color:'black',
        marginLeft:9,
        marginRight:9,
        fontSize:RFValue(13,580)
    }
})