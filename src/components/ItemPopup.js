import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import styles from "../themes/default/styles";
import { FlatList } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import _ from "lodash";
import { lang, configuration } from "../configs/constants";
import ImageChooser from "./ImageChooser";
import ItemTextInput from "./ItemTextInput";
import { changeCombination } from "../actions/cartActions";
import { sprintf } from "printj";
import withPreventDoubleClick from "./withPreventDoubleClick";
import { addToCartWithoutCustomization } from "../../utils/cartUltils";
import { loadingItem } from "../actions/homeActions";
const TouchableEx = withPreventDoubleClick(TouchableOpacity);

export default class ItemPopup extends Component {
  constructor(props) {
    super(props);
    const { item } = this.props;
    this.item = item;
    let combinations = item.coms;
    let colors = [];
    let sizes = [];
    if (combinations) {
      _.map(combinations, item => {
        colors.push({
          ...item.attributes[3],
          is_default: item.is_default
        });
        sizes.push({
          ...item.attributes[1],
          is_default: item.is_default
        });
      });
    }
    sizes = _.uniqBy(sizes, "value");
    sizes = _.orderBy(sizes, ["id_attribute"], ["asc"]);
    colors = _.uniqBy(colors, "value");
    let defaultCombination = _.find(combinations, "is_default");
    let selectedSize, selectedColor;
    selectedSize = defaultCombination.attributes[1].id_attribute;
    selectedColor = defaultCombination.attributes[3].id_attribute;
    if (item.product_combination) {
      selectedSize = _.head(item.product_combination).attributes[1]
        .id_attribute;
      selectedColor = _.head(item.product_combination).attributes[3]
        .id_attribute;
    }
    let requiredTxt = [];
    requiredTxt = _.times(
      _.size(item.customization_fields.text_fields),
      _.constant(true)
    );
    let requiredFile = [];
    requiredFile = _.times(
      _.size(item.customization_fields.image_fields),
      _.constant(true)
    );
    this.state = {
      colors,
      sizes,
      firstItem: this.props.item,
      txtChanged: false,
      fileChanged: false,
      requiredTxt,
      requiredFile,
      selectedSize,
      selectedColor,
      popupHeight: 540
    };
  }

  componentWillMount() {
    const { selectedSize, selectedColor } = this.state;
    this.checkCombinationStock(selectedSize, selectedColor);
  }

  componentWillUpdate(nextProps, nextState) {
    const { selectedSize, selectedColor } = nextState;
    this.checkCombinationStock(selectedSize, selectedColor);
  }

  onItemAttributeClick = (item, type) => {
    if (type == "Size") {
      this.setState({
        selectedSize: item.id_attribute
      });
    } else {
      this.setState({
        selectedColor: item.id_attribute
      });
    }
  };

  checkCombinationStock = (size, color) => {
    let product_combination = {};
    if (this.item.has_combinations > 0) {
      product_combination = _.filter(this.item.coms, function(combination) {
        return (
          combination.attributes[3].id_attribute == color &&
          combination.attributes[1].id_attribute == size
        );
      });

      if (_.isEmpty(product_combination)) {
        product_combination = false;
      } else {
        let combination_key = _.findKey(this.item.coms, function(combination) {
          return (
            combination.attributes[3].id_attribute == color &&
            combination.attributes[1].id_attribute == size
          );
        });
        _.map(product_combination, combination => {
          _.assign(combination, { combination_key });
        });
      }
      this.item = _.assign({}, this.item, {
        product_combination
      });
    }
  };

  onUploadImage = (value, index) => {
    let image_fields = _.cloneDeep(this.item.customization_fields.image_fields);
    image_fields[index] = value;
    this.item.customization_fields.image_fields = image_fields;
    this.setState({
      fileChanged: true
    });
  };

  onChangeInput = (value, index) => {
    let text_fields = _.cloneDeep(this.item.customization_fields.text_fields);
    text_fields[index] = value;
    this.item.customization_fields.text_fields = text_fields;
    this.setState({
      txtChanged: true
    });
  };

  checkRequiredInput = (required, index) => {
    let { requiredTxt } = this.state;
    requiredTxt[index] = required;
    this.setState({
      requiredTxt
    });
  };

  checkRequiredFile = (required, index) => {
    let { requiredFile } = this.state;
    requiredFile[index] = required;
    this.setState({
      requiredFile
    });
  };

  addItemToCart = () => {
    const { dispatch, onCloseClick, idShop, idCart } = this.props;
    const { image_fields, text_fields } = this.item.customization_fields;
    let textFields = [];
    let imageFields = [];
    dispatch(loadingItem(true));
    if (!_.isEmpty(image_fields)) {
      _.map(image_fields, image_field => {
        imageFields[image_field.id_customization_field] = image_field.value;
      });
    }
    if (!_.isEmpty(text_fields)) {
      _.map(text_fields, text_field => {
        textFields[text_field.id_customization_field] = text_field.value;
      });
    }
    const addToCartParams = {
      id_product: this.item.id_product,
      id_product_attribute: this.item.product_combination
        ? _.head(this.item.product_combination).combination_key
        : 0,
      id_shop: idShop,
      id_cart: idCart,
      text_fields: textFields,
      image_fields: imageFields,
      dispatch
    };
    addToCartWithoutCustomization(addToCartParams);
    onCloseClick();
  };

  changeCombination = () => {
    const { dispatch, onCloseClick, item } = this.props;
    dispatch(changeCombination(this.item, item));
    onCloseClick();
  };

  keyExtractor = (item, index) => index.toString();

  renderSize = ({ item, index }) => {
    return (
      <TouchableEx
        style={[
          styles.itemAttributeContainer,
          item.id_attribute == this.state.selectedSize
            ? styles.selectedItemAttribute
            : ""
        ]}
        onPress={() => this.onItemAttributeClick(item, "Size")}
      >
        <Text style={styles.textCombinationAttribute}>{item.value}</Text>
      </TouchableEx>
    );
  };

  renderColor = ({ item, index }) => {
    return (
      <TouchableEx
        style={[
          styles.itemAttributeContainer,
          item.id_attribute == this.state.selectedColor
            ? styles.selectedItemAttribute
            : ""
        ]}
        onPress={() => this.onItemAttributeClick(item, "Color")}
      >
        <Text style={styles.textCombinationAttribute}>{item.value}</Text>
      </TouchableEx>
    );
  };

  render() {
    const {
      item,
      customizations,
      onCloseClick,
      changeCombination
    } = this.props;
    const {
      requiredTxt,
      requiredFile,
      sizes,
      colors,
      txtChanged,
      fileChanged
    } = this.state;
    let allow_order_oos = !(
      !_.isEmpty(this.item.product_combination) &&
      Number(_.head(this.item.product_combination).quantity) <= 0 &&
      !_.head(this.item.product_combination).allow_ordering_out_of_stock
    );
    let requiredCus = _.concat(requiredTxt, requiredFile);
    let allFilled = true;
    let isTxtChanged = changeCombination ? txtChanged : true;
    let isFileChanged = changeCombination ? fileChanged : true;
    const { firstItem } = this.state;
    let isItemChanged = !_.isEqual(this.item, firstItem);
    _.find(requiredCus, field => {
      if (!field) allFilled = false;
    });
    return (
      <View style={styles.dialogContainer}>
        <View style={styles.flex1}>
          <View style={styles.titleBarPopup}>
            <TouchableOpacity
              style={styles.buttonPopupPanel}
              onPress={onCloseClick}
            >
              <MaterialIcons name="clear" style={styles.xButton} />
            </TouchableOpacity>
            <View style={styles.titlePopupPanel}>
              <Text style={styles.textTitlePopup}>{item.name}</Text>
              <Text
                style={
                  this.item.product_combination
                    ? styles.popupTxt
                    : styles.redTxt
                }
              >
                {this.item.product_combination
                  ? sprintf(
                      configuration.format.stock,
                      lang.stock,
                      _.size(this.item.product_combination) > 0
                        ? _.head(this.item.product_combination).quantity
                        : item.quantity
                    )
                  : lang.this_combination_does_not_exist_for_this_product}
              </Text>
            </View>
            <TouchableEx
              style={[styles.buttonCheckPopupPanel]}
              disabled={
                allFilled &&
                this.item.product_combination &&
                (isTxtChanged || isItemChanged || isFileChanged) &&
                allow_order_oos
                  ? false
                  : true
              }
              onPress={() => {
                !changeCombination
                  ? this.addItemToCart()
                  : this.changeCombination();
              }}
            >
              <MaterialIcons
                name="check"
                style={[
                  styles.checkButton,
                  allFilled &&
                  this.item.product_combination &&
                  (isTxtChanged || isItemChanged || isFileChanged) &&
                  allow_order_oos
                    ? null
                    : styles.xButton
                ]}
              />
            </TouchableEx>
          </View>
          <KeyboardAvoidingView behavior="padding" enabled>
            <ScrollView style={styles.contentPopup}>
              <View style={styles.variantContainer}>
                {item.has_combinations > 0 && (
                  <View>
                    <Text style={styles.textSelectAtrribute}>
                      {lang.select_size}
                    </Text>
                    <FlatList
                      data={sizes}
                      numColumns={5}
                      renderItem={this.renderSize}
                      keyExtractor={this.keyExtractor}
                    />
                    <Text style={styles.textColorAttribute}>
                      {lang.select_color}
                    </Text>
                    <FlatList
                      data={colors}
                      numColumns={5}
                      renderItem={this.renderColor}
                      keyExtractor={this.keyExtractor}
                    />
                  </View>
                )}
                {item.has_customizable > 0 &&
                  _.map(customizations.image_fields, (image, index) => {
                    return (
                      <ImageChooser
                        key={index}
                        onUploadImage={this.onUploadImage}
                        customization={image}
                        index={index}
                        checkRequiredFile={this.checkRequiredFile}
                      />
                    );
                  })}
                {item.has_customizable > 0 &&
                  _.map(customizations.text_fields, (text, index) => {
                    return (
                      <ItemTextInput
                        key={index}
                        customization={text}
                        index={index}
                        checkRequiredInput={this.checkRequiredInput}
                        onChangeInput={this.onChangeInput}
                      />
                    );
                  })}
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}
