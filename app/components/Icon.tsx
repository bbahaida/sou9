import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/color";
import { StyleSheet } from "react-native";

function Icon({ title, icon, customStyles, iconConatinerStyle }) {
  return (
    <View style={[styles.container, { ...customStyles }]}>
      <View style={[styles.icon, { ...iconConatinerStyle }]}>
        <MaterialCommunityIcons name={icon} color="white" size={20} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    padding: 13,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
  },
});

export default Icon;
