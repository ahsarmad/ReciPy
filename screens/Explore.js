import { Text, StyleSheet, View, Button } from "react-native";
import React from "react";

const Explore = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Click me!"
        onPress={() => alert("Explore page pending!")}
      />
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

export default Explore;
