import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";

function AppFormPicker({
  items,
  field,
  placeholder,
  numberOfColumns,
  width,
  PickerItemComponent,
  ...otherProps
}) {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        selectedItem={values[field]}
        items={items}
        onSelect={(item) => setFieldValue(field, item)}
        placeholder={placeholder}
        width={width}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        {...otherProps}
      />
      <AppErrorMessage message={errors[field]} visible={touched[field]} />
    </>
  );
}

export default AppFormPicker;
