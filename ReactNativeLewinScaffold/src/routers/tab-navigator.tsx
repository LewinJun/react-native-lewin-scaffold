import React from 'react'
import TabIcon from './TabIcon'
import Home from '../screens/home'
import Order from '../screens/order'
import Mine from '../screens/mine'
/**
 * @author lewin 2020-02-17
 * @description tab bar 一级页面 注册配置文件
 */
export const mainTabConfigs = {
    Home: {
      route: {
        screen: Home,
        navigationOptions: {
          header: null,
          tabBarIcon: generateTabIcon('首页', require('./icon/market.png'))
        }
      }
    },
    Order: {
      route: {
        screen: Order,
        navigationOptions: {
          header: null,
          tabBarIcon: generateTabIcon('测试', require('./icon/exchange.png'))
        }
      }
    },
    Mine: {
      route: {
        screen: Mine,
        navigationOptions: {
          header: null,
          tabBarIcon: generateTabIcon('我的', require('./icon/account.png'))
        }
      }
    }
  }
  
  function generateTabIcon (text, icon) {
    return props => <TabIcon {...props} text={text} icon={icon} />
  }