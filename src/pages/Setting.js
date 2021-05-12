import React from 'react'
import {View,ScrollView,StyleSheet, TouchableOpacity,Switch,Text,Image} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Setting({navigation})
{
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.profiletext}>SETTING</Text>
                <Image source={require('../assets/images/profile.png')} style={{width:32,height:32}}></Image>
            </View>
            <View style={style.divider}></View>
            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={style.title}>Camera Management</Text>
                    <View style={[style.itemcontainer,{borderBottomColor:'#DADADA',borderBottomWidth:1}]}>
                        <Text style={style.itemtitle}>Add Device</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddDevice')}>
                            <AntDesign name="right" size={RFValue(16,500)} color="black"></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <View style={style.itemcontainer}>
                        <Text style={style.itemtitle}>Edit Device</Text>
                        <TouchableOpacity>
                            <AntDesign name="right" size={RFValue(16,500)} color="black"></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <Text style={style.title}>App Management</Text>
                    <View style={[style.itemcontainer,{borderBottomColor:'#DADADA',borderBottomWidth:1}]}>
                        <Text style={style.itemtitle}>Notification</Text>
                        <TouchableOpacity>
                            <AntDesign name="right" size={RFValue(16,500)} color="black"></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <View style={style.itemcontainer}>
                        <Text style={style.itemtitle}>MemberShip</Text>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <Text style={style.value}>Active</Text>
                            <TouchableOpacity style={{marginLeft:15}} onPress={()=>navigation.navigate('MemberShip')}>
                                <AntDesign name="right" size={RFValue(16,500)} color="black"></AntDesign>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.itemcontainer}>
                        <Text style={style.itemtitle}>App Connect</Text>
                        <Switch trackColor={{true:"#1FCC79"}} thumbColor="#1FCC79" value={true}/>
                    </View>
                    <Text style={[style.title,{marginTop:41}]}>Other</Text>
                    <View style={[style.itemcontainer,{borderBottomColor:'#DADADA',borderBottomWidth:1}]}>
                        <Text style={style.itemtitle}>Download</Text>
                        <Switch trackColor={{true:"#1FCC79"}} thumbColor="#1FCC79" value={true}/>
                    </View>
                    <View style={[style.itemcontainer,{borderBottomColor:'#DADADA',borderBottomWidth:1}]}>
                        <Text style={style.itemtitle}>Motion Detect</Text>
                        <Switch trackColor={{true:"#1FCC79"}} thumbColor="#1FCC79" value={true}/>
                    </View>
                    <View style={style.itemcontainer}>
                        <Text style={style.itemtitle}>Wi-fi</Text>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <Text style={style.value}>Home</Text>
                            <TouchableOpacity style={{marginLeft:15}}>
                                <AntDesign name="right" size={RFValue(16,500)} color="black"></AntDesign>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FBFBFB',
        padding:19
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    profiletext:{
        fontSize:RFValue(18,500),
        color:'black',
        fontFamily:'Avenir Medium',
        fontWeight:'500'
    },
    divider:{
        width:22,
        borderBottomColor:'black',
        borderBottomWidth:2,
        marginTop:12
    },
    title:{
        marginTop:19,
        marginBottom:12,
        color:'#979797',
        fontSize:RFValue(14,500),
        fontFamily:'AvenirLTStd-Book'
    },
    itemcontainer:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:25,
        paddingRight:15,
        paddingTop:15,
        paddingBottom:15
    },
    itemtitle:{
        fontFamily:'Avenir Heavy',
        fontSize:RFValue(15,500),
        color:'black'
    },
    value:{
        color:'#BABABA',
        fontSize:RFValue(15,500),
        fontFamily:'Avenir Heavy'
    }
})