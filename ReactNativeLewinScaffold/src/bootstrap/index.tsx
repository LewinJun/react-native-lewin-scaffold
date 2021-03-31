import React from 'react'
import createStore from './redux-dva'
import { reduxHelper } from '../help/redux'
import { persistHelper } from '../help/redux-persist'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import { beforeRunApp, afterRehydrated } from './lifecycle'

export default function (App, initParams) {
    const store = reduxHelper(createStore())
    const persistor = persistHelper(persistStore(store, null, afterRehydrated))
    // const store = createStore()
    // const persistor = persistStore(store, null, afterRehydrated)



    // return (
    //     <App/>
    // )
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} onBeforeLift={beforeRunApp}>
                <App />
            </PersistGate>
        </Provider>
    )
}