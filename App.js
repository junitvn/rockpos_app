import React, { Component } from "react";
import Root from "./src/navigation/ReduxNavigation";
import { YellowBox } from "react-native";

export default class App extends Component {
  render() {
    YellowBox.ignoreWarnings(["ViewPagerAndroid"]);
    YellowBox.ignoreWarnings(["Slider"]);
    return <Root />;
  }
}
