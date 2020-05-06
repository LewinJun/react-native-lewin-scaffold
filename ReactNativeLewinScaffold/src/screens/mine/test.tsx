import React, { PureComponent } from 'react'
import {
    SafeAreaView,
    Text
} from 'react-native'
import ParentScreen from '../ParentScreen'

export default class TestScreen extends ParentScreen {

    componentDidMount() {
       
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text>test</Text>
            </SafeAreaView>
        )
    }
}
