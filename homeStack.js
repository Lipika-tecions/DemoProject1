import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'
import Login from "./loginScreen"
import CheckIn from "./checkIn";

const screen ={
    Login: {
        screen: Login
    },
    CheckIn: {
        screen: CheckIn
    },
}

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack)
