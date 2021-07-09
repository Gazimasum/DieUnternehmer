import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import fire from "../config/fire";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const authcontext = useContext(AuthContext);
  const handleSubmit = () => {
    fire.auth().signOut();
    authcontext.setUser("");
    authStorage.removeUser();
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => handleSubmit()} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
};

export default AppNavigator;
