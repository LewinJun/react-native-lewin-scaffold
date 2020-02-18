import { NavigationActions, StackActions } from 'react-navigation'
import { getState } from './redux'

import mainStackConfigs from '../routers/screen-router'

let _navigator

function setTopLevelNavigator (navigatorRef) {
  _navigator = navigatorRef
}

const authProtect = (nextRouteName) => {
  // const currentRouteName = _.last(_navigator.state.nav.routes).routeName
  const { isLogin } = getState()['user']
  if (!isLogin) {
    _navigator.dispatch(
      StackActions.push({ routeName: 'Login', params: { originalRoute: nextRouteName } })
    )
    return true
  }
  return false
}

/**
 * navigation
 * @param  {String} routeName
 * @param  {Object} [params={}]
 * @param  {NavigationAction} action
 */
export function navigate (routeName, params = {}, action) {
  // const { needLogin } = params
  const { needLogin } = mainStackConfigs[routeName] || {}
  if (needLogin && authProtect(routeName)) return
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action
    })
  )
}

/**
 * push
 * @param  {String} routeName
 * @param  {Object} [params={}]
 * @param  {NavigationAction} action
 */
export const push = (routeName, params = {}, action) => {
  // const { needLogin } = params
  const { needLogin } = mainStackConfigs[routeName]
  if (needLogin && authProtect(routeName)) return
  _navigator.dispatch(
    StackActions.push({ routeName, params, action })
  )
}

/**
 * push
 * @param  {String} routeName
 * @param  {Object} [params={}]
 * @param  {NavigationAction} action
 */
export const replace = (routeName, params = {}, action) =>
  _navigator.dispatch(
    StackActions.replace({ routeName, params, action })
  )

/**
 * back
 * @param  {String} key
 * @param  {Boolean} immediate
 */
export const back = (key, immediate) =>
  _navigator.dispatch(
    NavigationActions.back({ key, immediate })
  )

/**
 * pop
 * @param  {Number} n
 * @param  {Boolean} immediate
 */
export const pop = (n, immediate) =>
  _navigator.dispatch(StackActions.pop({ n, immediate }))

/**
 * popToTop
 * @param  {String} key
 * @param  {Boolean} immediate
 */
export const popToTop = (key, immediate) =>
  _navigator.dispatch(StackActions.popToTop({ key, immediate }))

/**
 * reset
 * @param {Number} index
 * @param {Array<NavigationAction>} actions
 * @param {String | null} key
 */
export const reset = (index, actions, key) =>
  _navigator.dispatch(StackActions.reset({ index, actions, key }))


export default {
  setTopLevelNavigator:setTopLevelNavigator
}