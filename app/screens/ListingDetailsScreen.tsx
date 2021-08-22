import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import colors from "../config/color";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Red Jacket For Sale</Text>
        <Text style={styles.detailsPrice}>$100</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Brahim Bahaida"
            subTitle="5 Listing"
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "space-evenly",
  },
  detailsTitle: {
    fontSize: 24,
    fontFamily: "Roboto",
  },
  detailsPrice: {
    color: colors.secondary,
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
