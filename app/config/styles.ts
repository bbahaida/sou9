import { Platform } from "react-native";
import color from "./color";

export default {
  color,
  text: {
    color: color.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
