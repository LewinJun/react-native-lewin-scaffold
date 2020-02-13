基于react native 0.61.5

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

> 目录结构

assets 资源



## 问题解决

### Error: Unable to resolve module `@react-native-community/masked-view` from `node_modules/react-navigation-stack/lib/module/vendor/views/MaskedView.js`

npm i @react-native-community/masked-view
cd ios & pod install 
