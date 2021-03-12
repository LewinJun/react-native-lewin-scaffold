import { Effect, Reducer } from "./model";
import codepush from 'react-native-code-push'
import { Platform } from "react-native";
import { config } from '../configs'

let codepushFailedTimes = 0

export const addCodepushFailedTimes = () => {
  codepushFailedTimes += 1
  return codepushFailedTimes
}

export interface CodePushState {
    patchModalVisible: boolean;
    patch: {
      localMeta: any;
      remoteMeta: null;
    };
}

export interface CodePushModelType {
    namespace: "update";
    state: CodePushState;
    effects: {
        INSTALL_PATCH_UPDATE: Effect
    },
    reducers: {
        UPDATE_PATCH_REMOTE_META: Reducer<CodePushState>;
        UPDATE_PATCH_LOCAL_META: Reducer<CodePushState>;
        UPDATE_PATCH_MODAL_VISIBLE: Reducer<CodePushState>;
    };
    subscriptions: {
        setup: ({ dispatch } : { dispatch: void })=>void;
    }
}

const CodePushModel : CodePushModelType = {
    namespace: "update",
    state: {
        patchModalVisible: false,
        patch: {
            localMeta: null,
            remoteMeta: null
        }
    },
    effects: {
        * INSTALL_PATCH_UPDATE({ payload },{put, select}){
            // yield put({ type: "", payload: "" });
            // const update : CodePushState = yield select(({update} : { update: CodePushState })=>({...update}))
            const { statusCallBack, progressCallBack } = payload || {}
            let syncStatusChangeCallback = null
            if (typeof statusCallBack === 'function') {
              syncStatusChangeCallback = status => {
                statusCallBack(status)
              }
            }
            let downloadProgressCallback = null
            if (typeof progressCallBack === 'function') {
              downloadProgressCallback = ({ receivedBytes, totalBytes } : { receivedBytes : number, totalBytes: number }) => {
                progressCallBack(receivedBytes / totalBytes)
              }
            }
            const depKey = Platform.OS === "ios" ? config.CODEPUSH_KEY_IOS : config.CODEPUSH_KEY_ANDROID
      
            const options = {
              ignoreFailedUpdates: false,
              deploymentKey: depKey
            }
            yield codepush.sync(options, syncStatusChangeCallback, downloadProgressCallback)
        }
    },
    reducers: {
        UPDATE_PATCH_REMOTE_META (state, { payload: meta }) {
            return { ...state, patch: { ...state?.patch, remoteMeta: meta } }
          },
          UPDATE_PATCH_LOCAL_META (state, { payload: meta }) {
            return { ...state, patch: { ...state?.patch, localMeta: meta } }
          },
          UPDATE_PATCH_MODAL_VISIBLE (state, { payload: visible }) {
            return { ...state, patchModalVisible: visible }
          }
    },
    subscriptions: {
      setup ({dispatch}) {
        /**
         * codepush 更新成功后下次启动会使用更新包，这时需要提示 codepush 更新成功
         * 默认 sync 包含提示功能，该项目下先判断是否存在更新如果存在才会去调用 sync 方法
         * 导致 sync 内部的提示更新成功方法无法被调用，所以在这里进行提示，保证不会回滚
         */
        codepush.notifyAppReady()
      }
    }
}

export default CodePushModel