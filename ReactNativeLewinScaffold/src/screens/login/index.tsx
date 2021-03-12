import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'

// import { navigate } from '../../helpers/react-navigation'
// import { dispatch } from '../../helpers/redux'
const connectRedux = ({ user }) => ({
    isLogin: user
})
@connect(connectRedux)
export default class LoginIndex extends Component {

    //warining screen-router.js 路由这里设置了title，这里无效,
    static navigationOptions = {
        headerTitle: "登录啊"
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
                <TouchableOpacity onPress={() => {
                    this.props.dispatch({ type: "user/LOGIN" })
                    // this.props.navigation.navigate("Home")
                }} style={{ marginTop: 20 }}>
                    <Text>点击改变登录状态</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("Home")
                }} style={{ marginTop: 20 }}>
                    <Text>没有账号？注册</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
