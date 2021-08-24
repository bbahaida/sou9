import { useFormikContext } from "formik";
import React from "react";
import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function FormPicker({
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
      <Picker
        selectedItem={values[field]}
        items={items}
        onSelect={(item) => setFieldValue(field, item)}
        placeholder={placeholder}
        width={width}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        {...otherProps}
      />
      <ErrorMessage message={errors[field]} visible={touched[field]} />
    </>
  );
}

export default FormPicker;
