import { StyleSheet, View, Button } from "react-native";
import React, { useState } from "react";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";

export function DrawerContent(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = (value) => {
    setIsDarkMode(value);
  };

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
                  uri: "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                }}
                size={120}
              />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 15,
                  marginTop: 10, // subject to change
                }}
              >
                <Title style={styles.title}>Buddy Jr.</Title>
                <Caption style={styles.caption}>@buddah</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  1
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  12.8M
                </Paragraph>
                <Caption style={[styles.caption]}>Followers</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="home" color={"black"} size={size} />
              )}
              label="Home"
              inactiveTintColor="black"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="user" color={"black"} size={size} />
              )}
              label="Profile"
              inactiveTintColor="black"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons
                  name="bookmarks-outline"
                  color={"black"}
                  size={size}
                />
              )}
              label="Favorites"
              inactiveTintColor="black"
              onPress={() => {
                props.navigation.navigate("Favorites");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <SimpleLineIcons name="settings" color={"black"} size={size} />
              )}
              label="Settings"
              inactiveTintColor="black"
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="ios-help" color={"black"} size={size} />
              )}
              label="Contact Us"
              inactiveTintColor="black"
              onPress={() => {
                props.navigation.navigate("Contact");
              }}
            />
          </Drawer.Section>

          <Drawer.Section title="Theme">
            <View style={styles.preference}>
              <Text>Dark Mode</Text>
              <View>
                <Switch
                  onValueChange={toggleSwitch}
                  value={isDarkMode}
                  trackColor={{ false: "#f4f3f4", true: "#81b0ff" }}
                />
              </View>
            </View>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="exit-outline" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
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
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    marginLeft: 1,
    fontSize: 14,
    lineHeight: 14,
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
