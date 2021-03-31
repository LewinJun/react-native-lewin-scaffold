import { StackRouterOptions, RouteProp, useNavigation, NavigationProp, ParamListBase, useRoute } from "@react-navigation/native";
// StackNavigationOptions, StackNavigationProp
// NavigationScreenConfig<
//       Options,
//       NavigationScreenPropType
//     >

export interface Props {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<ParamListBase, string>;
}
