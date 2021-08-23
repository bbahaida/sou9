import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon backgroundColor={item.color} name={item.icon} size={80} />
        <Text style={styles.label}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 15,
    //width: "33%",
  },
  label: { marginTop: 10, textAlign: "center" },
});

export default CategoryPickerItem;
