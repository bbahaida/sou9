import React from "react";
import { View, StyleSheet } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppCard from "./app/components/AppCard";

import colors from "./app/config/color";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <AppCard
          image={require("./app/assets/jacket.jpg")}
          title="Red Dead Redumption II"
          subTitle="$100"
        />
      </View>

      <View style={styles.place} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f4f4",
  },
  card: {
    flex: 2,
    marginBottom: 10,
    width: "100%",
  },
  place: {
    flex: 3,
    backgroundColor: "#fff",
    width: "100%",
  },
});
