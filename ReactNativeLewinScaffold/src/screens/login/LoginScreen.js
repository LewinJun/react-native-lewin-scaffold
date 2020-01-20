import React, { PureComponent } from 'react'
import {
    View,
    Text
} from 'react-native'

export default class LoginScreen extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "red" }}>
                <Text>登录</Text>
            </View>
        )
    }
}
