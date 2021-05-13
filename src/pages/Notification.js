import React,{useState} from 'react'
import {SafeAreaView,StyleSheet,View,Image,Text,FlatList} from 'react-native'
import DropdownPicker from 'react-native-dropdown-picker'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import AlarmItem from '../components/AlarmItem'
export default function Notification({navigation})
{
    const [open,setopen] = useState(false)
    const [value,setvalue] = useState("all")

    const data = [
        {title:"Living Room",action:"Detect Motion",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image1.png')},
        {title:"Living Room",action:"Detect Motion",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image1.png')},
        {title:"Living Room",action:"Detect Motion",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image1.png')},
        {title:"Living Room",action:"Detect Motion",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image1.png')},
        {title:"Living Room",action:"Detect Motion",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image1.png')},
        {title:"Living Room",action:"Detect Motion",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image1.png')}
    ]
    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <Text style={style.profiletext}>MI ALARM</Text>
                <Image source={require('../assets/images/profile.png')} style={{width:32,height:32}}></Image>
            </View>
            <View style={style.divider}></View>
            <View style={{marginTop:20,width:wp('40'),minHeight:40,zIndex:99999}}>
                <DropdownPicker
                    style={{display:'flex',borderColor:'white',marginLeft:13,height:40}} 
                    searchable={false}
                    open={open} 
                    value={value} 
                    multiple={false}
                    listItemContainerStyle={{display:'flex'}}
                    containerStyle={{borderColor:'white',display:'flex',height:40}}
                    labelStyle={{fontFamily:'AvenirLTStd-Book',fontSize:RFValue(14,580)}}
                    items={[{label:'All Camera',value:'all'},{label:'Camera1',value:'camera1'}]} 
                    setOpen={setopen} 
                    onChangeValue={(value)=>setvalue(value)}
                ></DropdownPicker>
            </View>
           <FlatList
                data={data}
                keyExtractor={(item,index)=>index + ""}
                renderItem={({item,index})=><AlarmItem {...item} navigation={navigation}></AlarmItem>}
                showsVerticalScrollIndicator={false}
           ></FlatList>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        paddingTop:13,
        flex:1,
        backgroundColor:'white',
        paddingBottom:13
    },
    header:{
        paddingLeft:13,
        paddingRight:13,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    profiletext:{
        fontSize:RFValue(18,580),
        color:'black',
        fontFamily:'Avenir Medium',
        fontWeight:'500',
        paddingLeft:12
    },
    divider:{
        width:22,
        borderBottomColor:'black',
        borderBottomWidth:2,
        marginLeft:26,
        marginTop:12
    },
    content:{
        borderTopColor:'#DADADA',
        borderTopWidth:1
    }
})