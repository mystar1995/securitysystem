import React,{useState} from 'react'
import {View,StyleSheet,TouchableOpacity,Text,SafeAreaView,TextInput,Image,ScrollView} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import {RFValue} from 'react-native-responsive-fontsize'
import Fontiso from 'react-native-vector-icons/Fontisto'
import DropdownPicker from 'react-native-dropdown-picker'
export default function Signup({navigation})
{
    const [open,setopen] = useState(false)

    return (
        <SafeAreaView style={style.container}>
            <View>
                <TouchableOpacity onPress={()=>navigation.goBack()}><Entypo name="chevron-left" size={RFValue(24,580)}></Entypo></TouchableOpacity>
            </View>
            <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
                <View style={{flex:1}}>
                    <Text style={style.title}>Get started</Text>
                    <Text style={style.description}>Create an account</Text>
                    <View style={[style.textinput,{marginTop:54}]}>
                        <Text style={style.label}>E-mail</Text>
                        <View style={style.inputcontainer}>
                            <TextInput style={style.input} placeholderTextColor="#676767" defaultValue="steven.neff23@gmail.com"></TextInput>
                            <Image source={require('../assets/icons/bx-mail-send.svg.png')} style={style.icon}></Image>
                        </View>
                    </View>
                    <View style={[style.textinput,{marginTop:54}]}>
                        <Text style={style.label}>Country</Text>
                        <View style={style.inputcontainer}>
                            <View style={{width:150}}>
                                <DropdownPicker
                                    open={open}
                                    searchable={false}
                                    setOpen={(value)=>setopen(value)}
                                    items={[{label:"Us (+1)",value:'+1',icon:()=><Image source={require('../assets/icons/usa.png')} style={{width:20,height:15}}></Image>}]}
                                    value="+1"
                                    style={{borderColor:'white',backgroundColor:'transparent',display:'flex',width:125}}
                                    arrowIconStyle={{display:'none'}}
                                    labelStyle={{fontFamily:'Avenir Heavy',fontSize:RFValue(15,580),color:'#676767'}}
                                    containerStyle={{display:'flex',justifyContent:'center',flexDirection:'row',width:125,height:40}}
                                ></DropdownPicker>
                            </View>
                            
                            <TextInput style={[style.input,{marginLeft:0}]} placeholderTextColor="#676767" defaultValue=""></TextInput>
                            <Image source={require('../assets/icons/bxl-facebook.svg.png')} style={style.icon}></Image>
                        </View>
                    </View>
                    <View style={[style.textinput,{marginTop:54}]}>
                        <Text style={style.label}>Password</Text>
                        <View style={style.inputcontainer}>
                            <TextInput style={style.input} placeholderTextColor="#676767" defaultValue="password" secureTextEntry={true}></TextInput>
                            <Image source={require('../assets/icons/bx-lock.svg.png')} style={style.icon}></Image>
                        </View>
                    </View>
                    <TouchableOpacity style={{marginTop:44}}>
                        <Text style={style.forgot}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.btncontainer,{marginTop:44}]}>
                        <Text style={style.btntext}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={style.descriptionsignin}>
                        <View style={style.descriptionside}></View>
                        <Text style={[style.description,{marginLeft:15,marginRight:15,fontSize:RFValue(13,580),textAlign:'center'}]}>Or sign Up{'\n'}with</Text>
                        <View style={style.descriptionside}></View>
                    </View>
                    <View style={style.containerflex}>
                        <TouchableOpacity style={[style.socialbtn,{justifyContent:'flex-end',backgroundColor:'#3B5998',marginRight:45}]}>
                            <Fontiso name="facebook" color="white" size={30}></Fontiso>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.socialbtn,{justifyContent:'center',backgroundColor:'white'}]}>
                            <Image source={require('../assets/icons/super-g.png')} style={{width:20,height:20}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={[style.containerflex,{marginBottom:44,alignItems:'center'}]}>
                        <Text style={[style.signuptext,{color:'#676767'}]}>Already a member?</Text>
                        <TouchableOpacity style={{marginLeft:5}} onPress={()=>navigation.navigate('Login')}>
                            <Text style={[style.signuptext,{color:'#E50914',fontFamily:'Avenir Medium'}]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:'white'
    },
    content:{
        padding:8,
        marginTop:24,
        flex:1,
        marginBottom:40
    },
    title:{
        fontFamily:'Avenir Heavy',
        color:'#E50914',
        fontSize:RFValue(25,580),
        fontWeight:'800'
    },
    description:{
        fontFamily:'AvenirLTStd-Book',
        color:'#BABABA',
        fontSize:RFValue(15,580)
    },
    textinput:{
        backgroundColor:'#FBFBFD',
        shadowOffset:{
            width:0,
            height:14
        },
        shadowRadius:20,
        shadowColor:'rgba(66, 76, 112, 0.09)',
        paddingLeft:16,
        paddingRight:16,
        paddingTop:8,
        paddingBottom:8,
        marginTop:20
    },
    label:{
        fontSize:RFValue(9,580),
        color:'#BABABA',
        fontFamily:'SFProDisplay-Semibold'
    },
    inputcontainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:7
    },
    input:{
        flex:1,
        fontSize:RFValue(15,580),
        fontFamily:'Avenir Heavy',
        color:'#676767',
        padding:0,
        marginRight:15
    },
    icon:{
        width:15,
        height:15
    },
    forgot:{
        fontFamily:'Avenir Heavy',
        color:'#E50914',
        fontSize:RFValue(13,580),
        fontWeight:'800'
    },
    btncontainer:{
        backgroundColor:'#E50914',
        padding:11,
        flexDirection:'row',
        justifyContent:'center'
    },
    btntext:{
        fontFamily:'SFProDisplay-Semibold',
        fontSize:RFValue(17,580),
        color:'white'
    },
    descriptionsignin:{
        display:'flex',
        flexDirection:'row',
        marginTop:44,
        alignItems:'center'
    },
    descriptionside:{
        borderBottomColor:'#BABABA',
        borderBottomWidth:1,
        borderBottomColor:'#BABABA',
        flex:1
    },
    socialbtn:{
        width:48,
        height:48,
        borderRadius:24,
        display:'flex',
        alignItems:'center',
        shadowColor:'rgba(66, 76, 112, 0.09)',
        shadowOffset:{
            width:0,
            height:14
        },
        shadowRadius:20,
        elevation:3
    },
    containerflex:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:44
    },
    signuptext:{
        fontSize:RFValue(13,580),
        fontFamily:'AvenirLTStd-Roman'
    }
})