import DeviceInfo from 'react-native-device-info'
import compareVersion from 'compare-versions'
import { getState } from '../helpers/redux'

const compare = (...args) => {
  try {
    return compareVersion(...args)
  } catch (e) {
    return 0
  }
}

const getNativeVersion = () => {
  return DeviceInfo.getVersion()
}

const getCodepushVersion = () => {
  const globalState = getState()
  const patchMeta = globalState['update'].patch.localMeta

  return patchMeta ? patchMeta.label : null
}

const getFullVerson = () => {
  const appVersion = DeviceInfo.getReadableVersion()
  const codepushVerson = getCodepushVersion()
  return codepushVerson ? `${appVersion}_${codepushVerson}` : appVersion
}

const getVersion = ({ withCodepushVersion } = {}) => {
  const majorAndMinorVersion = getNativeVersion()

  if (!withCodepushVersion) {
    return majorAndMinorVersion
  }

  const codepushVerson = getCodepushVersion()

  if (codepushVerson) {
    return `${majorAndMinorVersion} (${codepushVerson})`
  }

  return majorAndMinorVersion
}

export default {
  compare,
  getNativeVersion,
  getCodepushVersion,
  getFullVerson,
  getVersion
}
