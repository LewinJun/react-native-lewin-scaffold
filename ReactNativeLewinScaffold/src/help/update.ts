import { Alert, Linking, Clipboard, Platform } from 'react-native'
import versionUtil from '../utils/version'
import compareVersions from 'compare-versions'
import { toast } from '../utils/toast'

export interface NativeUpdateInfo {
  download_url: string;
  ios: NativeUpdateItemInfo;
  android: NativeUpdateItemInfo;
}

export interface NativeUpdateItemInfo {
  desc: string; // 更新内容 "['']"
  version: string;// 1.1
  url: string; // 下载url
  force: boolean; // 是否强制更新
}

export interface NativeFactory {
  meta: NativeUpdateItemInfo | null;
  check: Function;
  update: Function;
}

/**
 * @example

import { native } from './helpers/update'

(async function () {
  const enableUpdate = await native.check()
  if (enableUpdate) { // 弹出一个弹窗，用户确认后检查更新
    native.update()
  }
})()

 */
export const native = (function () {
  const UPDATE_CHECK_LINK = 'https://cat-pay.oss-cn-beijing.aliyuncs.com/app/update.json'
  let downloadUrl: string | null = null
  const factory: NativeFactory = {
    meta: null,
  }

  const openDownloadUrl = async function () {
    if (downloadUrl) {
      const canOpen = await Linking.canOpenURL(downloadUrl)
      if (canOpen) {
        Linking.openURL(downloadUrl)
      } else {
        toast('打开官网失败，已将链接复制至剪贴板，请自行打开')
        Clipboard.setString(downloadUrl)
      }
    }
  }

  /**
   * 检查是否存在原生版本更新
   * @return {boolean}
   */
  factory.check = async function () {
    // 获取更新信息
    try {
      const response = await fetch(UPDATE_CHECK_LINK, { headers: { 'Cache-Control': 'no-cache' } })
      const result1 = await response.json()
      const result = result1.update
      console.log(result)
      downloadUrl = result['download_url']
      factory.meta = result[Platform.OS.toLowerCase()]
      // factory.meta = result['android']
    } catch (e) {
      // 获取更新信息失败
    }

    // 检查版本判断是否更新
    const localVersion = versionUtil.getNativeVersion()
    const onlineVersion = factory.meta?.version
    try {
      return compareVersions(localVersion, onlineVersion) === -1
    } catch (e) {
      // 可能是版本号格式不正确
    }
    return false
  }

  /**
   * 依据已经获取的更新信息进行更新(不会再次判断是否是新版本，只会按照 meta 数据里的信息下载安装)
   */
  factory.update = async function () {

    if (factory.meta === null) {
      return
    }

    const updateUrl = factory.meta.url
    const canOpen = await Linking.canOpenURL(updateUrl)
    if (canOpen) {
      Linking.openURL(updateUrl)
    } else {
      Alert.alert('更新失败', null, [
        { text: '取消更新', style: 'cancel' },
        { text: '官网下载', onPress: openDownloadUrl }
      ])
    }
  }

  return factory
})()
