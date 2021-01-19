import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppButton from "../components/AppButton";
import colors from "./../config/color";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.bgImage}
      source={require("./../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./../assets/logo-red.png")}
        />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <AppButton name="Login" btnBackground={colors.primary} />
      <AppButton name="Register" btnBackground={colors.secondary} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  register: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 70,
  },
  login: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 70,
  },
  logoContainer: {
    top: 60,
    position: "absolute",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 23,
  },
});

export default WelcomeScreen;
