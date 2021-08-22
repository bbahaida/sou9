import React, { Children } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import defaultStyles from "../config/styles";

const AppButton = ({ title, style = {}, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={[defaultStyles.text, styles.text]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 55,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
    backgroundColor: defaultStyles.color.primary,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
