import React, { useState } from "react";
import { View, Text, Button, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import * as Font from "expo-font";
import { AppLoading } from "expo";

/**
 * Import all the necessary screens/ components
 */

import MainTab from "./screens/MainTab";
import Contact from "./screens/Contact";
import Settings from "./screens/Settings";
import Favorites from "./screens/Favorites";

import { DrawerContent } from "./screens/DrawerContent";

// Implementing Root Stack Structure for splash - sign in - sign up navigation

import RootStack from "./screens/RootStack";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
      {/* <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="HomeDrawer"
          component={MainTab}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Contact" component={Contact} options={{}} />
        <Drawer.Screen name="Settings" component={Settings} options={{}} />
        <Drawer.Screen name="Favorites" component={Favorites} options={{}} />
  </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
