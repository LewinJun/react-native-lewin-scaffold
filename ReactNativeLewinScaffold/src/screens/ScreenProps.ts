import { NavigationScreenProp, NavigationScreenConfig } from "@react-navigation/native";
import { StackNavigationOptions, StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
// StackNavigationOptions, StackNavigationProp
// NavigationScreenConfig<
//       Options,
//       NavigationScreenPropType
//     >

export declare type NavigationOptionsType = NavigationScreenConfig<StackNavigationOptions, StackNavigationProp>

export interface NavigationOptions {
    navigationOptions: NavigationOptionsType
}

export interface Props {
    navigation: NavigationScreenProp<{}, NavigationOptions>
}
