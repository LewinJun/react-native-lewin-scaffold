import invariant from 'invariant';

// reference: https://redux.js.org/api/store#store-methods-1
export const reduxHelper = function (store) {
  getState = store.getState;
  dispatch = store.dispatch;
  subscribe = store.subscribe;
  replaceReducer = store.replaceReducer;

  return store;
};

export let getState = function (): any {
  invariant(false, 'call failed');
};
export let dispatch = function ({ type, payload }: { type: string, payload: any }) {
  invariant(false, 'call failed');
};
export let subscribe = function () {
  invariant(false, 'call failed');
};
export let replaceReducer = function () {
  invariant(false, 'call failed');
};
