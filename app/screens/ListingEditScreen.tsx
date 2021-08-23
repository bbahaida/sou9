import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";

import defaultStyles from "../config/styles";

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
    icon: "floor-lamp",
    color: "#fc5c65",
  },
  {
    label: "Cars",
    value: 2,
    icon: "car",
    color: "#fd9644",
  },
  {
    label: "Cameras",
    value: 3,
    icon: "camera",
    color: "#fed330",
  },
  {
    label: "Games",
    value: 4,
    icon: "cards",
    color: "#26de81",
  },
  {
    label: "Clothing",
    value: 5,
    icon: "shoe-heel",
    color: "#2bcbba",
  },
  {
    label: "Sports",
    value: 6,
    icon: "basketball",
    color: "#45aaf2",
  },
  {
    label: "Music",
    value: 7,
    icon: "headphones",
    color: "#4b7bec",
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
          width={120}
          field="price"
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
        />
        <AppFormPicker
          numberOfColumns={3}
          width={"50%"}
          field="category"
          placeholder="Category"
          items={categories}
          PickerItemComponent={CategoryPickerItem}
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
