import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({ title, listitem, icon, numColumn }) {
  return (
    <View style={{ padding: 10, backgroundColor: colors.secondary }}>
      <View style={{ flexDirection: "row" }}>
        <AppText style={{ color: colors.medium, marginLeft: 5 }}>
          {title}
        </AppText>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={colors.medium}
            style={{ marginLeft: 10 }}
          />
        )}
      </View>

      <FlatList
        data={listitem}
        keyExtractor={(listitem) => listitem.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 20,
              height: "100%",
              backgroundColor: colors.primary,
              margin: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => item.onPress}>
              <AppText style={{ color: colors.white, fontSize: 14 }}>
                {item.title}
              </AppText>
            </TouchableOpacity>
            <MaterialCommunityIcons
              name={item.icon}
              color={colors.white}
              size={20}
            />
          </View>
        )}
        //Setting the number of column
        numColumns={numColumn}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
