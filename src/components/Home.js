import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback, Dimensions } from "react-native";
import ItemListing from "./ItemListing";
import { initApp } from "../actions/databaseActions";
import _ from "lodash";
import Loading from "./Loading";
import styles from "../themes/default/styles";
import { lang, api, configuration } from "../configs/constants";
import Header from "./Header";
import SearchContainer from "../containers/SearchContainer";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Dialog from "react-native-popup-dialog";
import ItemSearchContainer from "../containers/ItemSearchContainer";
import axios from "axios";
import ItemPopup from "./ItemPopup";
import Feather from "react-native-vector-icons/Feather";
import { toFormData } from "../../utils/apiUtils";
import CartContainer from "../containers/CartContainer";
import { closePopup, toggleSearch } from "../actions/homeActions";
import Payment from "./Payment";
import { sprintf } from "printj";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true,
      isSearching: false,
      query: "",
      searchResults: [],
      isEmptyResults: false,
      isLoadingItem: false,
      isDialogVisible: false,
      currentItem: {},
      isSeachDone: true
    };
    this.cartHeight = Dimensions.get("window").height * 0.6;
  }

  componentDidMount() {
    /* GET DATA FROM DATABASE OFFLINE */
    // this.props.dispatch(getData(allProducts));
    // this.setState({
    //   products: allProducts,
    //   isLoading: false
    // });
    /* GET DATA FROM API */
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    const { data, home } = nextProps;
    const {
      isSearching,
      searchResults,
      isEmptyResults,
      isLoadingItem,
      isDialogVisible,
      currentItem,
      query,
      isSearchDone
    } = home;
    let self = this;
    this.setState(
      {
        dataProducts: data,
        products: data.products,
        isSearching,
        isLoading: false,
        searchResults,
        isEmptyResults,
        isDialogVisible,
        isLoadingItem,
        currentItem,
        query,
        isSearchDone
      },
      () => {
        setTimeout(function() {
          if (self.state.isLoadingItem) {
            self.setState({ isLoadingItem: false });
          }
        }, 10000);
      }
    );
  }

  onDimViewClick = () => {
    this.props.dispatch(toggleSearch());
  };

  onCloseClick = () => {
    this.props.dispatch(closePopup());
  };

  onAddCustomerPress = () => {
    this.props.dispatch(toggleSearch("customer"));
  };

  getData = () => {
    data = { endpoint: "/sales/shop/init" };
    let form = toFormData(data, null, "");
    const self = this;
    axios({
      method: "post",
      url: api,
      data: form
    })
      .then(response => {
        const { products } = response.data.data.products.cache;
        self.props.dispatch(initApp(response.data.data));
        self.setState({ products, isLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderSearchItem = ({ item, index }) => {
    return (
      <ItemSearchContainer
        item={item}
        index={index}
        type={this.props.home.type}
      />
    );
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    const {
      products,
      isSearching,
      searchResults,
      isLoadingItem,
      isEmptyResults,
      isDialogVisible,
      query,
      currentItem,
      isSearchDone
    } = this.state;
    const { data, changeCombination } = currentItem;
    const { navigation, dispatch } = this.props;
    const { idCart, idShop, page } = this.props.data;

    return (
      <View style={styles.flex1}>
        <View style={styles.searchPanel}>
          {isSearching ? (
            <SearchContainer navigation={navigation} />
          ) : (
            <View style={styles.searchPanel}>
              {isSearching ? (
                <SearchContainer navigation={navigation} />
              ) : (
                <Header navigation={navigation} dispatch={dispatch} />
              )}
            </View>
          )}
        </View>
        <View style={styles.homeContainer}>
          <View style={styles.itemListingWrapper}>
            <ItemListing
              products={products}
              idCart={idCart}
              idShop={idShop}
              page={page}
              dispatch={dispatch}
            />
          </View>
          <View style={styles.cartPanel}>
            <View style={{ height: this.cartHeight }}>
              <CartContainer />
            </View>
            <View style={styles.paymentPanel}>
              {_.isEmpty([]) ? (
                <TouchableOpacity
                  onPress={this.onAddCustomerPress}
                  style={styles.addCustomerWrapper}
                >
                  <Text style={styles.txtAddCustomer}>{lang.add_customer}</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.currentCustomerWrapper}>
                  <Text style={styles.txtCustomer}>{lang.customer}</Text>
                  <View style={styles.customerInfo}>
                    <Text style={styles.txtCustomerName}>
                      {sprintf(configuration.format.name, "Lam", "Nguyen")}
                    </Text>
                    <Text style={styles.txtCustomerEmail}>
                      {"lamnn@hamsa.co"}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.buttonClearCustomerContainer}>
                    <Feather
                      name="x"
                      style={[styles.removeCustomerButton, styles.rightTxt]}
                    />
                  </TouchableOpacity>
                </View>
              )}
              <View style={{ flex: 1 }}>
                <Payment />
              </View>
            </View>
          </View>
          {isSearching && (
            <TouchableWithoutFeedback
              style={styles.dimContainer}
              onPress={_.isEmpty(query) ? this.onDimViewClick : null}
            >
              <View style={styles.dimContainer} />
            </TouchableWithoutFeedback>
          )}
          {!isSearchDone && (
            <View style={styles.loadingItemContainerDim}>
              <Loading />
            </View>
          )}
        </View>
        {searchResults.length ? (
          <View style={styles.listItemSearchContainer}>
            {isLoadingItem && (
              <View style={styles.loadingItemContainer}>
                <Loading />
              </View>
            )}
            <FlatList
              keyboardShouldPersistTaps="always"
              extraData={this.state}
              data={searchResults}
              renderItem={this.renderSearchItem}
              keyExtractor={this.keyExtractor}
            />
          </View>
        ) : isEmptyResults ? (
          <View style={styles.listItemSearchContainer}>
            <Text style={styles.warningText}>{lang.no_items_found}</Text>
            {!isSearchDone && (
              <View style={styles.loadingItemContainer}>
                <Loading />
              </View>
            )}
          </View>
        ) : null}
        {isLoadingItem && (
          <View style={styles.loadingItemContainerDim}>
            <Loading />
          </View>
        )}
        {currentItem.data && isLoadingItem && isDialogVisible ? null : (
          <Dialog
            visible={isDialogVisible}
            onTouchOutside={this.onCloseClick}
            dialogStyle={styles.dialogStyle}
          >
            <ItemPopup
              item={data}
              dispatch={dispatch}
              idShop={idShop}
              idCart={idCart}
              changeCombination={changeCombination}
              customizations={data ? data.customization_fields : []}
              onCloseClick={this.onCloseClick}
            />
          </Dialog>
        )}
      </View>
    );
  }
}
