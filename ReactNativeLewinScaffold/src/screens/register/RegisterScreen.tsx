import React, { PureComponent } from 'react'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import { back, navigate, pop } from '../../help/react-navigation'

export default class RegisterScreen extends PureComponent {

    static navigationOptions = {
        title: "注册"
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <TouchableOpacity onPress={() => {
                    back()
                }}>
                    <Text>返回登录</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigate("Home")
                }} style={{ marginTop: 10 }}>
                    <Text>返回首页</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
