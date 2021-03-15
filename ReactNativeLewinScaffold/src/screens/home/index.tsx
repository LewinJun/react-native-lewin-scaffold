import { StackActions } from '@react-navigation/routers'
import { StackNavigationOptions } from '@react-navigation/stack'
import React, { Component, PureComponent } from 'react'
import {
    View,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Text,
    ScrollView,
    RefreshControl,
    Platform,
    Image,
    FlatList
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
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
    refreshing: boolean;
    loading: boolean;
}

const connectRedux = ({ user }) => ({
    isLogin: user.isLogin,
})
@connect(connectRedux)
export default class HomeScreen extends Component<HomeProps, State> {

    state = {
        refreshing: false,
        loading: false,
    }

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
        const { refreshing, loading } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ width: '100%', height: '100%' }} refreshControl={<RefreshControl onRefresh={() => {
                    this.setState({ refreshing: true })
                    setTimeout(() => {
                        this.setState({ refreshing: false })
                    }, 2000)
                }} refreshing={refreshing} />}>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <Text>首页</Text>

                        <TouchableOpacity onPress={() => {
                            this.toLogin()
                        }} style={styles.btn} activeOpacity={.6}>
                            <Text style={{ color: "red" }}>{isLogin ? "退出登录" : "登录"}</Text>


                        </TouchableOpacity>
                        <TextInput placeholder={'用户名'} />
                        <FlatList
                            refreshing={false}
                            onEndReached={() => {
                                if (true) {
                                    return
                                }
                                // this.setState({ loading: true })
                                // setTimeout(() => {
                                //     this.setState({ loading: false })
                                // }, 2000)
                            }}
                            scrollEventThrottle={16}
                            ListFooterComponent={() => loading ? <View style={{ backgroundColor: 'blue', height: 30 }} /> : null}
                            style={{ height: 100 }}
                            data={[{ t: 'aaaa' }, { t: 'bbbb' }, { t: 'cccc' }, { t: 'cccc' }, { t: 'cccc' }, { t: 'cccc' }]}
                            renderItem={({ index, item }) => {
                                return <TouchableOpacity style={{ height: 50 }}>
                                    <Text>{item.t}</Text>
                                </TouchableOpacity>
                            }}
                        />

                        <View style={[{ width: '100%', height: 60 }, styles.item]}>
                            <View style={{ flex: 2, backgroundColor: 'red' }} />
                            <View style={{ flex: 1.5, backgroundColor: 'yellow' }} />
                            <View style={{ backgroundColor: 'blue', width: 50 }} />
                        </View>
                        <View style={{ height: 1600, width: 60, backgroundColor: 'red' }} />

                    </View>
                    <Image onLoad={(e) => {
                    }} style={{ width: '100%', minHeight: 20, height: 'auto' }} source={{ uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=37530566,56665851&fm=26&gp=0.jpg' }} />
                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        marginLeft: 20,
        marginTop: 20,
        // paddingLeft: 50,
        width: 200,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: '#94C36B',
    },
    item: {
        display: 'flex',
        flexDirection: 'row',

    }
})
