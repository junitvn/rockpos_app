import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "../themes/default/styles";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { FlatList } from "react-native-gesture-handler";
import { refreshCart } from "../actions/cartActions";
import ItemCartContainer from "../containers/ItemCartContainer";
import _ from "lodash";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      idCart: 0
    };
  }

  componentDidMount() {
    this.setState({ idCart: this.props.data.idCart });
  }

  componentWillReceiveProps(nextProps) {
    const { cart } = nextProps.data;
    let customProducts = [];
    if (cart.products) {
      _.map(cart.products, product => {
        if (!_.isEmpty(product.customization_datas)) {
          let tempProduct = _.cloneDeep(product);
          let totalQty = product.quantity;
          let customQty = 0;
          _.map(product.customization_datas, custom_data => {
            customQty += custom_data.quantity;
            let customProduct = _.assign({}, tempProduct, {
              custom_data: custom_data,
              has_customize: true,
              quantity: custom_data.quantity
            });
            customProducts.push(customProduct);
          });
          if (totalQty - customQty > 0) {
            let originalProduct = _.cloneDeep(product);

            customProducts.push(
              _.assign({}, originalProduct, {
                has_customize: true,
                quantity: totalQty - customQty
              })
            );
          }
        } else {
          customProducts.push(product);
        }
      });
    }
    this.setState({
      products: customProducts,
      idCart: nextProps.data.idCart
    });
  }

  keyExtractor = (item, index) => index.toString();

  renderItemCart = ({ item, index }) => {
    const { products } = this.state;
    return (
      <ItemCartContainer
        item={item}
        index={index}
        products={products}
        removeItem={this.props.removeItem}
        dispatch={this.props.dispatch}
      />
    );
  };

  refreshCart = () => {
    this.props.dispatch(refreshCart());
  };

  render() {
    const { products } = this.state;
    return (
      <View style={styles.cartContainer}>
        <View style={styles.optionPanel}>
          <AntDesignIcon name="pluscircle" style={styles.iconPlus} />
          <TouchableOpacity onPress={this.refreshCart}>
            <AntDesignIcon name="delete" style={styles.iconDelete} />
          </TouchableOpacity>
        </View>
        <View style={styles.cartDetailPanel}>
          <FlatList
            style={styles.listCart}
            data={products}
            extraData={this.state}
            renderItem={this.renderItemCart}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    );
  }
}
