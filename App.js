import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screen/HomeScreen";
import CalendarScreen from "./src/screen/CalendarScreen";
import MapScreen from "./src/screen/MapScreen";
import Mypage from "./src/screen/Mypage";
import ColorScreen from "./src/screen/ColorScreen";
import ColorChange from "./src/screen/ColorChange";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Calendar: CalendarScreen,
    Map: MapScreen,
    Mypage: Mypage,
    Color: ColorScreen,
    ColorChange: ColorChange,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Run Run Run",
    },
  }
);

export default createAppContainer(navigator);
