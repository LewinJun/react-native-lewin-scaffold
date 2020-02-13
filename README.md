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

## 项目架构目录

> 目录结构

assets 资源

## 问题解决

### Error: Unable to resolve module `@react-native-community/masked-view` from `node_modules/react-navigation-stack/lib/module/vendor/views/MaskedView.js`

npm i @react-native-community/masked-view
cd ios & pod install 
