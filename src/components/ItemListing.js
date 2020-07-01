import React, { Component } from "react";
import { View } from "react-native";
import ItemBlockList from "./ItemBlockList";
import { FlatList } from "react-native-gesture-handler";
import { toFormData } from "../../utils/apiUtils";
import styles from "../themes/default/styles";
import axios from "axios";
import { api, configuration } from "../configs/constants";
import { loadMore } from "../actions/databaseActions";
import _ from "lodash";

export default class ItemListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      products: this.props.products
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.products
    });
  }

  keyExtractor = (item, index) => index.toString();

  handleLoadMore = () => {
    let page = this.props.page + 1;
    data = {
      id_categories: configuration.idCategories,
      endpoint: "/product/filter",
      page
    };
    let form = toFormData(data, null, "");
    this.setState({
      isLoading: true
    });
    const self = this;
    axios({
      method: "post",
      url: api,
      data: form
    })
      .then(response => {
        const { products } = response.data.data;
        self.setState({
          isLoading: false
        });
        let nextPage = !_.isEmpty(products) ? page : self.props.page;
        self.props.dispatch(loadMore(products, nextPage));
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderItem = ({ item, index }) => {
    const { idCart, idShop } = this.props;
    return (
      <ItemBlockList
        item={item}
        idCart={idCart}
        idShop={idShop}
        index={index}
        type="all"
        dispatch={this.props.dispatch}
      />
    );
  };

  render() {
    const { products } = this.state;
    return (
        <View style={styles.itemListingContainer}>
          <FlatList
            data={products}
            renderItem={this.renderItem}
            columnWrapperStyle={styles.columnWrapper}
            keyExtractor={this.keyExtractor}
            numColumns={configuration.numOfColumns}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.2}
          />
        </View>
    );
  }
}
