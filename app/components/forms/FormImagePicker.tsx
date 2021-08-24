import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ field }) {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const imageUris: [] = values[field];
  const handleAdd = (imageUri) => {
    setFieldValue(field, [...imageUris, imageUri]);
  };
  const handleRemove = (imageUri) => {
    setFieldValue(
      field,
      imageUris.filter((uri) => uri !== imageUri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />

      <ErrorMessage message={errors[field]} visible={touched[field]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
