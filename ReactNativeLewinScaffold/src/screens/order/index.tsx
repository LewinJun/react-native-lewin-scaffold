import React, { PureComponent } from 'react'
import {
    SafeAreaView,
    Text
} from 'react-native'
import ParentScreen from '../ParentScreen'

export default class OrderScreen extends ParentScreen {

    componentDidMount() {
        this.props.navigation.setParams({
            navigationOptions: {
                headerTitle: "测试标题"
            }
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text>订单</Text>
            </SafeAreaView>
        )
    }
}
