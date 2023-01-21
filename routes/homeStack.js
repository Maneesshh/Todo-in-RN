import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../Components/login";
import Reg from "../Components/Reg";
import Forgotpw from "../Components/Forgotpw";
import Todo from "../Components/Todo";

const screens = {
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: Reg,
  },
  ForgotPw: {
    screen: Forgotpw,
  },
  Welcome: {
    screen: Todo,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
