import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./Home";
import Pantry from "./Pantry";
import Explore from "./Explore";
import Profile from "./Profile";
import AddIngredient from "./addIngredient";
import Category from "./category";
import Settings from "./Settings";
import Contact from "./Contact";
import Favorites from "./Favorites";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";
import { Colors } from "react-native-paper";

/**
 *
 */

const HomeStack = createNativeStackNavigator();
const PantryStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();
const AddIngredientStack = createNativeStackNavigator();
const CategoryStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTab = () => (
  <Tab.Navigator
    initialRouteName="Home"
    barStyle={
      {
        // overflow: "hidden",
        // borderTopLeftRadius: 35,
        // borderTopRightRadius: 35,
        // background: Colors.transparent,
      }
    }
  >
    <Tab.Screen
      name="Overview"
      component={HomeStackScreen}
      options={{
        barStyle: { background: "transparent" },
        tabBarLabel: "Home",
        tabBarColor: "#2694F9",
        tabBarIcon: ({ color }) => (
          <Ionicons
            name="ios-home"
            color={color}
            size={26}
            style={{ marginRight: -3, marginVertical: -3, paddingTop: 2 }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="PantryScreen"
      component={PantryStackScreen}
      options={{
        tabBarStyle: { background: "transparent" },
        labelStyle: { paddingTop: 10 },
        tabBarLabel: "Pantry",
        tabBarColor: "#ff5349",
        tabBarIcon: ({ color }) => (
          <Fontisto
            name="shopping-basket"
            color={color}
            size={25}
            style={{ marginRight: -3, marginVertical: -3, paddingTop: 2 }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileScreen"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#3DBE29",
        tabBarIcon: ({ color }) => (
          <Ionicons
            name="ios-person"
            color={color}
            size={26}
            style={{ marginRight: -3, marginTop: -3, paddingTop: 2 }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ExploreScreen"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "#6a0dad",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="creation"
            size={26}
            color={color}
            style={{ marginRight: -3, marginVertical: -3, paddingTop: 2 }}
          /> // subject to change
          // <AntDesign name="find" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      // headerShown: false,
      headerStyle: {
        backgroundColor: "#2694F9",
        background: "transparent",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
        headerLeft: () => (
          <AntDesign.Button
            name="menu-fold"
            size={23}
            backgroundColor="#2694F9"
            onPress={() => navigation.openDrawer()}
          ></AntDesign.Button>
        ),
      }}
    />
    <AddIngredientStack.Screen
      name="AddIngredient"
      component={AddIngredient}
      options={{
        title: "Add Ingredient",
        headerLeft: () => (
          <AntDesign.Button
            name="menu-fold"
            size={23}
            backgroundColor="#2694F9"
            onPress={() => navigation.openDrawer()}
          ></AntDesign.Button>
        ),
      }}
    />
    <CategoryStack.Screen
      name="Category"
      component={Category}
      options={{
        title: "Category",
        headerLeft: () => (
          <AntDesign.Button
            name="menu-fold"
            size={23}
            backgroundColor="#2694F9"
            onPress={() => navigation.openDrawer()}
          ></AntDesign.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const PantryStackScreen = ({ navigation }) => (
  <PantryStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#ff5349",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <PantryStack.Screen
      name="Pantry"
      component={Pantry}
      options={{
        headerLeft: () => (
          <AntDesign.Button
            name="menu-fold"
            size={23}
            backgroundColor="#ff5349"
            onPress={() => navigation.openDrawer()}
          ></AntDesign.Button>
        ),
      }}
    />
  </PantryStack.Navigator>
);
const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#3DBE29",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerLeft: () => (
          <AntDesign.Button
            name="menu-fold"
            size={23}
            backgroundColor="#3DBE29"
            onPress={() => navigation.openDrawer()}
          ></AntDesign.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);
const ExploreStackScreen = ({ navigation }) => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#6a0dad",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ExploreStack.Screen
      name="Explore"
      component={Explore}
      options={{
        headerLeft: () => (
          <AntDesign.Button
            name="menu-fold"
            size={23}
            backgroundColor="#6a0dad"
            onPress={() => navigation.openDrawer()}
          ></AntDesign.Button>
        ),
      }}
    />
  </ExploreStack.Navigator>
);

export default MainTab;
