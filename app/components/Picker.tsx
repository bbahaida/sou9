import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import defaultStyles from "../config/styles";
import PickerItem from "./PickerItem";

function Picker({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelect,
  width = "100%",
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
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
        <FlatList
          numColumns={numberOfColumns}
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setModalVisible(false);
                onSelect(item);
              }}
            />
          )}
        />
        <Button title="Close" onPress={() => setModalVisible(false)} />
      </Modal>
    </>
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
  text: {
    flex: 1,
  },
});

export default Picker;
