/**
 * code push 更新类
 */

import codepush from 'react-native-code-push'
import { Alert, Platform } from 'react-native'
import { config } from '../configs';
import { dispatch } from '../help/redux';
import version from '../utils/version'


export const codepushCheck = async () => {
  try {
    const depKey = Platform.OS === "ios" ? config.CODEPUSH_KEY_IOS : config.CODEPUSH_KEY_ANDROID

    codepush.getUpdateMetadata(codepush.UpdateState.PENDING).then((update) => {
      console.log(" vupdate：" + update)
      if (update) {
        // There's a pending update, do we want to force a restart?
      }
    });

    //   console.log(depKey)
    //   const codepushNewVersion = await codepush.checkForUpdate(depKey) || {}
    //   console.log(codepushNewVersion)
    // this no native update and continue to check codepush version
    const localCodepushMeta = (await codepush.getUpdateMetadata()) || {}
    console.log("localCodepushMeta:%o", localCodepushMeta)
    await dispatch({ type: 'update/UPDATE_PATCH_LOCAL_META', payload: localCodepushMeta })

    const remoteCodepushMeta = (await codepush.checkForUpdate(depKey)) || {}
    console.log("remoteCodepushMeta:%o", remoteCodepushMeta)
    await dispatch({ type: 'update/UPDATE_PATCH_REMOTE_META', payload: remoteCodepushMeta })
    // version compare
    const currentVersionNumber = localCodepushMeta.label || '0'
    const remoteVersionNumber = remoteCodepushMeta.label || '0'
    if (version.compare(currentVersionNumber, remoteVersionNumber) === -1) {
      // if description, means that show codepush update UI, that is also need to yield our sequence and restart app and new sequence
      // but if its a slient codepush update, means theres is no UI (sibling component), then skip this function and continue our sequence
      const isPromptUser = !!remoteCodepushMeta.description
      if (isPromptUser) {
        await dispatch({ type: 'update/UPDATE_PATCH_MODAL_VISIBLE', payload: true })
      } else {
        await dispatch({ type: 'update/INSTALL_PATCH_UPDATE' })
        //  siblingSequence.next()
      }
    } else {
      // here means there is no native update and codepush update then continue the sequence
      //   siblingSequence.next()
    }
  } catch (e) {
    console.log(e)
  }

}

