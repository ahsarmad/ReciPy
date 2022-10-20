import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

/**
 * Created base functional component with basic button functionality for testing purposes
 * Set navigation button to navigate to home screen
 * */

const Favorites = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Click me!"
        onPress={() => alert("Favorites page pending!")}
      />
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
