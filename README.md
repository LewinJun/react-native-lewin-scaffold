基于react native 0.63.4。react-native redux persist react-navigation code-push等集成的一款脚手架，开发新项目不用浪费前面的半天一天时间，快速开发新项目




> 目前这个脚手架市场上已有app使用

1. 第一框应用享够蜂店：安卓和iOS下载安装链接  http://shareapi.yunxglife.com/download/download.html  iOS应用商店 app链接: https://apps.apple.com/cn/app/%E4%BA%AB%E5%A4%9F%E8%9C%82%E5%BA%97/id1506141299
> 分销平台，输入框很多的一个非常好的实例，包含微信支付和微信分享，原生Android+iOS+React Native+html三种混合开发,html集成了腾讯地图，RN webview加载html地图，html地图获取到经纬度等位置信息传递给RN webview

2. 第二款应用TECHDEAL： https://www.techdeal.cn/mobile-download 安卓: https://techdeal.oss-cn-shanghai.aliyuncs.com/app/techdeal-1.4.apk  iOS app store： https://apps.apple.com/us/app/techdeal/id1525133677
> 技术交易所，包含高德地图，websocket IM聊天(没用第三方平台，自己写的IM聊天系统)，原生Android+iOS+React Native+React(umi)三种混合开发


3. 第三款应用哈喽咪咪 : 安卓下载链接 https://cat-pay.oss-cn-beijing.aliyuncs.com/app/hellomimi_sign.apk iOS appstore: https://apps.apple.com/cn/app/%E5%93%88%E5%96%BD%E5%92%AA%E5%92%AA/id1547972757
> 宠物一站式上门服务，宠物社交(视频，图片)，微信和支付宝支付，本机号码一键登录，微信分享(如有人需要可以联系我，我可以提供RN集成版出来)，原生Android+iOS+React Native+React(umi)三种混合开发

4. 第四款应用已开发完毕，还没上架到市场，此款和上面的三款有点不一样，第四款是原有的原生接入此RN脚手架，安卓(kotlin+java),iOS(OC+swift),接入也有一定的经验，如有兴趣可以找我聊

## 热更使用的是codepush ，服务器在微软国外,下载bundle包可能会比较慢，我这边有解决方案，修改codepush源码可以把bundle包放到自己的oss上，速度非常可观。需要的可以提issues 帮助给我



> 相同网络条件，1.1MB oss下载1s内(测试的这个是0.6s)，而从codepush服务器下载 时间在 10s以上


使用oss下载速度


![image](https://github.com/LewinJun/react-native-lewin-scaffold/blob/master/fast.gif)

使用codepush文件下载

![image](https://github.com/LewinJun/react-native-lewin-scaffold/blob/master/slow.gif)


## 脚手架说明

1. redux+persist 状态管理和redux持久化

```json
    "react-redux": "7.1.3",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-persist-transform-filter": "^0.0.20",
    "redux-saga": "^1.1.3",
```

2. react-navigation 页面路由
```json
    "@react-navigation/bottom-tabs": "^5.11.8",
    "@react-navigation/native": "^5.9.3",
    "@react-navigation/stack": "^5.14.3",
```

3. dva-core 2.0.4 版本

> 参考src/bootstrap/redux-dva.js

4. "@babel/plugin-proposal-decorators": "^7.11.5" redux和组件关联使用@connection快速关联，比传统的要方便很多

```javascript
const connectRedux = ({ user }) => ({
    isLogin: user.isLogin
  })
@connect(connectRedux)
export default class HomeScreen extends PureComponent {
    render() {
        const { isLogin } = this.props
        return (
            <View style={{ flex: 1 }}>
                <Text>首页</Text>
                <TouchableOpacity onPress={()=>{
                }} style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ width: 200, height: 50,color: "red" }}>{isLogin ? "退出登录" : "登录"}</Text>
                </TouchableOpacity>
                
            </View>
        )
}
```

## 项目架构目录

### 目录结构

>1. assets 资源

>2. bootstrap app启动相关代码文件

         index.js app启动的主入口，包含redux, persistor持久化

         lifecycle.js app启动生命周期，核心的两个方法

```javascript
   /**
    * 所有页面出现之前执行
    * **不要添加网络请求相关操作，如果超时会导致应用一直等待在启动页**
    */
    export const beforeRunApp = async function () {

    }

    /**
     * redux 数据还原后执行
     */
    export const afterRehydrated = async function () {
        
    }
```

        redux-dva.js 我们用的dva-core管理redux等第三方框架

        redux-logger.js redux相关日志输出debug

        redux-persist.js redux本地持久化配置

> 3. components 自己自定义的一些组件目录

> 4. configs 配置文件 目前有个redux持久化的配置文件persist.ts，需要持久化的redux把namespace加入到白名单

> 5. help 一些帮助类
    
         react-navigation.ts 路由跳转帮助类

         redux-persist.ts
        
         redux.ts redux帮助类，如一些基本方法dispatch，getState

> 6. models redux的models相关类文件

> 7. routers react-navigation 相关页面和tabbar配置文件 具体相关类可以看头文件注释

> 8. screens 所有的功能模块主页面



> 热更新,使用codepush




## 问题解决

### Error: Unable to resolve module `@react-native-community/masked-view` from `node_modules/react-navigation-stack/lib/module/vendor/views/MaskedView.js`

npm i @react-native-community/masked-view
cd ios & pod install 
