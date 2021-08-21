import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AppCard from "../components/AppCard";
import Screen from "../components/Screen";
interface Listing {
  id: number;
  image: any;
  title: string;
  subTitle: string;
}
const listings: Listing[] = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red jacket for sale",
    subTitle: "$100",
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    subTitle: "$1000",
  },
];
function ListingsScreen(props) {
  return (
    <Screen customStyles={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
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
