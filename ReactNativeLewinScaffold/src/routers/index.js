import React, { Component } from 'react'
import { Linking, BackHandler, AppState, Text, TextInput, UIManager, findNodeHandle, NativeEventEmitter, DeviceEventEmitter, Alert, Platform } from 'react-native'

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
}