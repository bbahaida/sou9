import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import defaultStyles from "../config/styles";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

function AppPicker({ icon, items, placeholder, selectedItem, onSelect }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={defaultStyles.color.medium}
              style={styles.icon}
            />
          )}
          <Text
            style={[
              defaultStyles.text,
              styles.text,
              !!selectedItem?.label
                ? {}
                : { color: defaultStyles.color.medium },
            ]}
          >
            {selectedItem?.label || placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={defaultStyles.color.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                onPress={() => {
                  setModalVisible(false);
                  onSelect(item);
                }}
                label={item.label}
              />
            )}
          />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.color.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
