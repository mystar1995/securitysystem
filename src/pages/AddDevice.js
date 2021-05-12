import React from 'react'
import Dropdown from 'react-native-dropdown-picker'
import {View,StyleSheet,TouchableOpacity, ScrollView,Text,TextInput} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import {RFValue} from 'react-native-responsive-fontsize'
export default function AddDevice({navigation})
{
    const [open,setopen] = React.useState({
        brand:false,
        model:false
    })

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity style={{marginRight:6}} onPress={()=>navigation.goBack()}>
                    <Entypo name="chevron-left" color="#2F2F2F" size={RFValue(24,500)}></Entypo>
                </TouchableOpacity>
                <Text style={style.title}>Add Device</Text>
            </View>
            <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
                <View>
                    <View style={style.itemcontainer}>
                        <View style={style.labelcontainer}>
                            <Text style={style.label}>Device Name</Text>
                        </View>
                        <TextInput style={style.input} defaultValue="Camera22"></TextInput>
                    </View>
                    <View style={style.itemcontainer}>
                        <View style={style.labelcontainer}>
                            <Text style={style.label}>IP address or URL</Text>
                        </View>
                        <TextInput style={style.input} defaultValue="192.168.1.9"></TextInput>
                    </View>
                    <View style={style.itemcontainer}>
                        <View style={style.labelcontainer}>
                            <Text style={style.label}>Username</Text>
                        </View>
                        <TextInput style={style.input} defaultValue="david333"></TextInput>
                    </View>
                    <View style={style.itemcontainer}>
                        <View style={style.labelcontainer}>
                            <Text style={style.label}>Password</Text>
                        </View>
                        <TextInput style={style.input} defaultValue="david333" secureTextEntry={true}></TextInput>
                    </View>
                    <View style={style.itemcontainer}>
                        <View style={style.labelcontainer}>
                            <Text style={style.label}>Brand</Text>
                            <Text style={style.error}>My IP camera is not listed</Text>
                        </View>
                        <Dropdown
                            searchable={false}
                            open={open.brand}
                            setOpen={(open)=>setopen({...open,brand:open})}
                            style={{borderColor:'white',padding:0}}
                            items={[{label:'Dahua',value:'Dahua'}]}
                            labelStyle={style.dropdown}
                            value="Dahua"
                        ></Dropdown>
                    </View>
                    <View style={style.itemcontainer}>
                        <View style={style.labelcontainer}>
                            <Text style={style.label}>Model</Text>
                        </View>
                        <Dropdown
                            searchable={false}
                            open={open.model}
                            setOpen={(open)=>setopen({...open,model:open})}
                            style={{borderColor:'white',padding:0}}
                            items={[{label:'IPC-HDW4431C-A',value:'IPC'}]}
                            labelStyle={style.dropdown}
                            containerStyle={{padding:0}}
                            value="IPC"
                        ></Dropdown>
                    </View>
                    <View style={[style.itemcontainer,{marginBottom:25}]}>
                        <View style={style.labelcontainer}>
                            <Text style={style.label}>RTSP Port</Text>
                        </View>
                        <TextInput style={style.input} defaultValue="554"></TextInput>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={style.btncontainer}>
                <Text style={style.btn}>ADD DEVICE</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        padding:13,
        flex:1,
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
        margin:12,
        marginTop:34
    },
    itemcontainer:{
        backgroundColor:'white',
        padding:16,
        paddingTop:8,
        paddingBottom:8,
        marginTop:12
    },
    label:{
        fontFamily:'SFProDisplay-Semibold',
        color:'#BABABA',
        fontSize:RFValue(9,500)
    },
    labelcontainer:{
        display:'flex',
        flexDirection:'row',
        marginBottom:6,
        justifyContent:'space-between',
        alignItems:'center'
    },
    input:{
        fontFamily:'Avenir Heavy',
        fontSize:RFValue(15,500),
        color:'#BABABA',
        borderColor:'white',
        padding:0
    },
    error:{
        fontFamily:'SFProDisplay-Semibold',
        color:'#E50914',
        fontSize:RFValue(9,500)
    },
    dropdown:{
        color:'#BABABA',
        fontSize:RFValue(15,500),
        fontFamily:'Avenir Heavy',
        padding:0
    },
    btncontainer:{
        padding:11,
        backgroundColor:'black',
        marginLeft:12,
        marginRight:12,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15,
        marginTop:35
    },
    btn:{
        fontFamily:'Avenir Medium',
        color:'white',
        fontWeight:'500'
    }
})