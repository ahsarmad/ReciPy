import { Text, StyleSheet, View } from "react-native";
import React from "react";
import Feed from "../components/Feed";
import NewPostButton from "../components/NewPostButton";

const Explore = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Feed />
      <NewPostButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Explore;
