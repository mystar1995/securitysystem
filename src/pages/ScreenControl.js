import React from 'react'
import {View,StyleSheet,SafeAreaView,TouchableOpacity,Text,Image,ScrollView} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Entypo from 'react-native-vector-icons/Entypo'
import Slider from '@react-native-community/slider'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import IonIcons from 'react-native-vector-icons/Ionicons'

export default function ScreenControl({navigation})
{
    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <View style={style.headerleft}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Entypo name="chevron-left" size={RFValue(24,580)} color="#2F2F2F"></Entypo>
                    </TouchableOpacity>
                    <Text style={style.title}>Screen Control</Text>
                </View>
            </View>
            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                <View style={style.content}>
                    <View>
                        <Image source={require('../assets/images/image1.png')} style={style.cameracontent}></Image>
                        <TouchableOpacity style={[style.btndirection,{top:0,left:wp('50') - 33,width:40,height:30}]}>
                            <Entypo name="chevron-thin-up" size={32} color="white"></Entypo>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.btndirection,{left:0,top:wp('40') - 42,width:30,height:40}]}>
                            <Entypo name="chevron-thin-left" size={32} color="white"></Entypo>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.btndirection,{right:0,top:wp('40') - 42,width:30,height:40}]}>
                            <Entypo name="chevron-thin-right" size={32} color="white"></Entypo>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.btndirection,{bottom:45,left:wp('50') - 33,width:40,height:30}]}>
                            <Entypo name="chevron-thin-down" size={32} color="white"></Entypo>
                        </TouchableOpacity>
                        <View style={style.camerabottom}>
                            <View style={{flex:1,alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/icons/ArrowsInLineVertical.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/icons/ArrowsOutLineHorizontal.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/icons/ArrowsOutSimple.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/icons/ArrowsInSimple.png')}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[style.actioncontainer,{marginTop:42}]}>
                        <Text style={style.actiontext}>Bright</Text>
                        <Slider
                            style={{flex:1,height:32}}
                            thumbTintColor="#E50914"
                            value={0}
                            minimumValue={-10}
                            maximumValue={10}
                            maximumTrackTintColor="#DADADA"
                            minimumTrackTintColor="#DADADA"
                        ></Slider>
                        <TouchableOpacity>
                            <IonIcons name="refresh" color="#2F2F2F" size={RFValue(20,580)}></IonIcons>
                        </TouchableOpacity>
                    </View>
                    <View style={[style.actioncontainer,{marginTop:42}]}>
                        <Text style={style.actiontext}>Contrast</Text>
                        <Slider
                            style={{flex:1,height:32}}
                            thumbTintColor="#E50914"
                            value={0}
                            minimumValue={-10}
                            maximumValue={10}
                            maximumTrackTintColor="#DADADA"
                            minimumTrackTintColor="#DADADA"
                        ></Slider>
                        <TouchableOpacity>
                            <IonIcons name="refresh" color="#2F2F2F" size={RFValue(20,580)}></IonIcons>
                        </TouchableOpacity>
                    </View>
                    <View style={[style.actioncontainer,{marginTop:60}]}>
                        <View style={style.actionitem}>
                            <TouchableOpacity>
                                <Image source={require('../assets/icons/SunDim.png')} style={{width:32,height:32}}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={style.actionitem}>
                            <TouchableOpacity>
                                <Image source={require('../assets/icons/PictureInPicture.png')} style={{width:32,height:32}}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={style.actionitem}>
                            <TouchableOpacity>
                                <Image source={require('../assets/icons/ArrowsInLineHorizontal.png')} style={{width:32,height:32}}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={style.actionitem}>
                            <TouchableOpacity>
                                <Image source={require('../assets/icons/Moon.png')} style={{width:32,height:32}}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={[style.btncontainer,{marginTop:60,marginBottom:60}]} onPress={()=>navigation.navigate('Dashboard')}>
                        <Text style={style.btntext}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        padding:13,
        flex:1,
        backgroundColor:'white'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerleft:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        fontSize:RFValue(18,580),
        color:'#2F2F2F',
        fontWeight:'500',
        fontFamily:'Avenir Medium',
        marginLeft:6
    },
    content:{
        paddingTop:33
    },
    actioncontainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    actionitem:{
        flex:1,
        alignItems:'center'
    },
    actiontext:{
        marginTop:6,
        fontFamily:'Avenir Medium',
        fontSize:RFValue(12,580),
        color:'#2F2F2F'
    },
    cameracontent:{
        width:wp('100')-26,
        height:wp('80')
    },
    btndirection:{
        position:'absolute',
        backgroundColor:'#2F2F2F66',
        justifyContent:'center',
        alignItems:'center'
    },
    camerabottom:{
        display:'flex',
        flexDirection:'row',
        height:45,
        width:wp('100')-26,
        backgroundColor:'#2F2F2FCC',
        position:'absolute',
        bottom:0,
        alignItems:'center'
    },
    btncontainer:{
        backgroundColor:'#E50914',
        padding:11,
        flexDirection:'row',
        justifyContent:'center'
    },
    btntext:{
        fontFamily:'Avenir Medium',
        fontSize:RFValue(15,580),
        color:'white'
    }
})