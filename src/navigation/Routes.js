import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeContainer from "../containers/HomeContainer";
import ScanBarcodeContainer from "../containers/ScanBarcodeContainer";

const Routes = createStackNavigator(
  {
    Home: {
      screen: HomeContainer
    },
    ScanBarcode: {
      screen: ScanBarcodeContainer
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

let Navigation = createAppContainer(Routes);
export default Navigation;
