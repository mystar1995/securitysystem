import React from 'react'
import {View,StatusBar, TabBarIOS} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Login,Signup,Forgot,Home,CameraDetail,ScreenControl,Notification, AlarmDetail,Directive,Chat,Chating,Setting} from './pages'
import TabBar from './components/Tabbar'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const DashboardStack = createStackNavigator()
function Navigation()
{
    return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#000000',
                    inactiveTintColor: '#BABABA',
                    showLabel: false,
                }}
                tabBar={(props)=><TabBar {...props}></TabBar>}
            >
                <Tab.Screen name="Dashboard" component={Home}></Tab.Screen>
                <Tab.Screen name="CameraDetail" component={CameraDetail}></Tab.Screen>
                <Tab.Screen name="Notification" component={Notification}></Tab.Screen>
                <Tab.Screen name="Directive" component={Directive}></Tab.Screen>
                <Tab.Screen name="Chat" component={Chat}></Tab.Screen>
                <Tab.Screen name="Setting" component={Setting}></Tab.Screen>
            </Tab.Navigator>
    )
}

function Dashboard()
{
    return (
            <DashboardStack.Navigator>
                <DashboardStack.Screen name="Dashboard" component={Navigation} options={{header:()=>null}}></DashboardStack.Screen>
                <DashboardStack.Screen name="ScreenControl" component={ScreenControl} options={{header:()=>null}}></DashboardStack.Screen>
                <DashboardStack.Screen name="AlarmDetail" component={AlarmDetail} options={{header:()=>null}}></DashboardStack.Screen>
                <DashboardStack.Screen name="Chating" component={Chating} options={{header:()=>null}}></DashboardStack.Screen>
            </DashboardStack.Navigator>
    )
}

function App()
{
    return (
            
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Forgot"
                    component={Forgot}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{header:()=>null}}
                ></Stack.Screen>
            </Stack.Navigator>
    )
}



export default App;