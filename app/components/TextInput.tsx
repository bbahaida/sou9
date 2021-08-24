import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput as ReactTextInput, View } from "react-native";
import defaultStyles from "../config/styles";

interface TextInputProps {
  icon?: string;
  width?: string | number | undefined;
}

function TextInput({ icon, width = "100%", ...otherProps }: TextInputProps) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.color.medium}
          style={styles.icon}
        />
      )}
      <ReactTextInput
        placeholderTextColor={defaultStyles.color.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.color.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default TextInput;
