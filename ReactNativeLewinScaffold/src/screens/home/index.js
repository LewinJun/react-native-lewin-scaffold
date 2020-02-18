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
import { push } from '../../helpers/react-navigation-helper'
const connectRedux = ({ user }) => ({

    isLogin: user.isLogin

  })
@connect(connectRedux)
export default class HomeScreen extends PureComponent {

    constructor (props) {
        super(props)
        
        this.toLogin = this.toLogin.bind(this)
      }

    toLogin() {
        console.log("aaaaaaaa")
        const { isLogin } = this.props
        if (isLogin) {
            dispatch({ type: "user/LOGOUT" })
        } else {
            push('Login', {transition: "modal"})
            // this.props.navigation.navigate('Login', {transition: "modal"})
        }
        
    }

    render() {
        const { isLogin } = this.props
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <SafeAreaView/>
                <Text>首页</Text>
                
                <TouchableOpacity onPress={()=>{
                    this.toLogin()
                }} style={{ marginTop: 20, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ width: 200, height: 50,color: "red" }}>{isLogin ? "退出登录" : "登录"}</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}
