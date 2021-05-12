import React from 'react'
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import {RFValue} from 'react-native-responsive-fontsize'

import AntDesign from 'react-native-vector-icons/AntDesign'
export default function MemberShip({navigation})
{
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity style={{marginRight:6}} onPress={()=>navigation.goBack()}>
                    <Entypo name="chevron-left" color="#2F2F2F" size={RFValue(24,500)}></Entypo>
                </TouchableOpacity>
                <Text style={style.title}>Add Device</Text>
            </View>
            <View style={{flex:1}}>
                <View style={style.content}>
                    <View style={style.itemcontainer}>
                        <Text style={style.itemtitle}>Basic</Text>
                        <Text style={style.itemtitle}>Free</Text>
                    </View>
                    <View style={style.itemcontainer}>
                        <View>
                            <Text style={style.itemdescription}>Traial 20 days {'\n'}Remaining</Text>
                        </View>
                        <TouchableOpacity style={style.done}>
                            <AntDesign name="check" color="white" size={RFValue(24,500)}></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <View style={[style.itemcontainer,{marginTop:20}]}>
                        <Text style={style.itemtitle}>Essential</Text>
                        <Text style={style.itemtitle}>$50</Text>
                    </View>
                    <View style={style.itemcontainer}>
                        <View>
                            <Text style={style.itemdescription}>1 Month</Text>
                            <Text style={[style.itemdescription,{color:'#E50914'}]}>Most Popular</Text>
                        </View>
                        <TouchableOpacity style={style.done}>
                            
                        </TouchableOpacity>
                    </View>
                    <View style={[style.itemcontainer,{marginTop:20}]}>
                        <Text style={style.itemtitle}>Premium</Text>
                        <Text style={style.itemtitle}>$20/month</Text>
                    </View>
                    <View style={style.itemcontainer}>
                        <View>
                            <Text style={style.itemdescription}>12 Month</Text>
                            <Text style={[style.itemdescription,{color:'#E50914'}]}>Most Popular</Text>
                        </View>
                        <TouchableOpacity style={style.done}>
                            
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:13,
        backgroundColor:'#FBFBFB'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        fontSize:RFValue(18,500),
        color:'#2F2F2F',
        fontFamily:'Avenir Medium'
    },
    content:{
        backgroundColor:'white',
        marginLeft:12,
        marginRight:12,
        marginTop:38,
        padding:26
    },
    itemcontainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:12
    },
    itemtitle:{
        fontFamily:'Avenir Heavy',
        color:'black',
        fontSize:RFValue(20,500)
    },
    itemdescription:{
        fontFamily:'AvenirLTStd-Roman',
        color:'black',
        fontSize:RFValue(13,500),
        lineHeight:RFValue(20,500)
    },
    done:{
        width:RFValue(30,500),
        height:RFValue(30,500),
        borderRadius:RFValue(15,500),
        backgroundColor:'#E50914',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginRight:5
    },
    btntext:{
        fontSize:RFValue(18,500),
        color:'white',
        fontFamily:'Avenir Heavy'
    },
    btncontainer:{
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        padding:11
    }
})