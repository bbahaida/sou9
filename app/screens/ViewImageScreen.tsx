import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";

import colors from "./../config/color";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.close}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.delete}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
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
    position: "absolute",
    top: 40,
    left: 30,
  },
  delete: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
export default ViewImageScreen;
