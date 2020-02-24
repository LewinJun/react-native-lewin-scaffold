/**
 * code push 更新类
 */

 import codepush from 'react-native-code-push'
 import { Alert, Platform } from 'react-native'
import { config } from '../configs';

 export const codepushCheck = async ()=> {
     try{
        const depKey = Platform.OS === "ios" ? config.CODEPUSH_KEY_IOS : config.CODEPUSH_KEY_ANDROID
        const codepushNewVersion = await codepush.checkForUpdate(depKey) || {}
        console.log(codepushNewVersion)
     }catch(e){
        console.log(e)
     }
    
 }

