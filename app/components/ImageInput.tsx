import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import defaultStyles from "../config/styles";

function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable camera access permission");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  const selectImage = async () => {
    try {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!cancelled) {
        onChangeImage(uri);
      }
    } catch (error) {}
  };

  const deleteImage = () => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this image?",
      [
        {
          text: "Yes",
          onPress: () => {
            onChangeImage(undefined);
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      deleteImage();
    }
  };

  const renderer = imageUri ? (
    <Image style={styles.image} source={{ uri: imageUri }} />
  ) : (
    <MaterialCommunityIcons
      name="camera"
      color={defaultStyles.color.medium}
      size={35}
    />
  );
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        {renderer}
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: defaultStyles.color.light,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
