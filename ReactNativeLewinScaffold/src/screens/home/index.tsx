import { StackActions } from '@react-navigation/routers'
import { StackNavigationOptions } from '@react-navigation/stack'
import React, { Component, PureComponent } from 'react'
import {
    View,
    TouchableOpacity,
    SafeAreaView,
    Text
} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { navigate } from '../../help/react-navigation'
import { dispatch } from '../../help/redux'
import { Props } from '../ScreenProps'

interface HomeProps extends Props {
    isLogin: boolean;
    isL: boolean;
}

interface State {

}

const connectRedux = ({ user }) => ({
    isLogin: user.isLogin,
})
@connect(connectRedux)
export default class HomeScreen extends Component<HomeProps, State> {

    constructor(props: HomeProps) {
        super(props)
        this.toLogin = this.toLogin.bind(this)
    }

    componentDidMount() {
        this.props.navigation.setParams({
            navigationOptions: {
                headerTitle: "首页标题",
                headerShown: true,
            }
        })
    }

    // 执行render之前的dom状态, state已更新
    // getSnapshotBeforeUpdate() {
    //     return 0
    // }

    //1：觉得Vistual Dom是否重
    // 2：一般可以由PuerComponent自动实现
    // 3：典型场景：性能优化
    // shouldComponentUpdate() {
    //     return true
    // }

    // 1：每次UI更新被调用
    // 2：典型场景：页面通过props重新获取数据
    // componentDidUpdate() {

    // }

    componentWillUnmount() {
        // 即将卸载
    }

    // 错误处理
    // componentDidCatch(error, info) {

    // }

    toLogin() {
        const { isLogin, isL } = this.props
        console.log("aaaaaaaa:%o ----isL:%o", isLogin, isL)
        if (isLogin) {
            dispatch({ type: "user/UPDATE_LOGIN", payload: false })
        } else {
            navigate('Login')
        }
    }

    render() {
        console.log("home render")
        const { isLogin } = this.props
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text>首页</Text>

                    <TouchableOpacity onPress={() => {
                        this.toLogin()
                    }} style={{ marginTop: 20, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ width: 200, height: 50, color: "red" }}>{isLogin ? "退出登录" : "登录"}</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>

        )
    }
}
