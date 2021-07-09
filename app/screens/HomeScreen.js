import React, { useState, useContext } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import HomeHeader from "../components/HomeHeader";
import AppText from "../components/AppText";
import ItemSeparator from "../components/ItemSeperator";
import ListItem from "../components/ListItem";
import AuthContext from "../auth/context";

const initialPersonlich = [
  {
    id: 1,
    title: "Nachrichten",
    icon: "bell",
    onPress: 'console.log("Notfication")',
  },
  {
    id: 2,
    title: "To Do-Liste",
  },
];
const initialKunden = [
  {
    id: 1,
    title: "Angebote Rechnungen",
  },
  {
    id: 2,
    title: "Aufträge",
  },
  {
    id: 3,
    title: "Timeline",
  },
];
const initialPersonal = [
  {
    id: 1,
    title: "Studen-Zettel",
  },
  {
    id: 2,
    title: "Mitarbeiter",
  },
  {
    id: 3,
    title: "Freelancer",
  },
];
const initialAblage = [
  {
    id: 1,
    title: "Dropbox",
  },
  {
    id: 2,
    title: "One-Drive",
  },
];
const initialInfoBoard = [
  {
    id: 1,
    title: "Websites",
  },
  {
    id: 2,
    title: "Social Media",
  },
  {
    id: 3,
    title: "Affliate Link",
  },
];
const initialSicherheit = [
  {
    id: 1,
    title: "Login Passwörter",
  },
];
const initialFinanzamt = [
  {
    id: 1,
    title: "Einnahmen Ausgaben",
  },
  {
    id: 2,
    title: "Belege",
  },
];

export default function HomeScreen({ navigation }) {
  const [personlich, setPersonlich] = useState(initialPersonlich);
  const [kunden, setKunden] = useState(initialKunden);
  const [personal, setPersonal] = useState(initialPersonal);
  const [ablage, setAblage] = useState(initialAblage);
  const [infoBoard, setInfoBoard] = useState(initialInfoBoard);
  const [sicherheit, setSicherheit] = useState(initialSicherheit);
  const [finanzamt, setFinanzamt] = useState(initialFinanzamt);

  const authcontext = useContext(AuthContext);

  return (
    <Screen style={styles.screen}>
      <HomeHeader navigation={navigation} />
      <ScrollView>
        <View style={styles.userInfo}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/profile-user.png")}
              style={{ height: 50, width: 50 }}
            />
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <AppText style={{ color: colors.dark }}>
                {authcontext.user.benutzername}
              </AppText>
              <AppText style={{ color: colors.medium, fontSize: 16 }}>
                Standport
              </AppText>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <MaterialCommunityIcons
              name="information-variant"
              size={50}
              color={colors.primary}
              style={{ padding: 10 }}
            />
            <AppText style={{ color: colors.medium }}>
              Anstendence To Do's
            </AppText>
          </View>
        </View>
        <ItemSeparator />
        <ListItem
          title="Persönlich"
          icon="pencil"
          listitem={personlich}
          numColumn="2"
        />
        <ItemSeparator />
        <ListItem title="Kunden" icon="star" listitem={kunden} numColumn="3" />
        <ItemSeparator />
        <ListItem
          title="Person"
          icon="account-multiple"
          listitem={personal}
          numColumn="3"
        />
        <ItemSeparator />
        <ListItem
          title="Abiage"
          icon="folder-google-drive"
          listitem={ablage}
          numColumn="2"
        />
        <ItemSeparator />
        <ListItem
          title="InfoBoard"
          icon="information"
          listitem={infoBoard}
          numColumn="3"
        />
        <ItemSeparator />
        <ListItem
          title="Sicherfieit"
          icon="lock"
          listitem={sicherheit}
          numColumn="1"
        />
        <ItemSeparator />
        <ListItem title="Finanzamt" listitem={finanzamt} numColumn="2" />
        <View style={{ padding: 80 }}></View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  userInfo: {
    flexDirection: "column",
    padding: 15,
    backgroundColor: colors.lightdark,
    marginTop: 10,
  },
});
