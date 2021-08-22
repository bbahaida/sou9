import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../../config/color";

export interface ListItemProps {
  title: string;
  subTitle?: string;
  image?: any;
  onPress?: any;
  renderRightActions?: any;
  customStyles?: {};
  IconComponent?: any;
}

const Touchable = ({
  title,
  subTitle,
  image,
  onPress,
  customStyles = {},
  IconComponent,
}) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={[styles.container, { ...customStyles }]}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
        </View>
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
}: ListItemProps) => {
  const touchable = (
    <Touchable
      title={title}
      subTitle={subTitle}
      image={image}
      onPress={onPress}
      customStyles={customStyles}
      IconComponent={IconComponent}
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
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 4,
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
