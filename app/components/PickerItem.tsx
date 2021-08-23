import React from "react";
import { Text, TouchableOpacity } from "react-native";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ padding: 15 }}>{item.label}</Text>
    </TouchableOpacity>
  );
}
export default PickerItem;
