import React from 'react'
import {Image,View,StyleSheet,Text} from 'react-native'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'

export default function ProfileItem({image,name})
{
    return (
        <View style={style.container}>
            <Image style={style.image} source={image}></Image>
            <Text style={style.name}>{name}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginRight:15,
        alignItems:'center'
    },
    image:{
        width:wp('18.6'),
        height:wp('18.6'),
        borderRadius:8
    },
    name:{
        fontFamily:'SFProDisplay-Semibold',
        color:'#424347',
        fontSize:RFValue(10,580),
        marginTop:8
    }
})