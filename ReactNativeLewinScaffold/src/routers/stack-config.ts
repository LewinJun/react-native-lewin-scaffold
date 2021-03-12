import { ParamListBase, RouteProp } from "@react-navigation/core";
import Login from '../screens/login'
import Home from '../screens/home'

export interface ScreenOptions { }

// export interface RouteName extends keyof ParamListBase { }

export interface IStaskConfigItem {
    name: string;
    component: React.ComponentType<any>;
    options?: ScreenOptions | ((props: {
        route: RouteProp<ParamListBase, any>;
        navigation: any;
    }) => ScreenOptions)
}


const StackConfig: Array<IStaskConfigItem> = [
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'Login',
        component: Login
    },
]

export default StackConfig
