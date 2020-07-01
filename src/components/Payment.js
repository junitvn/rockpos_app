import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../themes/default/styles";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.paymentWrapper}>
        <Text> pament </Text>
      </View>
    );
  }
}
