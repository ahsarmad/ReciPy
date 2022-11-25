import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Favorites from "../screens/Favorites";
import LikedRecipe from "../screens/likedRecipe";

const Stack = createNativeStackNavigator();

function LikedStack() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="LikedRecipe" component={LikedRecipe} />
    </Stack.Navigator>
  );
}

export default LikedStack;
