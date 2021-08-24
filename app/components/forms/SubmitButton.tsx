import { useFormikContext } from "formik";
import React from "react";
import Button from "../Button";

function SubmitButton({ title, style }) {
  const { handleSubmit } = useFormikContext();
  return <Button style={style} title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
