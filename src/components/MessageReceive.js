import React from 'react'
import {View,StyleSheet,Image,Text} from 'react-native'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import IonIcons from 'react-native-vector-icons/Ionicons'
export default function MessageReceive({profile,time,message})
{
    return (
        <View style={style.container}>
            <Image source={profile} style={style.profile}></Image>
            <View style={{marginLeft:10}}>
                <Text style={style.message}>{message}</Text>
                <View style={style.done}>
                    <IonIcons name="checkmark-done" color="black" size={RFValue(13,500)}></IonIcons>                
                    <Text style={style.time}>{time}</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        marginTop:16
    },
    message:{
        maxWidth:wp('70'),
        backgroundColor:'#DFDEDE',
        paddingLeft:25,
        paddingRight:25,
        paddingTop:15,
        paddingBottom:15,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        fontFamily:'SFProDisplay-Regular',
        fontSize:RFValue(15,500),
        color:'#424347'
    },
    done:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    time:{
        fontSize:RFValue(9,500),
        fontFamily:'SFProDisplay-Regular',
        color:'#BBB',
        marginLeft:5
    },
    profile:{
        width:wp('10.6'),
        height:wp('10.6'),
        borderRadius:wp('2.1')
    }
})