import React from "react";
import { ActivityIndicator } from "react-native";
import colors from "../config/colors";

export default function AppActivityIndicator({ visible }) {
  if (!visible) return null;
  return <ActivityIndicator size="large" color={colors.primary} />;
}
