import { useFormikContext } from "formik";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import TextInput from "../TextInput";

function FormField({ field, width, ...otherProps }) {
  const { errors, touched, handleChange, setFieldTouched } = useFormikContext();
  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(field)}
        onChangeText={handleChange(field)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage message={errors[field]} visible={touched[field]} />
    </>
  );
}

export default FormField;
