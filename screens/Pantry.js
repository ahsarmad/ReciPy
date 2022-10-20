import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

/**
 * Created base functional component with basic button functionality for testing purposes
 * Set navigation button to navigate to home screen, and added ability to push same screen onto stack
 * multiple times with traversing backwards enabled by back button
 * */

const Pantry = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Setting some basic navigation buttons for testing purposes */}
      <Button
        title="Go to pantry again"
        onPress={() => navigation.push("Pantry")}
      />
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Pantry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
