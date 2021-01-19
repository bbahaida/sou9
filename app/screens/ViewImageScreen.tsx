import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "./../config/color";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.close} />
      <View style={styles.delete} />
      <View>
        <Image
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
          source={require("./../assets/chair.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  close: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  delete: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
});
export default ViewImageScreen;
