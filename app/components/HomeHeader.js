import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Constants from "expo-constants";

export default function HomeHeader({ navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ flex: 1 }}
      >
        <MaterialCommunityIcons
          name="sort-variant"
          size={40}
          color={colors.primary}
        />
      </TouchableOpacity>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View
        style={{
          flexDirection: "row",
          flex: 1,

          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="magnify"
            size={30}
            color={colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={30}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 200,
    marginTop: Constants.statusBarHeight,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
  },
});
