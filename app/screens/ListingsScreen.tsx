import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
interface Listing {
  id: number;
  image: any;
  title: string;
  price: number;
}
const listings: Listing[] = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red jacket for sale",
    price: 100,
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    price: 1000,
  },
];
function ListingsScreen(props) {
  return (
    <Screen customStyles={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={"$" + item.price}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f8f4f4",
  },
});

export default ListingsScreen;
