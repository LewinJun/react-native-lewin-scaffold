import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { mainTabConfigs } from '../routers/tab-navigator'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import mainStackConfigs from './screen-router'
import { StyleSheet, Image, Dimensions } from 'react-native'
import { HeaderStyleInterpolators } from 'react-navigation-stack'
import { parseRouterConfigs } from '../helpers/react-navigation-helper'
import NavigationHelper from '../helpers/react-navigation'
import RootModals from './modals'
import { DeviceEventEmitter } from 'react-native'

export default class App extends Component {

  constructor () {
    super()
    this.state = {
      appState: ''
    }
    this.navigatorRef = React.createRef()
  }

  componentDidMount(){
    NavigationHelper.setTopLevelNavigator(this.navigatorRef.current)
  }

  render() {
      return (
        <React.Fragment>
        <AppScreen ref={this.navigatorRef} onNavigationStateChange={async (prevState, currentState) => {
            const currentScreen = getActiveRouteName(currentState)
            this.currentScreen = currentScreen
            DeviceEventEmitter.emit("pageChange", currentScreen)
        }}/>
        <RootModals />
    </React.Fragment>
      )
  }
}

function getActiveRouteName (navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

const TabBar = createBottomTabNavigator(parseRouterConfigs(mainTabConfigs), {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: '#fff',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#e7e7e7'
    }
  }
})
// 主页几个页面的头部配置选项
TabBar.navigationOptions = ({ navigation }) => {
  // 子页面可以通过props来设置
  const { routeName, params } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  // const headerTitle = routeName;
  const navigationOptions = (params && params.navigationOptions) || {}
  return {
    headerTitle: "",
    ...navigationOptions
  };
};

// 每个页面的screen配置
const StackScreen = parseRouterConfigs(mainStackConfigs)

// TabBar和页面的screen
const StackNavigator = createStackNavigator({
    RootTab: { screen: TabBar },
    ...StackScreen
}, {
    initialRouteName: 'RootTab',
    defaultNavigationOptions: {
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
      headerBackImage: ()=><Image source={require('../assets/icons/back.png')} style={{  ...Platform.select({
        android: {
          marginLeft: -5
        },
        ios: {
          marginLeft: 10
        }
      }) }} />,
      headerTintColor: '#444'
    },
    
  })

const AppScreen = createAppContainer(StackNavigator)


