import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Click me!"
        onPress={() => alert("Settings page pending!")}
      />
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
