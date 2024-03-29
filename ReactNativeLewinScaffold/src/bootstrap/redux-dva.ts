import { create } from 'dva-core'
import models from '../models'
import { reduxLoggerMiddleware } from './redux-logger'
import { persisteReducerEnhancer } from './redux-persist'

export default function createStore1() {
    const middlewares = [
        reduxLoggerMiddleware
    ].filter(function (middleware) { return typeof middleware === 'function' })

    const onReducer = function (reducer) {
        reducer = persisteReducerEnhancer(reducer)
        console.log("onReducer")
        return reducer
    }

    // const dva = create()
    const dva = create({
        onAction: middlewares,
        onReducer
    })

    models.forEach(function (model) { dva.model(model) })
    dva.start()
    return dva._store
}