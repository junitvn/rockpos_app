import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, Image, Keyboard } from "react-native";
import { sprintf } from "printj";
import _ from "lodash";
import styles from "../themes/default/styles";
import { configuration, lang, api } from "../configs/constants";
import { toFormData, limitText } from "../../utils/apiUtils";
import axios from "axios";
import { loadingItem, openPopup, stopSearching } from "../actions/homeActions";
import withPreventDoubleClick from "./withPreventDoubleClick";
import { addToCartWithoutCustomization } from "../../utils/cartUltils";
const TouchableEx = withPreventDoubleClick(TouchableOpacity);

export default class ItemSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      query: "",
      isDialogVisible: false,
      isLoading: true,
      item: this.props.item,
      idShop: "",
      idCart: 0,
      isSearchProduct: _.isEqual(this.props.type, configuration.searchProduct)
    };
  }

  componentDidMount() {
    const { idShop, idCart } = this.props.data;
    this.setState({
      idCart,
      idShop
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      query: nextProps.home.query
    });
  }

  closeSearch = () => {
    const { dispatch } = this.props;
    dispatch(stopSearching(configuration.params.backAfterStopSearch));
  };

  onItemClick = item => {
    Keyboard.dismiss();
    const { dispatch } = this.props;
    dispatch(loadingItem(true));
    let itemInScope = {};
    data = {
      id_product: item.id_product,
      endpoint: "/product/combination/get"
    };
    let form = toFormData(data, null, "");
    let self = this;
    axios({
      method: "post",
      url: api,
      data: form
    })
      .then(function(response) {
        const { combinations, customization_fields } = response.data.data;
        const { idCart, idShop } = self.state;
        itemInScope = {
          ...self.state.item,
          coms: combinations,
          customization_fields
        };
        self.setState(
          {
            isLoading: false
          },
          () => {
            self.props.dispatch(loadingItem(false));
          }
        );
        if (item.has_combinations > 0 || item.has_customizations > 0) {
          const currentItem = {
            data: itemInScope,
            idCart,
            idShop
          };
          dispatch(openPopup(currentItem));
          self.closeSearch();
        } else {
          const addToCartParams = {
            id_product: item.id_product,
            id_product_attribute: 0,
            id_shop: idShop,
            id_cart: idCart,
            dispatch: self.props.dispatch
          };
          addToCartWithoutCustomization(addToCartParams);
          self.closeSearch();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onCustomerItemClick = () => {
    console.log(this.state.item);
  };

  onCloseClick = () => {
    this.setState({
      isDialogVisible: false
    });
  };

  highlightQuery = (property, query) => {
    const label = this.props.item[property];
    let regex = label.match(new RegExp(query, "ig"));
    let words = _.split(_.toLower(label), _.toLower(query));
    return words.map((word, index) => {
      return (
        <Text key={index} style={styles.productNameSearchTxt}>
          {label.match(new RegExp(word, "i"))}
          {index < words.length - 1 && (
            <Text style={styles.productNameSearchTxt}>{regex[index]}</Text>
          )}
        </Text>
      );
    });
  };

  render() {
    const { query } = this.props.home;
    const { productKey } = configuration;
    const { item, isSearchProduct } = this.state;
    return (
      <View>
        {isSearchProduct ? (
          <TouchableEx
            onPress={() => this.onItemClick(item)}
            style={styles.itemSearchResultContainer}
          >
            <Image
              source={{ uri: item.image_url }}
              style={styles.imageItemSearch}
            />
            <View style={styles.namePanelItemSearch}>
              <Text style={styles.productNameSearchTxt}>
                {this.highlightQuery(productKey.name, query)}
              </Text>
              <Text style={styles.listItemSearchTxt}>
                {sprintf(
                  configuration.search_item_text_format,
                  item.id_product,
                  item.reference,
                  item.quantity
                )}
              </Text>
            </View>
            <View style={styles.priceItemSearchPanel}>
              <Text style={styles.priceItemSearch}>
                {sprintf(configuration.format.price, item.price)}
              </Text>
            </View>
          </TouchableEx>
        ) : (
          <TouchableEx
            style={styles.itemCustomerSearchContainer}
            onPress={this.onCustomerItemClick}
          >
            <Text style={styles.itemCustomerNameSearch}>
              {sprintf(
                configuration.format.name,
                //item.firstname,
                //item.lastname
                "Lam",
                "Nguyen"
              )}
            </Text>
            {/* <Text style={styles.itemCustomerEmailSearch}>{item.email}</Text> */}
            <Text style={styles.itemCustomerEmailSearch}>
              {"lamnn@hamsa.vn"}
            </Text>
          </TouchableEx>
        )}
      </View>
    );
  }
}
