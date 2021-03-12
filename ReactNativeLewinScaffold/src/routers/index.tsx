import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators, StackNavigationOptions } from '@react-navigation/stack';
import Home from '../screens/home'
import { View, Text, Image, Platform, Dimensions, StyleSheet, StatusBar } from "react-native";
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import user from "../redux/user";
import StackConfig from "./stack-config";

let RootStack = createStackNavigator();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Order from '../screens/order'
import Mine from '../screens/mine'
import TabIcon from "./TabIcon";
import { setTopLevelNavigator } from "../help/react-navigation";
const Tab = createBottomTabNavigator();

interface State {
    tabNavigationOptions: any;
}

export default class AppRouter extends Component<any, State> {

    state = {
        tabNavigationOptions: {}
    }

    componentDidMount() {
        Platform.OS === "android"
            ? StatusBar.setBackgroundColor("rgba(0,0,0,0)", true)
            : null; //背景颜色是透明
        Platform.OS === "android" ? StatusBar.setTranslucent(true) : null; //设置状态栏透明
        StatusBar.setBarStyle('dark-content');
    }

    render() {
        const { tabNavigationOptions } = this.state
        return (
            <NavigationContainer ref={(e) => {
                setTopLevelNavigator(e)
            }} onStateChange={(state) => {
                const tabIndex = state?.routes[0].state?.index || 0
                const { navigationOptions } = state?.routes[0].state?.routes[tabIndex].params || {}
                const routeNames = state?.routes[0].state?.routeNames || []
                let routeName = routeNames.length > tabIndex ? routeNames[tabIndex] : ''
                if (state?.routes.length || 0 > 1) {
                    const currenScreen = state?.routes[state?.routes.length - 1]
                    routeName = currenScreen?.name
                }
                console.log("tabIndex-%i,--:%o---routeName:%s", tabIndex, navigationOptions, routeName)
                const newOptions = navigationOptions || {}
                // this.setState({ tabNavigationOptions: { ...newOptions } })
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
                                // width: Dimensions.get('window').width - 140,
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
                    <RootStack.Screen name={'Root'} component={TabCom} options={({ route, navigation }) => {
                        console.log(navigation)
                        console.log(route)
                        // TODO https://reactnavigation.org/docs/screen-options-resolution/#setting-parent-screen-options-based-on-child-navigators-state
                        const index = route?.state?.index || 0
                        const routes = route?.state?.routes || []
                        const params = routes.length > 0 ? routes[index].params : {}
                        const navConfig = params?.navigationOptions || {}
                        return { ...navConfig }
                    }} />
                    {StackConfig.map((item) => <RootStack.Screen {...item} key={item.name} />)}
                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}

class TabCom extends Component {

    render() {
        return <Tab.Navigator detachInactiveScreens>
            <Tab.Screen name="Home" key={'Home'} component={Home} options={() => ({
                tabBarIcon: generateTabIcon('首页', require('./icon/market.png')),
                tabBarLabel: ''
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