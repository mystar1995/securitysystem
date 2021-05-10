import React from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
export default function AlarmItem({title,image,action,time,navigation})
{
    return (
        <TouchableOpacity style={style.container} onPress={()=>navigation.navigate('AlarmDetail')}>
            <Image source={image} style={style.image}></Image>
            <View style={{marginLeft:15}}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.action}>{action}</Text>
                <Text style={style.time}>{time}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        padding:19,
        borderTopColor:'#DADADA',
        borderTopWidth:1,
        display:'flex',
        flexDirection:'row'
    },
    image:{
        width:wp('40'),
        height:wp('26.818')
    },
    title:{
        fontSize:RFValue(20,500),
        color:'black',
        fontFamily:'Avenir Medium'
    },
    action:{
        color:'#E50914',
        fontSize:RFValue(15,500),
        fontFamily:'Avenir Medium',
        marginTop:23
    },
    time:{
        fontFamily:'AvenirLTStd-Book',
        color:'#979797',
        fontSize:RFValue(14,500)
    }
})