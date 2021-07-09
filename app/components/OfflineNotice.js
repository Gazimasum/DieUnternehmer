import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import NetInfo from "@react-native-community/netinfo";

import colors from "../config/colors";

export default function OfflineNotice() {
  const [netConnected, setConnected] = useState(false);
  const [isInternetReachable, setIsInternetReachable] = useState();

  NetInfo.fetch().then((state) => {
    setConnected(state.type);
    setIsInternetReachable(state.isInternetReachable);
  });
  if (netConnected !== "unknown" && isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    width: "100%",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
  },
});
