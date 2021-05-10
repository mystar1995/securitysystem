import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import IonIcons from 'react-native-vector-icons/Ionicons'

export default function MessageSent({message,time})
{
    return (
        <View style={style.container}>
            <Text style={style.message}>{message}</Text>
            <View style={style.done}>
                <IonIcons name="checkmark-done" color="black" size={RFValue(13,500)}></IonIcons>                
                <Text style={style.time}>{time}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        alignItems:'flex-end',
        marginTop:16
    },
    message:{
        maxWidth:wp('70'),
        backgroundColor:'black',
        paddingLeft:25,
        paddingRight:25,
        paddingTop:15,
        paddingBottom:15,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        fontFamily:'SFProDisplay-Regular',
        fontSize:RFValue(15,500),
        color:'white'
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
    }
})