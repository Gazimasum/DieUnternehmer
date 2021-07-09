import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";
import colors from "../../config/colors";

export default function SubmitButton({ title, icon }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton title={title} icon={icon} onPress={handleSubmit}></AppButton>
  );
}

const styles = StyleSheet.create({});
