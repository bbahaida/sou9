import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import defaultStyles from "../../config/styles";
import { useState } from "react";

export interface ListItemProps {
  title: string;
  subTitle?: string;
  image?: any;
  onPress?: any;
  renderRightActions?: any;
  customStyles?: {};
  IconComponent?: any;
  showChevrons?: boolean;
}

const Touchable = ({
  title,
  subTitle,
  image,
  onPress,
  customStyles = {},
  IconComponent,
  showChevrons,
}) => {
  return (
    <TouchableHighlight
      underlayColor={defaultStyles.color.light}
      onPress={onPress}
    >
      <View style={[styles.container, { ...customStyles }]}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {subTitle && (
            <Text numberOfLines={2} style={styles.subTitle}>
              {subTitle}
            </Text>
          )}
        </View>
        {showChevrons && (
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={defaultStyles.color.medium}
          />
        )}
      </View>
    </TouchableHighlight>
  );
};
const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  customStyles = {},
  IconComponent,
  showChevrons,
}: ListItemProps) => {
  const touchable = (
    <Touchable
      title={title}
      subTitle={subTitle}
      image={image}
      onPress={onPress}
      customStyles={customStyles}
      IconComponent={IconComponent}
      showChevrons={showChevrons}
    />
  );
  if (!!renderRightActions) {
    return (
      <Swipeable renderRightActions={renderRightActions}>{touchable}</Swipeable>
    );
  }
  return touchable;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flexDirection: "column",
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 4,
  },
  subTitle: {
    color: defaultStyles.color.medium,
  },
});

export default ListItem;
