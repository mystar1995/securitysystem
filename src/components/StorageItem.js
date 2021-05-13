import React from 'react'
import {View,StyleSheet,Image,Text, TouchableOpacity} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
export default function StorageItem({image,title,time,status})
{
    return (
        <View style={style.container}>
            <Image source={image} style={style.image}></Image>
            <View style={{padding:5}}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.time}>{time}</Text>
            </View>
            <TouchableOpacity style={style.play}>
                <Image source={require('../assets/icons/circle.png')} style={{width:32,height:32}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={[style.icon,{backgroundColor:status == 'live'?'#26F35D':'#E50914'}]}></TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width:wp('50') - 26,
        padding:4,
        marginBottom:13
    },
    image:{
        width:wp('50') - 34,
        height:wp('33.8')
    },
    title:{
        fontFamily:'Avenir Heavy',
        color:'black',
        fontSize:RFValue(15,580)
    },
    time:{
        fontFamily:'AvenirLTStd-Book',
        color:'#979797',
        fontSize:RFValue(11,580),
        marginTop:5
    },
    play:{
        top:wp('16.9') - 16,
        left:wp('25') - 23,
        position:'absolute'
    },
    icon:{
        width:RFValue(8,580),
        height:RFValue(8,580),
        borderRadius:8,
        position:'absolute',
        top:16,
        right:16
    }
})