import React, { Component } from 'react'
import { View, StyleSheet, Modal, Text, TouchableOpacity, Alert, Image, ScrollView } from 'react-native'
import { ViewBorderBottomLine, ThemeColor } from '../../utils/theme'
import { connect } from 'react-redux'
import { dispatch } from '../../helpers/redux'
import { ThemeButton, BottomButton } from '../../components/Buttons'
import numeral from 'numeral'
import { addCodepushFailedTimes } from '../../models/codepush'
import { restart } from '../../utils/system'
import codepush from 'react-native-code-push'



@connect(({ 'update': updateState }) => {
    let updateContents = null
    try {
      let { description } = updateState.patch.remoteMeta || {}
      console.log("description:" + description)
      description = JSON.parse(description)
      
      if (typeof description === 'string') {
        updateContents = [description]
      } else if (Array.isArray(description) && description.length > 0) {
        updateContents = description
      }
    } catch (e) {
        console.log(e)
    }
  
    return {
      visible: updateState.patchModalVisible,
      updateContents
    }
  })
export default class CodePushModal extends Component {

    state = {
        isUpdating: false,
        downloadPercent: 0
    }

    _update = () => {
        if (this.state.isUpdating) return
    
        this.setState({ isUpdating: true })
        dispatch({
          type: 'update/INSTALL_PATCH_UPDATE',
          payload: {
            statusCallBack: this._statusCallBack,
            progressCallBack: this._downloadProgress
          }
        })
        // codepush 在国内经常会出现没有下载速度的情况，这里在触发更新 5s 后检查是否开始下载
        // 如果没有下载则提示无法更新，避免页面一直卡在下载的页面
        this._timeout = setTimeout(async () => {
          this._hide(() => {
            addCodepushFailedTimes()
            Alert.alert('更新失败','无法连接服务器, 请更换网络后重试', [{ text: '知道了' }])
          })
        }, 5000)
    }
    
    _downloadProgress = percent => {
        if (percent > 0) clearTimeout(this._timeout)
        this.setState({ downloadPercent: percent })
    }
    
    _statusCallBack = status => {
        if (status === codepush.SyncStatus.UPDATE_INSTALLED) {
          this._hide(() => {
            Alert.alert('下载完成', null, [
              {
                text: '下次再说',
                style: 'cancel'
              },
              {
                text: '立即重启',
                onPress: restart
              }
            ])
          })
        } else if (status === codepush.SyncStatus.UNKNOWN_ERROR) {
          this._hide(() => {
            Alert.alert('更新错误', null, [{ text: '无法连接服务器, 请更换网络后重试' }])
          })
        }
    }

    _hide = afterHideCallback => {
        this.setState({ isUpdating: false, downloadPercent: 0 })
        dispatch({ type: 'update/UPDATE_PATCH_MODAL_VISIBLE', payload: false })
        if (typeof afterHideCallback === 'function') {
          setTimeout(afterHideCallback, 300)
        }
      }

    render() {
        const { updateContents } = this.props
        const { visible } = this.props
        if (!visible) return null
        const { isUpdating, downloadPercent } = this.state
        const buttonText = '立即更新' + (isUpdating ? numeral(downloadPercent).format('0.0%') : '')
        return (
            <Modal visible={visible} transparent >
                <View style={[{ alignItems: "center", justifyContent: "center" }, styles.container]}>
                    <View style={styles.content}>
                        <View style={{  height: 44, flexDirection: "row" ,alignItems: "center", justifyContent: "center", ...ViewBorderBottomLine }}>
                            <Image style={{ width: 30, height: 30, marginRight: 10 }} resizeMode={"contain"} source={require('../../assets/icons/update_icon.png')}/>
                            <Text style={{ fontSize: 16, fontWeight: "500" }}>
                                版本更新提示
                            </Text>
                        </View>
                        <ScrollView style={{ padding: 15 }}>
                            <Text style={{ fontSize: 14, marginBottom: 10 }}>更新内容:</Text>
                            {updateContents && updateContents.map((txt, index)=>{
                                return (
                                <Text style={{ fontSize: 15 }} key={"up" + index}>
                                    {`${index + 1}. ${txt}`}
                                </Text>)
                            })}
                        </ScrollView>
                        {/* isUpdating ? numeral(downloadPercent / 10 * 9).format('0.0%') :  */}
                        <BottomButton title={buttonText}  onPress={this._update} activeOpacity={isUpdating ? 1 : 0.6} style={{ marginHorizontal: 10, marginBottom: 10, height: 44 }} children={
                            <View style={{width: isUpdating ? numeral(downloadPercent / 10 * 9).format('0.0%') :  '0%', height: 44,backgroundColor: ThemeColor.main, position: 'absolute', top: 0, left: 0}}/>
                        }/>
                    </View>
                    <TouchableOpacity activeOpacity={.6} onPress={()=>this._hide()}>
                        <Image style={{ width: 40, height: 40,  }} source={require('../../assets/icons/close_update.png')}/>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#0003'
    },
    content: {
      width: '73%',
      minHeight: 272,
      transform: [{ translateY: -30 }],
      backgroundColor: '#fff',
      borderRadius: 3
    },
    background: {
      width: '100%',
      aspectRatio: 3,
      transform: [{ translateY: -2 }]
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3
    },
    updateContentContainer: {
      flex: 1,
      overflow: 'hidden',
      marginTop: 5,
      paddingLeft: 21,
      paddingRight: 15
    },
    versionTitle: {
      marginLeft: 20,
      transform: [{ translateY: -10 }],
      fontSize: 21,
      fontWeight: '600',
      color: '#fff'
    },
    text02: {
      marginBottom: 10,
      fontSize: 15,
      fontWeight: '600',
      color: '#222'
    },
    text03: {
      marginBottom: 6,
      fontSize: 13,
      color: '#424960'
    },
    buttonContainer: {
      paddingVertical: 10
    },
    button: {
      height: 40
    },
    buttonText: {
      fontSize: 16
    },
    downloadingButtonText: {
      color: '#fff',
      fontWeight: '600'
    },
    closeButton: {
      transform: [{ translateY: 30 }]
    }
  })
