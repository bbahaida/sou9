import React from "react";
import { StyleSheet, Text } from "react-native";
import defaultStyles from "../../config/styles";

function AppErrorMessage({ message, visible }) {
  if (!message || !visible) {
    return null;
  }
  return <Text style={[defaultStyles.text, styles.text]}>{message}</Text>;
}
const styles = StyleSheet.create({
  text: {
    marginLeft: 14,
    fontSize: 15,
    color: defaultStyles.color.danger,
  },
});

export default AppErrorMessage;
