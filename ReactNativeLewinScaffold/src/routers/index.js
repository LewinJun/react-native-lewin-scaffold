import React, { Component } from 'react'
import { Linking, BackHandler, AppState, Text, TextInput, UIManager, findNodeHandle, NativeEventEmitter, DeviceEventEmitter, Alert, Platform, View } from 'react-native'
import TopLevelNavigator, { mainStackConfigs } from './stack-navigator'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

class AppNavigatorWithoutProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appState: ''
          }
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            // <View style={{ flex: 1 }}>
            //     <Text style={{flex: 1, color: "red"}}>aaaaaaaa</Text>
            // </View>
            // <ActionSheetProvider>
                <TopLevelNavigator
                    onNavigationStateChange={async (prevState, currentState) => {
                        const currentScreen = getActiveRouteName(currentState)
                        const prevScreen = getActiveRouteName(prevState)
                    }}
                    />
            // </ActionSheetProvider>
            
        )
    }
}

export default AppNavigatorWithoutProps