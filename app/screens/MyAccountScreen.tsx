import React from "react";
import ListItem from "../components/ListItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";

import { FlatList, StyleSheet } from "react-native";
import color from "../config/color";
import ListItemSeparator from "../components/ListItemSeparator";
import Icon from "../components/Icon";

interface Setting {
  icon: string;
  id: number;
  title: string;
  customStyles: {};
  iconConatinerStyle: {};
}
const settings: Setting[] = [
  {
    id: 1,
    icon: "format-list-bulleted",
    title: "My Listings",
    customStyles: {},
    iconConatinerStyle: {
      backgroundColor: color.primary,
    },
  },
  {
    id: 2,
    icon: "email",
    title: "My Messages",
    customStyles: {},
    iconConatinerStyle: {
      backgroundColor: color.secondary,
    },
  },
  {
    id: 3,
    icon: "logout",
    title: "Log Out",
    customStyles: {
      marginTop: 30,
    },
    iconConatinerStyle: {
      backgroundColor: "#ffe66d",
    },
  },
];

function MyAccountScreen(props) {
  return (
    <Screen customStyles={styles.screen}>
      <ListItem
        title="Brahim Bahaida"
        subTitle="b.bahaida@mytower.fr"
        image={require("../assets/mosh.jpg")}
        onPress={() => {}}
        customStyles={styles.account}
      />
      <FlatList
        data={settings}
        keyExtractor={(setting) => setting.id.toString()}
        renderItem={({ item }) => (
          <Icon
            title={item.title}
            icon={item.icon}
            customStyles={item.customStyles}
            iconConatinerStyle={item.iconConatinerStyle}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f7f4f4",
  },
  account: {
    backgroundColor: "white",
    marginBottom: 50,
  },
  items: {
    backgroundColor: "white",
  },
});
export default MyAccountScreen;
