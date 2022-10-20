import { Text, StyleSheet, View, Button } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Click me!" onPress={() => alert("Profile pending!")} />
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
