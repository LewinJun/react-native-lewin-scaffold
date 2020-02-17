基于react native 0.61.5。react-native redux persist react-navigation code-push等集成的一款脚手架，开发新项目不用浪费前面的半天一天时间，快速开发新项目

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
    "react-navigation": "^4.0.10",
    "react-navigation-stack": "^2.0.15",
    "react-navigation-tabs": "^2.7.0",
```

3. dva-core 1.4.0 版本

> 参考src/bootstrap/redux-dva.js

4. "@babel/plugin-proposal-decorators": "^7.8.3" redux和组件关联使用@connection快速关联，比传统的要方便很多

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

> 4. configs 配置文件 目前有个redux持久化的配置文件persist.js，需要持久化的redux把namespace加入到白名单

> 5. helpers 一些帮助类
    
         react-navigation-helper.js 路由跳转帮助类

         redux-persist.js
        
         redux.js redux帮助类，如一些基本方法dispatch，getState

> 6. models redux的models相关类文件

> 7. routers react-navigation 相关页面和tabbar配置文件 具体相关类可以看头文件注释

> 8. screens 所有的功能模块主页面



> 热更新待加入， 将使用codepush




## 问题解决

### Error: Unable to resolve module `@react-native-community/masked-view` from `node_modules/react-navigation-stack/lib/module/vendor/views/MaskedView.js`

npm i @react-native-community/masked-view
cd ios & pod install 
