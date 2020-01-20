import React, { PureComponent } from 'react'
import {
    View,
    
    Text
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class HomeScreen extends PureComponent {

    constructor (props) {
        super(props)
        
        this.toLogin = this.toLogin.bind(this)
      }

    toLogin() {
        console.log("aaaaaaaa")
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>首页</Text>
                <TouchableOpacity onPress={()=>{
                    this.toLogin()
                }} style={{ marginTop: 150, width: 200, height: 50, alignItems: "center", justifyContent: "center" }}>
                    <Text>登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
