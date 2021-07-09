import React, { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const key = "authUser";

const storeUser = async (authUser) => {
  try {
    await SecureStore.setItemAsync(key, authUser);
    console.log("user Store");
  } catch (error) {
    console.log("Faild Storring The user");
  }
};

const getUserUid = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error Storing User");
  }
};

const getUser = async () => {
  const uid = await getUserUid();
  return uid ? uid : null;
};

const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error Removing");
  }
};

export default { getUser, storeUser, removeUser };
