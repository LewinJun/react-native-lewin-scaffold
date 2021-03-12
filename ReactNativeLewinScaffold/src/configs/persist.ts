import AsyncStorage from "@react-native-community/async-storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

export default {
    key: 'redux-local',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
    whitelist: ['user']
}