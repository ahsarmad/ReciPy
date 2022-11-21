import { StyleSheet, View, Button } from "react-native";
import React, { useState, useContext } from "react";
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
import { AuthContext } from "../Context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

export function DrawerContent(props) {
  const paperTheme = useTheme();

  const { colors } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const { logout, toggleTheme } = useContext(AuthContext);

  const { userInfo } = useContext(AuthContext);

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
                source={{
                  uri: "data:image/png;base64,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",
                }}
                size={75}
                backgroundColor={"#rgb(0, 230, 230)"}
              />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 15,
                  marginTop: 10, // subject to change
                }}
              >
                <Title style={styles.title}>{userInfo.name}</Title>
                <Caption style={styles.userNameCaption}>
                  @{userInfo.username}
                </Caption>
              </View>
            </View>
            <View style={styles.row}>
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
            </View>
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
                <AntDesign name="user" color={colors.text} size={size} />
              )}
              label="Profile"
              labelStyle={{ fontSize: 17, color: colors.text }}
              onPress={() => {
                props.navigation.navigate("ProfileScreen");
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
                props.navigation.navigate("Favorites");
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
                props.navigation.navigate("ShoppingList");
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

            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="ios-help" color={colors.text} size={size} />
              )}
              label="Contact Us"
              labelStyle={{ fontSize: 17, color: colors.text }}
              inactiveTintColor="black"
              onPress={() => {
                props.navigation.navigate("Contact");
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
          onPress={() => {
            logout();
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
    fontSize: 16,
    marginTop: 0,
    fontWeight: "bold",
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
