
import eventActions from './event.action'
import { dispatch } from '../helpers/redux'

/**
 * @author lewin 2020-01-29
 * 用户相关model
 */
export default {
    namespace: "user",
    state: {
        isLogin: false,
    },
    reducers: {
        //获取订单列表
        UPDATE_LOGIN(state,{payload: isLogin}) {
            
            return {...state,isLogin }
        },
    },
    effects: {
        * LOGIN (_, { put, select }) {
            try {
                yield put({ type: "UPDATE_LOGIN", payload: true })
                
            } catch (e) {
              console.log(e)
                // toast(e.message)
            }
          },
        * LOGOUT(_, { put, select }){
          try {
            yield put({ type: "UPDATE_LOGIN", payload: false })
            
        } catch (e) {
          console.log(e)
            // toast(e.message)
        }
        },
          APP_STARTED_WATCH: [
            function * CHECK_CUSTOMER_LOGIN_STATUS ({ take, put }) {
              while (true) {
                yield take(eventActions.APP_STARTED)
                try {
                  yield put({ type: 'FETCH_RECORDS' })
                } catch (e) {
                }
              }
            },
            { type: 'watcher' }
          ]
    }
}