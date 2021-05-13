import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity,Image} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'

export default function LiveCameraItem({title,image,navigation})
{
    return (
        <TouchableOpacity style={{marginBottom:26}} onPress={()=>navigation.navigate("CameraDetail")}>
            <View style={style.header}>
                <Text style={style.title}>{title}</Text>
                <TouchableOpacity style={style.badge}></TouchableOpacity>
            </View>
            <Image source={image} style={style.image}></Image>
            <View style={style.btncontainer}>
                <TouchableOpacity style={[style.btn,{borderRightColor:'#979797',borderRightWidth:1}]}>
                    <Text style={style.btntext}>Motion Detection On</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btn}>
                    <Text style={[style.btntext,{color:'#FFFFFF80'}]}>Motion Detection Off</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    title:{
        fontSize:RFValue(18,580),
        color:'black',
        fontFamily:'AvenirLTStd-Book'
    },
    header:{
        display:'flex',
        marginBottom:7,
        flexDirection:'row',
        marginLeft:13
    },  
    badge:{
        width:RFValue(7,580),
        height:RFValue(7,580),
        borderRadius:7,
        backgroundColor:'#26F35D',
        marginLeft:3
    },
    image:{
        height:wp('62.4'),
        width:wp('100') - 26
    },
    btncontainer:{
        display:'flex',
        width:wp('100')-26,
        position:'absolute',
        height:36,
        backgroundColor:'#00000066',
        flexDirection:'row',
        bottom:0
    },
    btn:{
        flex:1,
        display:'flex',
        alignItems:'center',
        height:36,
        justifyContent:'center'
    },
    btntext:{
        fontFamily:'AvenirLTStd-Book',
        color:'white',
        fontSize:RFValue(12,580)
    }
})