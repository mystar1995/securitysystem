import React from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
export default function MessageItem({image,title,description,time,navigation})
{
    return (
        <TouchableOpacity style={style.container} onPress={()=>navigation.navigate('Chating')}>
            <Image source={image} style={style.profile}></Image>
            <View style={{flex:1,marginLeft:15,marginRight:15}}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.description} numberOfLines={1}>{description}</Text>
            </View>
            <Text style={style.time}>{time}</Text>
        </TouchableOpacity>
    )
} 

const style = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        paddingBottom:9,
        paddingTop:9,
        borderBottomColor:'#D8D8D8',
        borderBottomWidth:1
    },
    profile:{
        width:wp('16'),
        height:wp('16'),
        borderRadius:8
    },
    title:{
        fontFamily:'SFProDisplay-Semibold',
        color:'#424347',
        fontSize:RFValue(14,580)
    },
    description:{
        fontFamily:'SFProDisplay-Regular',
        color:'#BBBBBB',
        fontSize:RFValue(13,580),
        marginTop:10
    },
    time:{
        fontFamily:'SFProDisplay-Regular',
        color:'#BBBBBB',
        fontSize:RFValue(9,580)
    }
})