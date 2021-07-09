import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import defaultStyles from "../config/styles";
import colors from "../config/colors";
import AppText from "./AppText";

export default function AppRegTextInput({ title, ...otherProps }) {
  return (
    <>
      <AppText style={{ fontSize: 14 }}>{title}</AppText>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={defaultStyles.colors.medium}
          style={defaultStyles.textInput}
          {...otherProps}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderColor: colors.primary,
    padding: 10,
    marginVertical: 10,
    width: "100%",
    borderWidth: 1,
  },

  icon: {
    marginRight: 10,
  },
});
