import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().moreThan(0).lessThan(10000).required().label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothes",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

function ListingEditScreen(props) {
  return (
    <Screen customStyles={styles.screen}>
      <AppForm
        initialValues={{ title: "", price: 0, category: null, description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField field="title" placeholder="Title" autoCorrect={false} />
        <AppFormField
          field="price"
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
        />
        <AppFormPicker
          field="category"
          placeholder="Category"
          items={categories}
        />
        <AppFormField
          field="description"
          placeholder="Description"
          autoCorrect={false}
        />
        <SubmitButton style={{ marginTop: 10 }} title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
export default ListingEditScreen;
