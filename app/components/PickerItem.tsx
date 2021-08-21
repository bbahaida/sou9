import React from "react";
import { Text, TouchableOpacity } from "react-native";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ padding: 15 }}>{label}</Text>
    </TouchableOpacity>
  );
}

export default PickerItem;
