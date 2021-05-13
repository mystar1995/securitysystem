import React,{useState} from 'react'
import {View,StyleSheet,SafeAreaView,Text,Image,ScrollView} from 'react-native'
import DropdownPicker from 'react-native-dropdown-picker'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import StorageItem from '../components/StorageItem'

export default function Directive()
{
    const [open,setopen] = useState({camera:false,type:false})
    const [value,setvalue] = useState({camera:'all',type:'all'})
    const data = [
        {title:"Living Room",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image2.png'),status:'live'},
        {title:"Living Room",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image1.png'),status:'live'},
        {title:"Living Room",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image1.png'),status:'stop'},
        {title:"Living Room",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image3.png'),status:'live'},
        {title:"Living Room",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image1.png'),status:'stop'},
        {title:"Living Room",time:"05/20/2021 - 12:12:30",image:require('../assets/images/image4.png'),status:'live'}
    ]
    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <Text style={style.profiletext}>MY STORAGE</Text>
                <Image source={require('../assets/images/profile.png')} style={{width:32,height:32}}></Image>
            </View>
            <View style={style.divider}></View>
            <View style={{display:'flex',alignItems:'center',flexDirection:'row',marginTop:10}}>
                <View style={{minHeight:30,zIndex:99999}}>
                    <DropdownPicker
                        style={{display:'flex',borderColor:'white',width:wp('35'),marginLeft:13,height:40}} 
                        searchable={false}
                        open={open.camera} 
                        value={value.camera} 
                        listItemContainerStyle={{zIndex:10000}}
                        multiple={false}
                        containerStyle={{borderColor:'white',display:'flex'}}
                        labelStyle={{fontFamily:'AvenirLTStd-Book',fontSize:RFValue(14,580)}}
                        items={[{label:'All Camera',value:'all'},{label:'Camera1',value:'camear1'}]} 
                        setOpen={(toggle)=>setopen({...open,camera:toggle})} 
                        onChangeValue={(item)=>setvalue({...value,camera:item})}
                    ></DropdownPicker>
                </View>
                <View style={{minHeight:30,zIndex:99999}}>
                    <DropdownPicker
                        style={{display:'flex',borderColor:'white',width:wp('30'),marginLeft:13}} 
                        searchable={false}
                        open={open.type} 
                        value={value.type} 
                        multiple={false}
                        containerStyle={{borderColor:'white',display:'flex'}}
                        labelStyle={{fontFamily:'AvenirLTStd-Book',fontSize:RFValue(14,580),color:'black'}}
                        items={[{label:'All Type',value:'all'}]} 
                        setOpen={(toggle)=>setopen({...open,type:toggle})} 
                        onChangeValue={(item)=>setvalue({...value,type:item})}
                    ></DropdownPicker>
                </View>
            </View>
            <ScrollView style={style.content}>
                <View style={style.contentcontainer}>
                    {
                        data.map((item,index)=>(
                            <StorageItem {...item} key={index + ""}></StorageItem>
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:13,
        paddingBottom:13
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:13,
        paddingRight:13,
        justifyContent:'space-between'
    },
    profiletext:{
        fontSize:RFValue(18,580),
        color:'black',
        fontFamily:'Avenir Medium',
        fontWeight:'500',
        marginLeft:12
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
        borderTopWidth:1,
        padding:19
    },
    contentcontainer:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap'
    }
})