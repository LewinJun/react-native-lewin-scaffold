import { NavigationActions, StackActions } from 'react-navigation'
import { getState } from './redux'

import mainStackConfigs from '../routers/screen-router'


export const parseRouterConfigs = function (configs) {
  const parsedConfigs = {}
  for (let key in configs) {
    if (configs.hasOwnProperty(key)) {
      const config = configs[key]
      const routeConfig = config.route
      // if (!config.disableErrorCapture) {
      //   routeConfig.screen = routeConfig.screen
      // }
      parsedConfigs[key] = routeConfig
    }
  }
  return parsedConfigs
}

