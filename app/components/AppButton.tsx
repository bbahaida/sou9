import React, { Children } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

const AppButton = ({ name, btnBackground }) => {
  return (
    <View style={{ ...styles.button, backgroundColor: btnBackground }}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 60,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "#fff",
    textTransform: "uppercase",
  },
});

export default AppButton;
