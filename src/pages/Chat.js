import React from 'react'
import {SafeAreaView,StyleSheet,View,Text,FlatList,TextInput} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import ProfileItem from '../components/ProfileItem'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MessageItem from '../components/MessageItem'
export default function Chat({navigation})
{
    const profiles = [
        {image:require('../assets/images/profile7.png'),name:'Kristin'},
        {image:require('../assets/images/profile6.png'),name:'Emmy'},
        {image:require('../assets/images/profile5.png'),name:'Theresa'},
        {image:require('../assets/images/profile4.png'),name:'Maria'},
        {image:require('../assets/images/profile3.png'),name:'Christine'}
    ]

    const messages = [
        {image:require('../assets/images/profile6.png'),title:'Kristin',description:"I am pleased to hear that",time:'15 min'},
        {image:require('../assets/images/profile4.png'),title:'Emmy',description:"You make me smile. ",time:'15 min'},
        {image:require('../assets/images/profile3.png'),title:'Theresa',description:"Catch you later in the swimming pool.",time:'15 min'},
        {image:require('../assets/images/profile2.png'),title:'Emily',description:"I love sush! What’s your fovorite?",time:'15 min'},
        {image:require('../assets/images/profile1.png'),title:'Christine',description:"I am pleased to hear that",time:'15 min'}
    ]
    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <Text style={style.profiletext}>Chat</Text>
            </View>
            <View style={style.divider}></View>
            <View>
                <FlatList
                    style={{marginTop:25,flex:0}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={profiles}
                    keyExtractor={(item,index)=>index + ""}
                    renderItem={({item})=><ProfileItem {...item}></ProfileItem>}
                ></FlatList>
            </View>            
            <View style={style.content}>
                <Text style={style.title}>Conversations</Text>
                <View style={style.inputcontainer}>
                    <AntDesign name="search1" color="#BBBBBB" size={RFValue(13,500)}></AntDesign>
                    <TextInput placeholder="Search" placeholderTextColor="rgba(187, 187, 187, 0.6)" style={style.input}></TextInput>
                    <FontAwesome5 name="microphone" color="#BBBBBB" size={RFValue(16,500)}></FontAwesome5>
                </View>
                <FlatList
                    data={messages}
                    showsVerticalScrollIndicator={false}
                    style={{marginTop:15}}
                    keyExtractor={(item,index)=>index + ""}
                    renderItem={({item})=><MessageItem {...item} navigation={navigation}></MessageItem>}
                ></FlatList>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:19,
        backgroundColor:'white'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
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
    content:{
        marginTop:23,
        flex:1
    },
    title:{
        color:'#424347',
        fontFamily:'SFProDisplay-Semibold',
        fontSize:RFValue(14,500)
    },
    inputcontainer:{
        padding:11,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:9,
        backgroundColor:'rgba(223, 222, 222, 0.4)',
        borderRadius:10
    },
    input:{
        flex:1,
        color:'rgba(187, 187, 187, 0.6)',
        fontSize:RFValue(15,500),
        padding:0,
        paddingLeft:5,
        fontFamily:'SFProDisplay-Regular'
    }
})