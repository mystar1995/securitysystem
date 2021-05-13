import React from 'react'
import {ScrollView, View,Text,StyleSheet} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import MessageSent from './MessageSent'
import MessageReceive from './MessageReceive'
export default function ChatContent({data})
{
    return (
        <>
            <ScrollView style={{flex:1}}>
                <View>
                    <View style={style.datecontainer}>
                        <View style={style.left}></View>
                        <Text style={style.date}>Today</Text>
                        <View style={style.left}></View>
                    </View>
                    {
                        data.map((item,index)=>{
                            return item.sent?<MessageSent {...item} key={index + ""}></MessageSent>:<MessageReceive {...item} key={index + ""}></MessageReceive>
                        })
                    }
                </View>
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    datecontainer:{
        paddingLeft:47,
        paddingRight:47,
        alignItems:'center',
        display:'flex',
        flexDirection:'row'
    },
    left:{
        borderBottomColor:'#D8D8D8',
        borderBottomWidth:1,
        flex:1
    },
    date:{
        fontFamily:'SFProDisplay-Regular',
        color:'#BBB',
        fontSize:RFValue(11,580),
        marginLeft:15,
        marginRight:15
    }
})