import LoginIndex from '../screens/login'
import Register from '../screens/register/RegisterScreen'
import { CardStyleInterpolators, HeaderStyleInterpolators } from 'react-navigation-stack'

/**
 * @author lewin 2020-02-17
 * @description 所有的页面路由，注册配置文件，除tab bar相关的页面
 */
const mainStackConfigs = {
  
    Login: {
        route: {
            screen: LoginIndex,
            navigationOptions: {headerTitle: '登录', cardStyleInterpolator:(props)=> CardStyleInterpolators.forVerticalIOS(props)},
          }
    },
    Register: {
        route: {
            screen: Register
        }
    }
}

export default mainStackConfigs