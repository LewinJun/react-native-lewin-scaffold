基于react native 0.61.5

## 脚手架说明

1. redux+persist

```json
    "react-redux": "7.1.3",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-persist-transform-filter": "^0.0.20",
    "redux-saga": "^1.1.3",
```



## 问题解决

### Error: Unable to resolve module `@react-native-community/masked-view` from `node_modules/react-navigation-stack/lib/module/vendor/views/MaskedView.js`

npm i @react-native-community/masked-view
cd ios & pod install 
