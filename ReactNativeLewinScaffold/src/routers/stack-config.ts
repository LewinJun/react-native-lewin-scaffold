import { ParamListBase, RouteProp } from "@react-navigation/core";
import { CardStyleInterpolators } from "@react-navigation/stack";
import Login from '../screens/login'
import RegisterScreen from '../screens/register/RegisterScreen'


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
        name: 'Login',
        component: Login,
        options: {
            cardStyleInterpolator: props => CardStyleInterpolators.forVerticalIOS(props),
        }
    },
    {
        name: 'Register',
        component: RegisterScreen
    }
]

export default StackConfig
