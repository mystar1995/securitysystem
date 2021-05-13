import React,{useState} from 'react'
import {View,StyleSheet,TouchableOpacity,Text, TextInput} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import {RFValue} from 'react-native-responsive-fontsize'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
export default function MemberShip({navigation})
{
    const [visible,setvisible] = useState(false)
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity style={{marginRight:6}} onPress={()=>navigation.goBack()}>
                    <Entypo name="chevron-left" color="#2F2F2F" size={RFValue(24,580)}></Entypo>
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
                            <AntDesign name="check" color="white" size={RFValue(24,580)}></AntDesign>
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
            <TouchableOpacity style={[style.btncontainer,{marginBottom:24}]} onPress={()=>setvisible(true)}>
                <Text style={style.btntext}>Upgrade Now</Text>
            </TouchableOpacity>
            <Modal 
                isVisible={visible}
                onBackdropPress={()=>setvisible(false)}
                style={{margin:0,justifyContent:'flex-end'}}
            >
                <View style={style.modalinside}>
                    <TouchableOpacity onPress={()=>setvisible(false)}>
                        <AntDesign color="#424347" size={RFValue(14,580)} name="close"></AntDesign>
                    </TouchableOpacity>
                    <View style={style.modalcontainer}>
                        <Text style={[style.itemtitle,{fontFamily:'Avenir Medium'}]}>Add New Card</Text>
                        <View style={style.modalcontainer}>
                            <Text style={style.inputtitle}>Name on Card</Text>
                            <TextInput style={style.input} defaultValue="Aycan Doganlar" placeholderTextColor="#999"></TextInput>
                        </View>
                        <View style={style.modalcontainer}>
                            <Text style={style.inputtitle}>Card number</Text>
                            <TextInput style={style.input} defaultValue="1234 4567 7890 1234" keyboardType="number-pad" placeholderTextColor="#999"></TextInput>
                        </View>
                        <View style={[style.modalcontainer,{display:'flex',flexDirection:'row'}]}>
                            <View style={{flex:1,marginRight:20}}>
                                <Text style={style.inputtitle}>Expiry date</Text>
                                <TextInput style={style.input} defaultValue="02/24" placeholderTextColor="#999"></TextInput>
                            </View>
                            <View style={{flex:1}}>
                                <Text style={style.inputtitle}>CVV</Text>
                                <TextInput style={style.input} defaultValue="1234" secureTextEntry={true} placeholderTextColor="#999"></TextInput>
                            </View>
                        </View>
                        <TouchableOpacity style={[style.btncontainer,{marginTop:40}]}>
                            <Text style={style.btntext}>Add Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        fontSize:RFValue(18,580),
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
        fontSize:RFValue(20,580)
    },
    itemdescription:{
        fontFamily:'AvenirLTStd-Roman',
        color:'black',
        fontSize:RFValue(13,580),
        lineHeight:RFValue(20,580)
    },
    done:{
        width:RFValue(30,580),
        height:RFValue(30,580),
        borderRadius:RFValue(15,580),
        backgroundColor:'#E50914',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginRight:5
    },
    btntext:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Avenir Heavy'
    },
    btncontainer:{
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        padding:11,
        borderRadius:4
    },
    modalinside:{
        paddingLeft:24,
        paddingRight:24,
        paddingTop:40,
        paddingBottom:40,
        backgroundColor:'white'
    },
    modalcontainer:{
        marginTop:21
    },
    inputtitle:{
        fontFamily:'GraphikRegular',
        color:'#999',
        fontSize:RFValue(12,580)
    },
    input:{
        borderBottomColor:'#F5F5F5',
        borderBottomWidth:1,
        color:'black',
        fontSize:RFValue(16,580),
        fontFamily:'GraphikRegular'
    }
})