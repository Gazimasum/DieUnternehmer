import React, { useState, useContext } from "react";
import { StyleSheet, Image, ActivityIndicator } from "react-native";
import * as Yup from "yup";
import Constants from "expo-constants";

import Screen from "../components/Screen";
import { AppForm, AppFormFields, SubmitButton } from "../components/forms";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppUnfilledButton from "../components/AppUnfilledButton";
import fire from "../config/fire";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authContext = useContext(AuthContext);

  const handelSubmit = (values) => {
    setLoading(true);
    fire
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((u) => {
        setLoading(false);
        setError(" ");
        fire
          .database()
          .ref("users/" + u.user.uid)
          .once("value", (data) => {
            authContext.setUser(data.toJSON());
            authStorage.storeUser(u.user.uid);
          });

        return console.log(authContext.user);
      })
      .catch((err) => {
        const e = err.toJSON();
        setLoading(false);
        setError(e.message);
        return console.log(e);
      });
  };

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppText
        style={{ alignSelf: "center", color: colors.medium, fontSize: 15 }}
      >
        DAS TOOL FUT UNTERNEHMER
      </AppText>

      {loading && (
        <ActivityIndicator
          animating={loading}
          size="large"
          color={colors.primary}
        />
      )}
      {error && (
        <AppText
          style={{
            alignSelf: "center",
            color: colors.danger,
            justifyContent: "center",
            padding: 10,
          }}
        >
          {error}
        </AppText>
      )}
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handelSubmit(values)}
        validationSchema={validationSchema}
      >
        <AppFormFields
          autoCapitalize="none"
          icon="email"
          placeholder="Enter Your Email"
          keyboardType="email-address"
          name="email"
          autoCorrect={false}
          textContentType="emailAddress"
        />

        <AppFormFields
          autoCapitalize="none"
          icon="lock"
          placeholder="Enter Your Password"
          secureTextEntry={true}
          autoCorrect={false}
          textContentType="password"
          name="password"
        />
        <SubmitButton title="Login" />
        <AppUnfilledButton
          title="Konto erstellen"
          icon="arrow-right"
          onPress={() => navigation.navigate("Registration")}
        ></AppUnfilledButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    height: "40%",
    width: "100%",
    marginTop: Constants.statusBarHeight,
    marginBottom: -20,
    alignSelf: "center",
  },
});
