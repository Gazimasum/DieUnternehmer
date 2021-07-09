import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function AppUnfilledButton({
  title,
  onPress,
  color = "primary",
  icon,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { borderColor: colors.medium, borderWidth: 2, color: colors.medium },
      ]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={25}
            color={colors.medium}
            style={styles.icon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: colors.medium,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
  },
  title: {
    color: colors.medium,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    marginVertical: 10,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
    marginLeft: 20,
  },
});
