import { useFormikContext } from "formik";
import React from "react";
import AppErrorMessage from "./AppErrorMessage";
import AppTextInput from "../AppTextInput";

function AppFormField({ field, width, ...otherProps }) {
  const { errors, touched, handleChange, setFieldTouched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(field)}
        onChangeText={handleChange(field)}
        width={width}
        {...otherProps}
      />
      <AppErrorMessage message={errors[field]} visible={touched[field]} />
    </>
  );
}

export default AppFormField;
