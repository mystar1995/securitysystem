import React from 'react'
import {View,StyleSheet,TouchableOpacity,Image,Text} from 'react-native'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import Entypo from 'react-native-vector-icons/Entypo'
export default function AlarmDetail({navigation})
{
    return (
        <View style={style.container}>
            <View>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Entypo name="chevron-left" size={RFValue(24,580)} color="#2F2F2F"></Entypo>
                </TouchableOpacity>
            </View>
            <View style={style.content}>
                <Image source={require('../assets/images/image1.png')} style={style.image}></Image>
                <View style={style.alarmcontent}>
                    <Text style={style.title}>Living Room</Text>
                    <Text style={style.action}>Detect Motion</Text>
                    <Text style={style.time}>05/20/2021 - 12:12:30</Text>
                </View>
                <View style={style.actioncontainer}>
                    <TouchableOpacity style={[style.btnitem,{backgroundColor:'black'}]}>
                        <Text style={style.btntext}>Close Alarm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.btnitem,{backgroundColor:'#E50914'}]}>
                        <Text style={style.btntext}>View Camera</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        padding:13,
        flex:1,
        backgroundColor:'white'
    },
    content:{
        marginTop:35,
        display:'flex',
        flexDirection:'column',
        flex:1
    },
    image:{
        width:wp('100') - 26,
        height:wp('80')
    },
    alarmcontent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:RFValue(20,580),
        color:'black',
        fontFamily:'Avenir Medium'
    },
    action:{
        color:'#E50914',
        fontSize:RFValue(15,580),
        fontFamily:'Avenir Medium',
        marginTop:10
    },
    time:{
        fontFamily:'AvenirLTStd-Book',
        color:'#979797',
        fontSize:RFValue(14,580),
        marginTop:10
    },
    actioncontainer:{
        display:'flex',
        flexDirection:'row',
        marginLeft:23,
        marginRight:23
    },
    btnitem:{
        flex:1,
        padding:11,
        justifyContent:'center',
        alignItems:'center'
    },
    btntext:{
        color:'white',
        fontSize:RFValue(15,580),
        fontFamily:'Avenir Medium'
    }
})