import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "./../config/color";

const Touchable = ({ title, subTitle, image, onPress, customStyles = {} }) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={[styles.container, { ...customStyles }]}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
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
  renderRightActions = undefined,
  customStyles = {},
}) => {
  const touchable = (
    <Touchable
      title={title}
      subTitle={subTitle}
      image={image}
      onPress={onPress}
      customStyles={customStyles}
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
    marginRight: 10,
  },
  detailsContainer: {
    flexDirection: "column",
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
