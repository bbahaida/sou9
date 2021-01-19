import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "./../config/color";

const AppCard = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 40,
  },
  image: {
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: "100%",
  },
  text: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "space-evenly",
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontFamily: "Roboto",
  },
  price: {
    flex: 1,
    color: colors.secondary,
    fontSize: 17,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});

export default AppCard;
