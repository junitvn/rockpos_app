import React, { Component } from "react";
import { View, Text } from "react-native";
import { RNCamera } from "react-native-camera";
import _ from "lodash";
import Modal from "react-native-modal";
import { configuration, lang, api } from "../configs/constants";
import styles from "../themes/default/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import BarcodeMask from "react-native-barcode-mask";
import { toFormData } from "../../utils/apiUtils";
import Axios from "axios";
import { openPopup, loadingItem } from "../actions/homeActions";
import { addToCartWithoutCustomization } from "../../utils/cartUltils";

export default class ScanBarcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisibale: false,
      type: "back",
      data: this.props.data,
      isScanning: true,
      idCart: "",
      idShop: ""
    };
  }

  componentDidMount() {
    const { idCart, idShop } = this.props.data;
    this.setState({
      idCart,
      idShop
    });
  }

  onBackClick = () => {
    this.props.navigation.goBack();
  };

  onReverseClick = () => {
    const { type } = this.state;
    this.setState({
      type: type == "back" ? "front" : "back"
    });
  };

  setTimeoutHideModal = () => {
    setTimeout(() => {
      this.setState({
        isModalVisibale: false,
        isScanning: true
      });
    }, configuration.warningTime);
  };

  onBarCodeRead = barcode => {
    this.setState({ isScanning: false });
    /* SCAN WITH OFFLINE DATABASE */
    // const { data } = this.state;
    // let found = _.find(data, product => {
    //   return product.has_combinations == "1"
    //     ? _.find(
    //         product.combinations,
    //         combination => combination.barcode == barcodes.data
    //       )
    //     : _.find(data, item => item.barcode == barcodes.data);
    // });
    if (this.state.isScanning) {
      const { dispatch, navigation } = this.props;
      const self = this;
      let data = {
        endpoint: "/product/search",
        keyword: barcode,
        search_by: "barcode"
      };
      let form = toFormData(data, null, "");
      Axios({
        method: "post",
        url: api,
        data: form
      })
        .then(function(response) {
          const { product, product_properties } = response.data.data;
          if (product) {
            const {
              has_customizable,
              id_product,
              id_product_attribute
            } = product;
            const { idCart, idShop } = self.state;
            let itemInScope = {};
            let combinations = {};
            let customization_fields = {};
            let hasRequiredField = false;
            if (product_properties) {
              (combinations = product_properties.combinations),
                (customization_fields =
                  product_properties.customization_fields);
            }
            itemInScope = {
              ...product,
              coms: combinations,
              customization_fields
            };
            _.map(customization_fields, fields => {
              let requiredField = _.find(fields, item => item.required == "1");
              _.isUndefined(requiredField) ? null : (hasRequiredField = true);
            });
            if (has_customizable > 0 && hasRequiredField) {
              self.setState({ isScanning: false });
              const currentItem = {
                data: itemInScope
              };
              navigation.navigate("Home");
              dispatch(loadingItem(true));
              dispatch(openPopup(currentItem));
            } else {
              navigation.navigate("Home");
              dispatch(loadingItem(true));
              const addToCartParams = {
                id_product,
                id_product_attribute,
                id_shop: idShop,
                id_cart: idCart,
                dispatch: self.props.dispatch
              };
              addToCartWithoutCustomization(addToCartParams);
            }
          } else {
            self.setState(
              {
                isModalVisibale: true,
                isScanning: false
              },
              self.setTimeoutHideModal
            );
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  onRefresh = () => {
    this.setState({ isScanning: true });
  };

  render() {
    const { isModalVisibale, type, isScanning } = this.state;
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={type}
          flashMode={RNCamera.Constants.FlashMode.on}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            isScanning && !_.isEmpty(barcodes)
              ? this.onBarCodeRead(_.head(barcodes).data)
              : null;
          }}
        >
          <View style={styles.barcodeContainer}>
            <BarcodeMask
              width={configuration.finderWidth}
              height={configuration.finderHeight}
            />
            <View style={styles.headerBarScan}>
              <TouchableOpacity onPress={this.onBackClick}>
                <Ionicons name="md-arrow-back" style={styles.reverseIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onReverseClick}>
                <Ionicons
                  name="ios-reverse-camera"
                  style={styles.reverseIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </RNCamera>
        <Modal isVisible={isModalVisibale} style={styles.bottomModal}>
          <View style={styles.warning}>
            <Text style={styles.textNotExist}>{lang.barcode_not_exist}</Text>
          </View>
        </Modal>
      </View>
    );
  }
}
