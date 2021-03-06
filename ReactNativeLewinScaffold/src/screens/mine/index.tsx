import React, { PureComponent } from 'react'
import {
    SafeAreaView,
    TouchableOpacity,
    Text
} from 'react-native'
import ParentScreen from '../ParentScreen'
import { navigate } from '../../helpers/react-navigation'

export default class MineScreen extends ParentScreen {

    componentDidMount() {
        this.props.navigation.setParams({
            navigationOptions: {
                headerShown: false // 隐藏头部
            }
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text>我的</Text>
                <TouchableOpacity style={{ marginTop: 20 }} onPress={()=> navigate('TestS')}>
                    <Text>test</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
