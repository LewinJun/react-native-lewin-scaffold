import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import Home from '../screens/home'
import { View, Text, Image, Platform, Dimensions, StyleSheet } from "react-native";
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import user from "../redux/user";
import StackConfig from "./stack-config";

let RootStack = createStackNavigator();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Order from '../screens/order'
import Mine from '../screens/mine'
import TabIcon from "./TabIcon";
import { reduxHelper } from "../help/redux";
import { setTopLevelNavigator } from "../help/react-navigation";

const Tab = createBottomTabNavigator();

let store = reduxHelper(createStore(combineReducers({ user: user })));

export default class AppRouter extends Component {
    render() {

        return (<Provider store={store}>
            <NavigationContainer ref={(e) => {
                setTopLevelNavigator(e)
            }} onStateChange={(state) => {
                console.log("state:%o", state)
            }} onUnhandledAction={(action) => {
                console.log("action:%o", action)
            }}>
                <RootStack.Navigator initialRouteName={'Root'} screenOptions={() => ({
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit, // 切换路时 Header 动画
                    headerStyle: {
                        backgroundColor: '#fff',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: '#e4e4e4',
                        elevation: 0,
                        shadowOpacity: 0
                    },
                    cardStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTitleStyle: {
                        color: '#222',
                        ...Platform.select({
                            android: {
                                width: Dimensions.get('window').width - 140,
                                textAlign: 'center'
                            }
                        })
                    },
                    headerBackTitleVisible: false,
                    headerBackImage: () => <Image source={require('../assets/icons/back.png')} style={{
                        ...Platform.select({
                            android: {
                                marginLeft: -5
                            },
                            ios: {
                                marginLeft: 10
                            }
                        })
                    }} />,
                    headerTintColor: '#444'
                })}>
                    <RootStack.Screen name={'Root'} component={TabCom} />
                    {StackConfig.map((item) => <RootStack.Screen {...item} />)}
                </RootStack.Navigator>
            </NavigationContainer>
        </Provider>)
    }
}

class TabCom extends Component {
    render() {
        return <Tab.Navigator screenOptions={state => {
            console.log(state)
            return {
                title: 'aaa'
            }
        }}>
            <Tab.Screen name="Home" key={'home'} component={Home} options={() => ({
                tabBarIcon: generateTabIcon('首页', require('./icon/market.png')),
                tabBarLabel: '',
            })} />
            <Tab.Screen name="Order" key={'Order'} component={Order} options={() => ({
                tabBarIcon: generateTabIcon('测试', require('./icon/exchange.png')),
                tabBarLabel: ''
            })} />
            <Tab.Screen name="Mine" key={'Mine'} component={Mine} options={() => ({
                tabBarIcon: generateTabIcon('我的', require('./icon/account.png')),
                tabBarLabel: ''
            })} />
        </Tab.Navigator>
    }
}

function generateTabIcon(text, icon) {
    return (props) => <TabIcon {...props} text={text} icon={icon} />
}