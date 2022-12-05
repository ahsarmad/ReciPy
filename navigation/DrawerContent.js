import { StyleSheet, View, Button } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import {
  Avatar,
  Title,
  useTheme,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Switch,
  Colors,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "../src/graphql/queries";

import { AuthContext } from "../Context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

export function DrawerContent(props) {
  const paperTheme = useTheme();

  const { colors } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const { logout, toggleTheme } = useContext(AuthContext);

  const { userInfo } = useContext(AuthContext);

  // useEffect(() => {
  //   const updateUser = async () => {
  //     // Get the current user thats authenticated
  //     const userInfo = await Auth.currentAuthenticatedUser({
  //       bypassCache: true,
  //     });

  //     // Check if the user is already in the db
  //     if (userInfo) {
  //       const userData = await API.graphql(
  //         graphqlOperation(getUser, { id: userInfo.attributes.sub })
  //       );
  //       console.log(userData);
  //       if (!userData.data.getUser) {
  //         const user = {
  //           id: userInfo.attributes.sub,
  //           name: userInfo.attributes.name,
  //           email: userInfo.attributes.email,
  //           username: userInfo.username,
  //           image: getRandImg(),
  //         };
  //         await saveUser(user);
  //       } else {
  //         console.log("User already in db");
  //       }
  //     }
  //     // If they dont, add them
  //   };
  //   updateUser();
  // }, []);
  return (
    /**  Creating a base user profile display in a drawer menu
     *
     */
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView style={styles.container}>
        <View styles={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              {/* Placeholder image taken from Pexels.com --> Free stock image provider */}
              <Avatar.Image
                source={require("../assets/img/chef-profile.png")}
                size={85}
                // backgroundColor={"#2694f9"}
                backgroundColor={"#b1f2ff"}
                // backgroundColor={"gray"}
              />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 15,
                  marginTop: 10, // subject to change
                }}
              >
                <Text style={styles.title}>Welcome,</Text>
                <Text style={styles.title}>Chef!</Text>
              </View>
            </View>
            {/* <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  0
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  0
                </Paragraph>
                <Caption style={[styles.caption]}>Followers</Caption>
              </View>
            </View> */}
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="home" color={colors.text} size={24} />
              )}
              label="Home"
              labelStyle={{ fontSize: 17, color: colors.text }}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons
                  name="bookmarks-outline"
                  color={colors.text}
                  size={size}
                />
              )}
              label="Favorites"
              labelStyle={{ fontSize: 17, color: colors.text }}
              inactiveTintColor="black"
              onPress={() => {
                props.navigation.navigate("FavoritesScreen");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Feather name="list" size={size} color="black" />
              )}
              label="Grocery List"
              labelStyle={{ fontSize: 17, color: colors.text }}
              inactiveTintColor="black"
              onPress={() => {
                props.navigation.navigate("ShoppingListScreen");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <SimpleLineIcons
                  name="settings"
                  color={colors.text}
                  size={size}
                />
              )}
              label="Settings"
              labelStyle={{ fontSize: 17, color: colors.text }}
              inactiveTintColor="black"
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
          </Drawer.Section>

          {/* <Drawer.Section title="Theme">
            <View style={styles.preference}>
              <Text style={{ fontSize: 17, color: colors.text }}>
                Dark Mode
              </Text>
              <View>
                <Switch
                  onValueChange={toggleTheme}
                  value={paperTheme.dark}
                  trackColor={{ false: "#f4f3f4", true: "#81b0ff" }}
                />
              </View>
            </View>
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="exit-outline" color={colors.text} size={size} />
          )}
          label="Sign Out"
          labelStyle={{ fontSize: 17, color: colors.text }}
          // onPress={() => {
          //   logout();
          // }}
          onPress={() => {
            Auth.signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginLeft: 0,
    fontSize: 26,
    marginTop: -12,
    fontFamily: "Quicksand-Bold",
    lineHeight: 50,
  },
  userNameCaption: {
    marginLeft: 0,
    fontSize: 15,
    lineHeight: 16,
  },
  caption: {
    marginLeft: 1,
    fontSize: 16,
    lineHeight: 16,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    paddingVertical: 15,
  },
  bottomDrawerSection: {
    marginBottom: 20,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
