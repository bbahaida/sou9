import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();
  return (
    <Screen>
      <View>
        <ImageInput
          onChangeImage={(uri) => setImageUri(uri)}
          imageUri={imageUri}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
