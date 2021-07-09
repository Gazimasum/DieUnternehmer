import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AppButton({ icon, title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color], flexDirection: "row" },
      ]}
      onPress={onPress}
    >
      {title && <Text style={styles.title}>{title}</Text>}
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.white}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
