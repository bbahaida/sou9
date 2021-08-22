import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import color from "../config/color";

interface Setting {
  icon: {
    name: string;
    size?: number;
    backgroungColor?: string;
    iconColor?: string;
  };
  id: number;
  title: string;
  customStyles: {};
}
const settings: Setting[] = [
  {
    id: 1,
    icon: {
      name: "format-list-bulleted",
      size: 40,
      backgroungColor: color.primary,
    },
    title: "My Listings",
    customStyles: {},
  },
  {
    id: 2,
    icon: {
      name: "email",
      size: 40,
      backgroungColor: color.secondary,
    },
    title: "My Messages",
    customStyles: {},
  },
  {
    id: 3,
    icon: {
      name: "format-list-bulleted",
      size: 40,
      backgroungColor: "#ffe66d",
    },
    title: "Log Out",
    customStyles: {
      marginTop: 30,
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
          <ListItem
            title={item.title}
            IconComponent={
              <Icon
                name={item.icon.name}
                size={item.icon.size}
                backgroundColor={item.icon.backgroungColor}
                iconColor={item.icon.iconColor}
              />
            }
            customStyles={item.customStyles}
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
