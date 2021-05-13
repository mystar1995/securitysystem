import React from 'react'
import {View,StyleSheet,SafeAreaView,Text,Image,FlatList} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import LiveCameraItem from '../components/LiveCameraItem'
export default function Home({navigation})
{
    const data = [
        {title:"Living room",image:require('../assets/images/image1.png')},{title:"Bedroom",image:require('../assets/images/image2.png')}
    ]
    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <Text style={style.profiletext}>MI SI YUH</Text>
                <Image source={require('../assets/images/profile.png')} style={{width:32,height:32}}></Image>
            </View>
            <View style={style.divider}></View>
            <FlatList
                style={{marginTop:19}}
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item,index)=>index + ""}
                renderItem={({item})=><LiveCameraItem {...item} navigation={navigation}></LiveCameraItem>}
            ></FlatList>
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
        marginLeft:13,
        marginTop:12
    }
})