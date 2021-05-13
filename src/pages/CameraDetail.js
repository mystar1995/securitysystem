import React from 'react'
import {View,StyleSheet,SafeAreaView,TouchableOpacity,Text,Image,ScrollView} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import IonIcons from 'react-native-vector-icons/Ionicons'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'

export default function CameraDetail({navigation})
{
    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <View style={style.headerleft}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Entypo name="chevron-left" size={RFValue(24,580)} color="#2F2F2F"></Entypo>
                    </TouchableOpacity>
                    <Text style={style.title}>Redroom</Text>
                </View>
                <View style={style.headerleft}>
                    <TouchableOpacity style={{marginRight:10}}>
                        <Image source={require('../assets/icons/square.png')} style={{width:32,height:32}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:10}}>
                        <Image source={require('../assets/icons/scan.png')} style={{width:32,height:32}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/close.png')} style={{width:32,height:32}}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                <View style={style.content}>
                    <View style={style.actioncontainer}>
                        <TouchableOpacity style={[style.actionitem,{borderRightWidth:1,borderRightColor:'#979797'}]}>
                            <IonIcons name="ios-location-outline" color="#2F2F2F" size={RFValue(32,580)}></IonIcons>
                            <Text style={style.actiontext}>Auto Location</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.actionitem} onPress={()=>navigation.navigate('ScreenControl')}>
                            <IonIcons name="image-outline" color="#2F2F2F" size={RFValue(32,580)}></IonIcons>
                            <Text style={style.actiontext}>Screen Control</Text>
                        </TouchableOpacity>
                    </View>
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
                    <View style={[style.actioncontainer,{marginTop:69,marginBottom:60}]}>
                        <TouchableOpacity style={[style.actionitem,{borderRightWidth:1,borderRightColor:'#979797'}]}>
                            <Image source={require('../assets/icons/Camera.png')} style={{width:32,height:32}}></Image>
                            <Text style={style.actiontext}>Capture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.actionitem,{borderRightWidth:1,borderRightColor:'#979797'}]}>
                            <Image source={require('../assets/icons/VideoCamera.png')} style={{width:32,height:32}}></Image>
                            <Text style={style.actiontext}>Record</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.actionitem,{borderRightWidth:1,borderRightColor:'#979797'}]}>
                            <Image source={require('../assets/icons/SpeakerSimpleHigh.png')} style={{width:32,height:32}}></Image>
                            <Text style={style.actiontext}>Sound On</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.actionitem}>
                            <Image source={require('../assets/icons/DownloadSimple.png')} style={{width:32,height:32}}></Image>
                            <Text style={style.actiontext}>Download</Text>
                        </TouchableOpacity>
                    </View>
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
        paddingTop:54
    },
    actioncontainer:{
        display:'flex',
        flexDirection:'row',
        marginBottom:20
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
    }
})