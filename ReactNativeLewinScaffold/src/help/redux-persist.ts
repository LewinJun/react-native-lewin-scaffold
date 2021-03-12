import invariant from 'invariant'

// reference: https://github.com/rt2zz/redux-persist#persistor-object
export const persistHelper = function (persistor) {
  purge = persistor.purge
  flush = persistor.flush
  pause = persistor.pause
  persist = persistor.persist

  return persistor
}

export let purge = function () { invariant(false, 'call failed') }
export let flush = function () { invariant(false, 'call failed') }
export let pause = function () { invariant(false, 'call failed') }
export let persist = function () { invariant(false, 'call failed') }
