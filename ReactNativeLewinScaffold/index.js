/**
 * @format
 */
import 'react-native-gesture-handler'

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';



import AppRouter from './src/routers'
import bootstrap from './src/bootstrap'
// import AppScreen from './src/routers/app'

AppRegistry.registerComponent(appName, function AppProvider (initParams) {
  return function App () {
    return bootstrap(AppRouter, initParams)
  }
})
// AppRegistry.registerComponent("AppName", () => App);

