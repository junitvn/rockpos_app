import React, { PureComponent } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import dismissKeyboard from "react-native/Libraries/Utilities/dismissKeyboard";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import Dialog from "react-native-popup-dialog";
import styles from "../themes/default/styles";
import _ from "lodash";
import { sprintf } from "printj";
import { limitText, formatPrice, displayPrice } from "../../utils/apiUtils";
import { loadingItem } from "../actions/homeActions";
import { configuration, lang } from "../configs/constants";
import { editCart, removeProductFromCart } from "../../utils/cartUltils";

export default class ItemCart extends PureComponent {
  constructor(props) {
    super(props);
    const { item } = props;
    let discount = {
      type: item.reduction_type ? item.reduction_type : configuration.amount,
      value: item.reduction
        ? formatPrice(item.reduction)
        : configuration.defaultPrice
    };
    const { quantity, price_without_reduction } = item;
    this.state = {
      discount,
      visible: false,
      item,
      quantity,
      prev_qty: quantity,
      total_without_reduction: price_without_reduction,
      price_without_reduction,
      outOfRangePercent: false,
      outOfRangeAmount: false,
      isValidated: false,
      isValidatedQty: true,
      id_cart: props.data.idCart,
      isHaveChanged: false
    };
    this.currentItem = props.item;
    this.lastDiscount = discount;
    this.lastQty = quantity;
    this.currentValidateQty = false;
  }

  componentWillReceiveProps(nextProps) {
    let clone = _.cloneDeep(nextProps);
    const { item, data } = clone;
    const { quantity } = item;
    let reduction = formatPrice(item.reduction);
    let discount = {
      type: item.reduction_type ? item.reduction_type : configuration.amount,
      value: item.reduction
        ? formatPrice(reduction)
        : configuration.defaultPrice
    };
    let total_without_reduction = item.price_without_reduction * quantity;
    this.setState({
      item,
      quantity,
      prev_qty: item.quantity,
      total_without_reduction,
      id_cart: data.idCart,
      discount
    });
    this.lastDiscount = discount;
    this.currentItem = item;
  }

  showPopup = () => {
    this.setState({ visible: true });
  };

  closePopup = () => {
    const { quantity, total } = this.currentItem;
    this.setState({
      visible: false,
      discount: this.lastDiscount,
      outOfRangePercent: false,
      outOfRangeAmount: false,
      isValidated: false,
      quantity,
      total
    });
  };

  onDiscountTypeChange = type => {
    const { item } = this.props;
    const { quantity } = this.state;
    let discountValue = formatPrice(item.reduction);
    const isFocused = this.discountInput.isFocused();
    let value =
      !_.isEqual(Number(item.reduction), configuration.defaultReductionValue) &&
      _.isEqual(type, item.reduction_type)
        ? discountValue
        : configuration.defaultPrice;
    let formatedType = _.isEqual(
      item.reduction_type,
      configuration.defaultReductionType
    )
      ? configuration.amount
      : item.reduction_type;
    let isHaveChangedDiscount = !(
      _.isEqual(Number(value), Number(item.reduction)) &&
      _.isEqual(type, formatedType)
    );
    let isHaveChangedQty = !_.isEqual(quantity, item.quantity);
    this.setState(
      {
        discount: {
          type,
          value: isFocused ? configuration.emptyPrice : value
        },
        isHaveChanged: isHaveChangedDiscount || isHaveChangedQty,
        isValidatedQty:
          !_.isEqual(quantity, configuration.emptyString) &&
          !_.isEqual(Number(quantity), configuration.noQuantity)
      },
      () => {
        this.validateDiscount(type, this.state.discount.value);
      }
    );
  };

  validateDiscount = (type, discount) => {
    const { item, isHaveChanged } = this.state;
    this.setState({
      outOfRangePercent: false,
      isValidated: true,
      outOfRangeAmount: false,
      isHaveChanged: !_.isEqual(
        this.state.discount.value,
        configuration.emptyPrice
      )
        ? isHaveChanged
        : false
    });
    let priceWithoutReduction = _.isEqual(item.discount, 0)
      ? item.price_with_reduction
      : item.price_without_reduction;
    if (_.isEqual(type, configuration.percentage)) {
      if (discount > configuration.maxPercentageValue)
        this.setState({ outOfRangePercent: true, isValidated: false });
      else
        this.setState({
          outOfRangePercent: false,
          isValidated: true
        });
    } else {
      if (discount > priceWithoutReduction)
        this.setState({ outOfRangeAmount: true, isValidated: false });
      else
        this.setState({
          outOfRangeAmount: false,
          isValidated: true
        });
    }
  };

  onDiscountFocus = () => {
    const { discount } = this.state;
    this.setState({
      discount: {
        type: discount.type,
        value: configuration.emptyPrice
      },
      isHaveChanged: false
    });
  };

  onDiscountBlur = () => {
    const { item, discount, quantity } = this.state;
    const { type, value } = discount;
    let discountValue = formatPrice(value);
    !_.isEqual(type, item.reduction_type)
      ? (discountValue = formatPrice(value))
      : _.isEqual(value, configuration.emptyString)
      ? (discountValue = formatPrice(item.reduction))
      : null;
    let formatedType = _.isEqual(
      item.reduction_type,
      configuration.defaultReductionType
    )
      ? configuration.amount
      : item.reduction_type;
    let isHaveChangedDiscount = !(
      _.isEqual(Number(discountValue), Number(item.reduction)) &&
      _.isEqual(type, formatedType)
    );
    this.setState(
      {
        discount: {
          type,
          value: discountValue
        },
        isHaveChanged:
          isHaveChangedDiscount ||
          !_.isEqual(Number(quantity), Number(item.quantity))
      },
      () => {
        this.validateDiscount(type, discountValue);
      }
    );
  };

  changeDiscount = discount => {
    const { item } = this.state;
    const { type } = this.state.discount;
    let overLength = false;
    let formatedType = _.isEqual(
      item.reduction_type,
      configuration.defaultReductionType
    )
      ? configuration.amount
      : item.reduction_type;
    if (_.startsWith(discount, "00"))
      discount = discount.slice(1, discount.length);
    if (_.isFinite(discount)) discount = configuration.defaultPrice;
    if (
      _.isEqual(type, configuration.percentage) &&
      discount > configuration.maxPercentageValue
    ) {
      discount = discount.slice(0, discount.length - 1);
      overLength = true;
    } else overLength = false;
    let isHaveChanged = !(
      _.isEqual(Number(discount), Number(item.reduction)) &&
      _.isEqual(type, formatedType)
    );
    let regex = new RegExp(configuration.regexPrice);
    let match = discount.match(regex);
    (match || _.isEmpty(discount)) && !overLength
      ? this.setState(
          {
            discount: {
              type,
              value: discount
            },
            isHaveChanged
          },
          () => this.validateDiscount(type, discount)
        )
      : null;
  };

  validateAfterBlur = () => {
    const { item, quantity, discount } = this.state;
    let formatedType = _.isEqual(
      item.reduction_type,
      configuration.defaultReductionType
    )
      ? configuration.amount
      : item.reduction_type;
    let isHaveChangedDiscount = !(
      _.isEqual(Number(discount.value), Number(item.reduction)) &&
      _.isEqual(discount.type, formatedType)
    );
    this.setState({
      isValidatedQty: !_.isEqual(this.state.quantity, configuration.emptyQty),
      isHaveChanged:
        !_.isEqual(Number(quantity), Number(item.quantity)) ||
        isHaveChangedDiscount
    });
  };

  changeNoItem = amount => {
    const { discount, quantity, item } = this.state;
    let newQuantity = Number(quantity) + amount;
    if (newQuantity < 1) return;
    this.lastQty = newQuantity;
    let formatedType = _.isEqual(
      item.reduction_type,
      configuration.defaultReductionType
    )
      ? configuration.amount
      : item.reduction_type;
    let newTotal = newQuantity * item.price_without_reduction;
    let isHaveChangedDiscount = !(
      _.isEqual(Number(discount.value), Number(item.reduction)) &&
      _.isEqual(discount.type, formatedType)
    );
    this.setState(
      {
        quantity: Number(newQuantity),
        total_without_reduction: formatPrice(newTotal),
        isValidatedQty: !_.isEqual(newQuantity, configuration.emptyQty),
        isValidated: true,
        isHaveChanged:
          !_.isEqual(Number(newQuantity), Number(item.quantity)) ||
          isHaveChangedDiscount
      },
      () => this.validateDiscount(discount.type, discount.value)
    );
  };

  onChangeQty = value => {
    const { discount, item } = this.state;
    if (!_.isFinite(Number(value))) value = configuration.defaultQty;
    let total_without_reduction =
      this.state.item.price_without_reduction * Number(value);
    let formatedType = _.isEqual(
      item.reduction_type,
      configuration.defaultReductionType
    )
      ? configuration.amount
      : item.reduction_type;

    const isValidatedQty =
      !_.isEqual(value, configuration.emptyQty) &&
      !_.isEqual(Number(value), configuration.defaultReductionValue);
    isValidatedQty ? (this.lastQty = value) : null;
    let isHaveChangedDiscount = !(
      _.isEqual(Number(discount.value), Number(item.reduction)) &&
      _.isEqual(discount.type, formatedType)
    );
    this.setState(
      {
        quantity: value
          ? _.isEqual(Number(value), configuration.noQuantity)
            ? value
            : Number(value)
          : configuration.emptyQty,
        total_without_reduction: formatPrice(total_without_reduction),
        isValidatedQty,
        isValidated: true,
        isHaveChanged:
          !_.isEqual(Number(value), Number(item.quantity)) ||
          isHaveChangedDiscount
      },
      () => this.validateDiscount(discount.type, discount.value)
    );
  };

  onChangeQtyBlur = () => {
    const { quantity } = this.state;
    if (_.isEqual(quantity, configuration.emptyQty))
      this.setState(
        {
          quantity: this.currentItem.quantity
        },
        () => {
          this.validateAfterBlur();
        }
      );
    else {
      this.setState(
        {
          quantity: _.isEqual(Number(quantity), configuration.noQuantity)
            ? this.currentItem.quantity
            : Number(quantity)
        },
        () => {
          this.validateAfterBlur();
        }
      );
    }
  };

  onCloseClick = () => {
    this.setState({ visible: false });
  };

  updateProduct = () => {
    this.props.dispatch(loadingItem(true));
    const { quantity, id_cart, discount, item, prev_qty } = this.state;
    const { id_product, id_product_attribute } = item;
    if (item.has_customize) {
      let customization = [];
      let customQtyChanged = quantity - prev_qty;
      let customOperator =
        customQtyChanged > 0
          ? configuration.upOperator
          : configuration.downOperator;
      if (item.custom_data) {
        let type = item.custom_data.image_fields
          ? configuration.image_fields
          : configuration.text_fields;
        let customItemInfo = {
          id_customization: _.head(item.custom_data[type]).id_customization,
          quantity: Math.abs(customQtyChanged),
          operator: customOperator,
          type: _.isEqual(type, configuration.image_fields)
            ? configuration.file
            : configuration.text,
          id_customization_field: _.head(item.custom_data[type])
            .id_customization_field
        };
        customization.push(customItemInfo);
      }
      const customParams = {
        id_cart,
        quantity: item.custom_data ? 0 : Math.abs(customQtyChanged),
        operator: customOperator,
        id_product,
        id_product_attribute,
        discount: discount.value,
        discount_type: discount.type,
        customization: { ...customization },
        dispatch: this.props.dispatch
      };
      this.currentItem.quantity = quantity;
      editCart(customParams);
      this.closePopup();
      this.setState({
        prev_qty: item.quantity
      });
    } else {
      let quantityChanged = quantity - item.quantity;
      let operator =
        quantityChanged > 0
          ? configuration.upOperator
          : configuration.downOperator;
      const params = {
        id_cart,
        quantity: Math.abs(quantityChanged),
        operator,
        id_product,
        id_product_attribute,
        discount: discount.value,
        discount_type: discount.type,
        dispatch: this.props.dispatch
      };
      this.currentItem.quantity = quantity;
      editCart(params);
      this.closePopup();
    }
  };

  removeItem = () => {
    this.props.dispatch(loadingItem(true));
    const { id_cart, item, discount } = this.state;
    const { products } = this.props;
    let productExist = _.filter(products, product => {
      return (
        _.isEqual(product.id_product, item.id_product) &&
        _.isEqual(product.id_product_attribute, item.id_product_attribute)
      );
    });
    let customization = [];
    const { id_product, id_product_attribute } = item;
    if (item.has_customize && productExist.length > 1) {
      if (item.custom_data) {
        let type = item.custom_data.image_fields
          ? configuration.image_fields
          : configuration.text_fields;
        let customItemInfo = {
          id_customization: _.head(item.custom_data[type]).id_customization,
          is_remove: true,
          type: _.isEqual(type, configuration.image_fields)
            ? configuration.file
            : configuration.text
        };
        customization.push(customItemInfo);
      }
      const params = {
        id_cart,
        quantity: Math.abs(item.quantity),
        operator: configuration.downOperator,
        id_product,
        id_product_attribute,
        discount: discount.value,
        discount_type: discount.type,
        customization: { ...customization },
        dispatch: this.props.dispatch
      };
      editCart(params);
    } else {
      let id_customization = configuration.emptyString;
      if (item.custom_data) {
        let type = item.custom_data.image_fields
          ? configuration.image_fields
          : configuration.text_fields;
        id_customization = _.head(item.custom_data[type]).id_customization;
      }
      const params = {
        id_cart,
        id_product,
        id_customization,
        id_product_attribute,
        dispatch: this.props.dispatch
      };
      removeProductFromCart(params);
    }
  };

  render() {
    const {
      discount,
      visible,
      item,
      quantity,
      isHaveChanged,
      outOfRangeAmount,
      outOfRangePercent,
      isValidated,
      isValidatedQty
    } = this.state;
    return (
      <View style={styles.itemCartContainer}>
        <TouchableOpacity style={styles.itemCart} onPress={this.showPopup}>
          <View style={styles.textQtyCartWrapper}>
            <Text style={styles.quantityCard}>{item.quantity}</Text>
          </View>
          <View style={styles.infoItemCart}>
            <Text style={styles.cartTxt}>
              {limitText(_.head(this.props.item.name))}
            </Text>
            <Text>{item.short_combination}</Text>
          </View>
          <View style={styles.priceItemCart}>
            <Text style={[styles.cartTxt, styles.rightTxt]}>
              {displayPrice(Number(item.price_with_reduction * item.quantity))}
            </Text>
            {item.reduction > 0 && (
              <Text style={[styles.rightTxt, styles.lineThrough]}>
                {displayPrice(
                  Number(item.price_without_reduction * item.quantity)
                )}
              </Text>
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.btnDelWrapper}>
          <TouchableOpacity onPress={this.removeItem}>
            <MaterialIcons name="clear" style={styles.delProductCart} />
          </TouchableOpacity>
        </View>
        <Dialog
          visible={visible}
          onTouchOutside={this.closePopup}
          width={0.5}
          dialogStyle={styles.noBorderRadius}
        >
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.paddingVertical10}>
              <View style={styles.titleBarPopup}>
                <TouchableOpacity
                  style={styles.buttonPopupPanel}
                  onPress={this.closePopup}
                >
                  <MaterialIcons name="clear" style={styles.xButton} />
                </TouchableOpacity>
                <View style={styles.titlePopupPanel}>
                  <Text style={styles.textTitlePopup}>{_.head(item.name)}</Text>
                  <View style={styles.titleCombination}>
                    <Text style={styles.listItemSearchTxt}>
                      {item.short_combination}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.buttonCheckPopupPanel}
                  onPress={this.updateProduct}
                  disabled={!(isValidated && isValidatedQty && isHaveChanged)}
                >
                  <MaterialIcons
                    name="check"
                    style={
                      isValidated && isValidatedQty && isHaveChanged
                        ? styles.checkButton
                        : styles.xButton
                    }
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.contentPopup}>
                <Text style={styles.grayTxt}>{lang.quantity}</Text>
                <View style={styles.quantityWrapper}>
                  <TouchableOpacity
                    style={styles.btnChangeQuantity}
                    onPress={() => this.changeNoItem(-1)}
                  >
                    <AntDesignIcons
                      name="minuscircleo"
                      style={styles.changeQuantityIcon}
                    />
                  </TouchableOpacity>
                  <View style={styles.quantityPopup}>
                    <TextInput
                      keyboardType="number-pad"
                      onBlur={this.onChangeQtyBlur}
                      ref={input => (this.changeQtyInput = input)}
                      clearTextOnFocus={true}
                      style={styles.inputQty}
                      value={quantity.toString()}
                      onChangeText={value => this.onChangeQty(value)}
                    />
                    <Text style={styles.priceTxt}>
                      {displayPrice(
                        Number(item.price_without_reduction * quantity)
                      )}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => this.changeNoItem(1)}
                    style={styles.btnChangeQuantity}
                  >
                    <AntDesignIcons
                      name="pluscircleo"
                      style={styles.changeQuantityIcon}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.flexDirectionRow}>
                  <TouchableOpacity
                    onPress={() =>
                      this.onDiscountTypeChange(configuration.percentage)
                    }
                    disabled={!_.isEqual(discount.type, configuration.amount)}
                  >
                    <Text
                      style={
                        _.isEqual(discount.type, configuration.amount)
                          ? styles.textDiscountInactiveTitle
                          : styles.textDiscountActiveTitle
                      }
                    >
                      {sprintf(
                        configuration.format.discount,
                        lang.discount,
                        lang.percent
                      )}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.onDiscountTypeChange(configuration.amount)
                    }
                    disabled={_.isEqual(discount.type, configuration.amount)}
                    style={styles.marStart10}
                  >
                    <Text
                      style={
                        _.isEqual(discount.type, configuration.amount)
                          ? styles.textDiscountActiveTitle
                          : styles.textDiscountInactiveTitle
                      }
                    >
                      {sprintf(
                        configuration.format.discount,
                        lang.discount,
                        lang.amount
                      )}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TextInput
                  onFocus={this.onDiscountFocus}
                  onBlur={this.onDiscountBlur}
                  ref={input => (this.discountInput = input)}
                  style={styles.inputDiscountItem}
                  autoCapitalize="words"
                  keyboardType={"decimal-pad"}
                  maxLength={
                    _.isEqual(discount.type, configuration.amount)
                      ? _.size(formatPrice(item.price_without_reduction) + 1)
                      : configuration.maxLengthPercent
                  }
                  onChangeText={discount => this.changeDiscount(discount)}
                  value={discount.value.toString()}
                />
                {outOfRangePercent && (
                  <Text style={styles.warningText}>
                    {lang.out_of_range_percent}
                  </Text>
                )}
                {outOfRangeAmount && (
                  <View>
                    <Text style={styles.warningText}>
                      {lang.out_of_range_amount}
                    </Text>
                    <Text>
                      {sprintf(
                        configuration.format.original_price,
                        _.head(item.name),
                        item.price_without_reduction
                      )}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Dialog>
      </View>
    );
  }
}
