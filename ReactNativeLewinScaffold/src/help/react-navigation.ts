import React from 'react';
// import { StackActions } from '@react-navigation/core';
import { CommonActions, StackActions } from '@react-navigation/native';
import StackConfig from '../routers/stack-config';
import { getState } from './redux';

let routeConfigs = {};

type NavigationFunc = (routeName: string, params?: NavigationParams, action?: NavigationNavigateAction) => void;

let _navigator;

export const setTopLevelNavigator = (navigatorRef: React.RefObject<any>) => {
  _navigator = navigatorRef;
  const configs = {}
  StackConfig.map((item) => {
    configs[item.name] = item
  })
  routeConfigs = configs;
}

const authProtect = (nextRoute: { routeName: string; params }): boolean => {
  // const currentRouteName = _.last(_navigator.state.nav.routes).routeName
  const { isLogin } = getState().user;
  if (!isLogin) {
    _navigator?.dispatch(
      StackActions.push('Login', { originalRoute: nextRoute }),
    );
    return true;
  }
  return false;
};

const routeProtect = (routeName, params): boolean => {
  const { needLogin } = routeConfigs[routeName] || {};
  if (routeName === 'ConversationDetail') {
    needLogin = params.type !== 'support';
  }

  const auth = needLogin && authProtect({ routeName, params });
  return auth;
};

/**
 * navigation
 * @param  {String} routeName
 * @param  {Object} [params={}]
 * @param  {NavigationAction} action
 */
export const navigate: NavigationFunc = (routeName, params = {}, action) => {
  if (routeProtect(routeName, params)) return;
  _navigator?.dispatch(CommonActions.navigate({
    name: routeName,
    params,
  }))
};

/**
 * push
 * @param  {String} routeName
 * @param  {Object} [params={}]
 * @param  {NavigationAction} action
 */
export const push: NavigationFunc = (routeName, params = {}, action) => {
  if (routeProtect(routeName, params)) return;
  _navigator?.dispatch(StackActions.push(routeName, params));
};

/**
 * push
 * @param  {String} routeName
 * @param  {Object} [params={}]
 * @param  {NavigationAction} action
 */
export const replace: NavigationFunc = (routeName: string, params = {}, action) => {
  _navigator?.dispatch(StackActions.replace(routeName, params));
};

/**
 * back
 * @param  {String} key
 * @param  {Boolean} immediate
 */
export const back = (key: string, immediate: boolean) =>
  CommonActions.goBack()

/**
 * pop
 * @param  {Number} n
 * @param  {Boolean} immediate
 */
export const pop = (n: number, immediate: boolean): void => _navigator?.dispatch(StackActions.pop({ n, immediate }));

/**
 * popToTop
 * @param  {String} key
 * @param  {Boolean} immediate
 */
export const popToTop = (key: string, immediate: boolean): void =>
  _navigator?.dispatch(StackActions.popToTop());

/**
 * reset
 * @param {Number} index
 * @param {Array<NavigationAction>} actions
 * @param {String | null} key
 */
export const reset = (index: number, actions: NavigationNavigateAction[], key: string): void =>
  _navigator?.dispatch(CommonActions.reset({ index, key }));


