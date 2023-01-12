import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../Components/login";
import Reg from "../Components/Reg";

const screens = {
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: Reg,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
