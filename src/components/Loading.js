import { View, ActivityIndicator } from "react-native";
import React from "react";
import styles from "../themes/default/styles";

const Loading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#4CB050" style={styles.indicator} />
  </View>
);
export default Loading;
