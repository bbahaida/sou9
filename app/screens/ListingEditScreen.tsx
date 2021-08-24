import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Form from "../components/forms/Form";
import FormField from "../components/forms/FormField";
import FormImagePicker from "../components/forms/FormImagePicker";
import FormPicker from "../components/forms/FormPicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().moreThan(0).lessThan(10000).required().label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().label("Description"),
  images: Yup.array().min(1, "Please select at least 1 images"),
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
  const location = useLocation();

  return (
    <Screen customStyles={styles.screen}>
      <Form
        initialValues={{
          title: "",
          price: 0,
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log({ ...values, location })}
        validationSchema={validationSchema}
      >
        <FormImagePicker field="images" />
        <FormField field="title" placeholder="Title" autoCorrect={false} />
        <FormField
          width={120}
          field="price"
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
        />
        <FormPicker
          numberOfColumns={3}
          width={"50%"}
          field="category"
          placeholder="Category"
          items={categories}
          PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          field="description"
          placeholder="Description"
          autoCorrect={false}
        />
        <SubmitButton style={{ marginTop: 10 }} title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
export default ListingEditScreen;
