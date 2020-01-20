import Login from '../screens/login/LoginScreen'
import RootTab from '../routers/tab-navigator'

const mainStackConfigs = {
    RootTab: {
        route: {
            screen: RootTab,
            navigationOptions: {
                header: null
              }
          }
    },
    Login: {
        route: {
            screen: Login
          }
    }
}

export default mainStackConfigs