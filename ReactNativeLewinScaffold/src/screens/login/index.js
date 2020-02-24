import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { navigate } from '../../helpers/react-navigation'
import { dispatch } from '../../helpers/redux'

export default class LoginIndex extends Component {

    //warining screen-router.js 路由这里设置了title，这里无效,
    static navigationOptions = {
        headerTitle: "登录啊"
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
                <TouchableOpacity onPress={ async ()=>{
                    await dispatch({ type: "user/LOGIN" })
                    navigate("RootTab")
                }} style={{ marginTop: 20 }}>
                    <Text>点击改变登录状态</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigate("Register")
                }} style={{ marginTop: 20 }}>
                    <Text>没有账号？注册</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
