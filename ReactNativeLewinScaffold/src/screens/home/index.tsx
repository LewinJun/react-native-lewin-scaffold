import React, { PureComponent } from 'react'
import {
    View,
    TouchableOpacity,
    SafeAreaView,
    Text
} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { dispatch } from '../../helpers/redux'
import { push } from '../../helpers/react-navigation'
import { NavigationScreenProp } from 'react-navigation'
import { Props } from '../ScreenProps'

interface HomeProps extends Props {
    isLogin: boolean;
}

interface State {

}

const connectRedux = ({ user }) => ({
    isLogin: user.isLogin
  })
@connect(connectRedux)
export default class HomeScreen extends PureComponent<HomeProps, State> {

    constructor (props : HomeProps) {
        super(props)
        
        this.toLogin = this.toLogin.bind(this)
      }

    toLogin() {
        console.log("aaaaaaaa")
        const { isLogin } = this.props
        if (isLogin) {
            dispatch({ type: "user/LOGOUT" })
        } else {
            push('Login')
        }
        
    }

    componentDidMount() {
        this.props.navigation.setParams({
            navigationOptions: {
                headerTitle: "首页标题"
            }
        })
    }

    render() {
        const { isLogin } = this.props
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text>首页</Text>
                    
                    <TouchableOpacity onPress={()=>{
                        this.toLogin()
                    }} style={{ marginTop: 20, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ width: 200, height: 50,color: "red" }}>{isLogin ? "退出登录" : "登录"}</Text>
                    </TouchableOpacity>
                    
                </View>
            </SafeAreaView>
            
        )
    }
}
