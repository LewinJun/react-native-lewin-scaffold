/**
 * @format
 */
import 'react-native-gesture-handler'

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';



import AppRouter from './src/routers'
import bootstrap from './src/bootstrap'
import { createAppContainer } from 'react-navigation';

AppRegistry.registerComponent(appName, function AppProvider (initParams) {
  return function App () {
    return bootstrap(createAppContainer(AppRouter), initParams)
  }
})
// AppRegistry.registerComponent(appName, () => AppRouter);

