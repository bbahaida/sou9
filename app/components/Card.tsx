import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/color";

const Card = ({ title, subTitle, image }) => {
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
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    backgroundColor: "#fff",
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
  price: {
    color: colors.secondary,
    fontSize: 17,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});

export default Card;
