import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import { AppForm, AppRegFormFields, SubmitButton } from "../components/forms";
import AppText from "../components/AppText";
import colors from "../config/colors";
import fire from "../config/fire";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  vorname: Yup.string().required().label("Vorname"),
  nochnsme: Yup.string().required().label("Nochnsme"),
  benutzername: Yup.string().required().label("Benutzername"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(2, "Seems a bit short...")
    .max(10, "We prefer insecure system, try a shorter password.")
    .label("Password"),
  confirmPassword: Yup.string()
    .required()
    .label("Confirm password")
    .test("passwords-match", "Passwords must match.", function (value) {
      return this.parent.password === value;
    }),
});

export default function RegisterScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authcontext = useContext(AuthContext);

  const handelSubmit = (values) => {
    setLoading(true);

    fire
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((u) => {
        fire
          .database()
          .ref("users/" + u.user.uid)
          .set({
            vorname: values.vorname,
            nochnsme: values.nochnsme,
            benutzername: values.benutzername,
            email: values.email,
          });
        setLoading(false);
        setError(" ");
        authcontext.setUser(values);
        return console.log(u);
      })
      .catch((err) => {
        setLoading(false);
        setError("Registration Faild");
        return console.log(err);
      });
  };

  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <MaterialCommunityIcons name="arrow-left" size={25} />
        </TouchableOpacity>
        <View>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <AppText
            style={{ alignSelf: "center", color: colors.medium, fontSize: 16 }}
          >
            DAS TOOL FUT UNTERNEHMER
          </AppText>
        </View>
        {loading && (
          <ActivityIndicator
            animating={loading}
            size="large"
            color={colors.primary}
          />
        )}
        {error && (
          <AppText style={{ color: colors.red, alignSelf: "center" }}>
            {error}
          </AppText>
        )}
        <AppForm
          initialValues={{
            vorname: "",
            nochnsme: "",
            benutzername: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => handelSubmit(values)}
          validationSchema={validationSchema}
        >
          <AppRegFormFields
            autoCapitalize="none"
            title="Vorname"
            name="vorname"
            autoCorrect={false}
          />
          <AppRegFormFields
            autoCapitalize="none"
            title="Nochnsme"
            name="nochnsme"
            autoCorrect={false}
          />
          <AppRegFormFields
            autoCapitalize="none"
            title="Benutzername"
            name="benutzername"
            autoCorrect={false}
          />
          <AppRegFormFields
            autoCapitalize="none"
            title="Email"
            keyboardType="email-address"
            name="email"
            autoCorrect={false}
            textContentType="emailAddress"
          />

          <AppRegFormFields
            autoCapitalize="none"
            title="Password"
            secureTextEntry={true}
            autoCorrect={false}
            textContentType="password"
            name="password"
          />
          <AppRegFormFields
            autoCapitalize="none"
            title="Confirm Password"
            secureTextEntry={true}
            autoCorrect={false}
            textContentType="password"
            name="confirmPassword"
          />
          <SubmitButton icon="arrow-right" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    height: 100,
    width: 200,
    marginTop: 0,
    alignSelf: "center",
  },
});
