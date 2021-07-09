import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import OfflineNotice from "./app/components/OfflineNotice";
import fire from "./app/config/fire";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  console.disableYellowBox = true;

  const restoreUser = async () => {
    const userUid = await authStorage.getUser();
    if (userUid) {
      fire
        .database()
        .ref("users/" + userUid)
        .once("value", (data) => {
          setUser(data.toJSON());
        });
    }
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
