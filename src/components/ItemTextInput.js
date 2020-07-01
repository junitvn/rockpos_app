import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import { lang } from "../configs/constants";
import styles from "../themes/default/styles";
import _ from "lodash";

export default class ItemTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.customization.value ? this.props.customization.value : ""
    };
  }

  componentDidMount() {
    let { customization, index } = this.props;
    if (customization.value) {
      this.setState({
        text: customization.value
      });
    }
    this.checkRequired(customization, index);
  }

  onChangeTxtInput(value) {
    let { customization, index, onChangeInput } = this.props;
    this.setState({
      text: value
    });
    customization = _.assign({}, customization, {
      value: value
    });
    onChangeInput(customization, index);
  }

  checkRequired = (customization, index) => {
    let required = true;
    if (customization.required > 0) {
      if (this.state.text !== "") {
        required = true;
      } else {
        required = false;
      }
    }
    this.props.checkRequiredInput(required, index);
  };

  render() {
    const { customization, index } = this.props;
    const { text } = this.state;
    return (
      <View key={customization.id_customization} style={styles.height100}>
        <Text style={styles.customizationTitle}>
          {customization.name}
          {customization.required > 0 ? (
            <Text style={styles.redTxt}>{lang.required}</Text>
          ) : null}
        </Text>
        <TextInput
          style={styles.inputTxt}
          value={text}
          onBlur={() => {
            this.checkRequired(customization, index);
          }}
          onChangeText={value => {
            this.onChangeTxtInput(value);
          }}
        />
        <Text style={styles.notiTxt}>{lang.max_char}</Text>
      </View>
    );
  }
}
