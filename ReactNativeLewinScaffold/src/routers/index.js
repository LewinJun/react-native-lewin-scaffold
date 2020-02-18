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
          <AppScreen ref={this.navigatorRef} onNavigationStateChange={async (prevState, currentState) => {
              console.log("currentState:" + currentState)
          }}/>
      )
  }
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
// 每个页面的screen配置
const StackScreen = parseRouterConfigs(mainStackConfigs)

// TabBar和页面的screen
const StackNavigator = createStackNavigator({
    RootTab: { screen: TabBar, navigationOptions: {
        headerShown: false} },
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


