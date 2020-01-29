import React, { PureComponent } from 'react'
import {
    View,
    Text
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { dispatch } from '../../helpers/redux'

export default class LoginScreen extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "red" }}>
                <Text>登录</Text>
                <TouchableOpacity onPress={()=>{
                    dispatch({ type: "user/LOGIN" })
                }}>
                    <Text>登录啊</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
