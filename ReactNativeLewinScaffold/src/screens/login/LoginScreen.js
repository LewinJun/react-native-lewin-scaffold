import React, { PureComponent } from 'react'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import { dispatch } from '../../helpers/redux'

export default class LoginScreen extends PureComponent {
    // static navigationOptions = function () {
    //     return {
    //       header: null,
    //       cardStyleInterpolator:(props)=> CardStyleInterpolators.forModalPresentationIOS(props)
    //     }
    //   }
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Text>登录</Text>
                <TouchableOpacity onPress={()=>{
                    dispatch({ type: "user/LOGIN" })
                }}>
                    <Text>点击登录，保持登录状态</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
