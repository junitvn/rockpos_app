import React, { PureComponent } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  ToastAndroid
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { lang, configuration } from "../configs/constants";
import { toggleSearch } from "../actions/homeActions";
import { checkPermission } from "../../utils/apiUtils";
import styles from "../themes/default/styles";
import _ from "lodash";

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSearchClick = () => {
    this.props.dispatch(toggleSearch(configuration.searchProduct));
  };

  onScanClick = async () => {
    try {
      let permission = await checkPermission([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      ]);
      if (permission) {
        this.props.navigation.navigate("ScanBarcode");
      } else {
        ToastAndroid.showWithGravity(
          lang.we_need_permission_to_use_this_function,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  onMenuClick = () => {
    console.log("Open menu");
  };

  render() {
    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={this.onMenuClick}
          style={styles.headerLeftPanel}
        >
          <Icon name="md-menu" style={styles.iconMenu} />
        </TouchableOpacity>
        <View style={styles.headerRightPanel}>
          <TouchableOpacity onPress={this.onSearchClick}>
            <Icon name="ios-search" style={styles.iconSearch} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onScanClick}>
            <Image
              source={require("../../assets/scan.png")}
              style={styles.iconScan}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
