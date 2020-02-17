import Login from '../screens/login/LoginScreen'
import RootTab from '../routers/tab-navigator'

/**
 * @author lewin 2020-02-17
 * @description 所有的页面路由，注册配置文件，除tab bar相关的页面
 */
const mainStackConfigs = {
  
    Login: {
        route: {
            screen: Login
          }
    }
}

export default mainStackConfigs